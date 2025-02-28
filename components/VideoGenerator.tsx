"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Loader2, Video } from "lucide-react"
import { toast } from "sonner"

async function generateVideo(prompt: string, duration = 4, resolution = "1920x1080") {
  const response = await fetch("/api/generate_video", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, duration, resolution }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data.video_url
}

export function VideoGenerator() {
  const [prompt, setPrompt] = useState("")
  const [duration, setDuration] = useState(4)
  const [resolution, setResolution] = useState("1920x1080")
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setLoading(true)
    try {
      const url = await generateVideo(prompt, duration, resolution)
      setVideoUrl(url)
      toast.success("Video generated successfully!")
    } catch (error) {
      console.error("Error generating video:", error)
      toast.error(error instanceof Error ? error.message : "Failed to generate video. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="prompt" className="block text-sm font-medium text-white">
            Prompt
          </label>
          <Input
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the video you want to generate..."
            className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50"
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="duration" className="block text-sm font-medium text-white">
            Duration (seconds): {duration}
          </label>
          <Slider
            id="duration"
            min={1}
            max={10}
            step={1}
            value={[duration]}
            onValueChange={(value) => setDuration(value[0])}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="resolution" className="block text-sm font-medium text-white">
            Resolution
          </label>
          <Select value={resolution} onValueChange={setResolution} disabled={loading}>
            <SelectTrigger className="w-full bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Select resolution" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1920x1080">1920x1080 (Full HD)</SelectItem>
              <SelectItem value="1280x720">1280x720 (HD)</SelectItem>
              <SelectItem value="854x480">854x480 (SD)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" disabled={loading} className="w-full font-mono">
          {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Video className="h-4 w-4 mr-2" />}
          {loading ? "Generating..." : "Generate Video"}
        </Button>
      </form>

      {videoUrl ? (
        <div className="relative group">
          <video src={videoUrl} controls className="w-full h-auto rounded-lg border border-white/10" />
        </div>
      ) : (
        <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center text-white/50">
          <Video className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="font-mono">Generated video will appear here</p>
        </div>
      )}
    </div>
  )
}

