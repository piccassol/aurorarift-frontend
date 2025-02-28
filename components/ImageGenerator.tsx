"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Download, ImageIcon } from "lucide-react"
import { toast } from "sonner"

export function ImageGenerator() {
  const [prompt, setPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/image", {
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

      if (!data.imageUrl) {
        throw new Error("No image URL in the response")
      }

      setImageUrl(data.imageUrl)
      toast.success("Image generated successfully!")
    } catch (error) {
      console.error("Error generating image:", error)
      const message = error instanceof Error ? error.message : "Failed to generate image"
      toast.error(`Error: ${message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!imageUrl) return

    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `savasai-image-${Date.now()}.png`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      toast.error("Failed to download image")
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/50"
            disabled={loading}
          />
          <Button type="submit" disabled={loading} className="font-mono">
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <ImageIcon className="h-4 w-4 mr-2" />
                Generate
              </>
            )}
          </Button>
        </div>
      </form>

      {imageUrl ? (
        <div className="relative group">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={prompt}
            className="w-full h-auto rounded-lg border border-white/10"
          />
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center text-white/50">
          <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="font-mono">Generated image will appear here</p>
        </div>
      )}
    </div>
  )
}

