import { MusicGenerator } from "@/components/MusicGenerator"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AudioVisualizer } from "@/components/AudioVisualizer"

export default function MusicGenerationPage() {
  const [history, setHistory] = useState<{ prompt: string; audioUrl: string }[]>([])

  const addToHistory = (prompt: string, audioUrl: string) => {
    setHistory((prev) => [...prev, { prompt, audioUrl }])
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-background.svg')] opacity-20 pointer-events-none" />

      {/* Top Navigation */}
      <nav className="sticky top-0 z-10 backdrop-blur-sm border-b border-white/10 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-4">
              <Link href="/michelai">
                <Button variant="default" className="font-mono text-sm">
                  ← Back
                </Button>
              </Link>
              <h1 className="text-lg font-mono">MICHÉLAI / Music Generation</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/michelai/history">
                <Button variant="default" size="sm" className="font-mono text-xs">
                  HISTORY
                </Button>
              </Link>
              <Link href="/michelai/presets">
                <Button variant="default" size="sm" className="font-mono text-xs">
                  PRESETS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Controls Section */}
          <div className="w-full lg:w-[400px] space-y-6">
            <MusicGenerator onGenerate={addToHistory} />
          </div>

          {/* Preview Section */}
          <div className="flex-1 min-h-[600px] rounded-lg border border-white/10 bg-zinc-900/50 backdrop-blur-sm p-6">
            {history.length > 0 ? (
              <ScrollArea className="h-full">
                <h2 className="text-xl font-mono mb-4">Generated Tracks</h2>
                {history.map((item, index) => (
                  <div key={index} className="mb-4 p-4 bg-white/5 rounded-lg">
                    <p className="text-sm text-white/70 mb-2">{item.prompt}</p>
                    <AudioVisualizer audioUrl={item.audioUrl} />
                  </div>
                ))}
              </ScrollArea>
            ) : (
              <div className="h-full flex items-center justify-center text-white/50 font-mono text-sm">
                Generated audio will appear here
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

