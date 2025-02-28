"use client"

import { useRef, useEffect } from "react"

interface AudioVisualizerProps {
  audioUrl: string
}

export function AudioVisualizer({ audioUrl }: AudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !audioRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const audio = audioRef.current

    if (!ctx) return

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const analyser = audioContext.createAnalyser()
    const source = audioContext.createMediaElementSource(audio)
    source.connect(analyser)
    analyser.connect(audioContext.destination)

    analyser.fftSize = 256
    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const draw = () => {
      requestAnimationFrame(draw)

      analyser.getByteFrequencyData(dataArray)

      ctx.fillStyle = "rgb(0, 0, 0)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const barWidth = (canvas.width / bufferLength) * 2.5
      let barHeight
      let x = 0

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2

        ctx.fillStyle = `rgb(${barHeight + 100},50,50)`
        ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight)

        x += barWidth + 1
      }
    }

    draw()

    return () => {
      source.disconnect()
      analyser.disconnect()
    }
  }, [])

  return (
    <div className="w-full h-64 bg-black/50 rounded-lg overflow-hidden">
      <canvas ref={canvasRef} width="800" height="256" className="w-full h-full" />
      <audio ref={audioRef} src={audioUrl} controls className="w-full mt-4" />
    </div>
  )
}

