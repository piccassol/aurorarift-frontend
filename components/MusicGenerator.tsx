"use client"

import React from "react"

interface MusicGeneratorProps {
  onGenerate: (prompt: string, audioUrl: string) => void
}

export function MusicGenerator({ onGenerate }: MusicGeneratorProps) {
  const [prompt, setPrompt] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      const response = await fetch("/api/music", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setAudioUrl(data.audioUrl)
      onGenerate(prompt, data.audioUrl)
    } catch (error) {
      console.error("Error generating music:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Music Generator</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter a prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isLoading ? "Generating..." : "Generate"}
        </button>
      </form>

      {audioUrl && (
        <div className="mt-4">
          <audio controls src={audioUrl} />
        </div>
      )}
    </div>
  )
}

