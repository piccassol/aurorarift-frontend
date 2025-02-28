import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoGenerator } from "@/components/VideoGenerator"

export default function VideoGenerationPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-background.svg')] opacity-20 pointer-events-none" />

      <main className="flex-1 container mx-auto p-6 relative">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-mono mb-4">Video Generation</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Create AI-powered videos using pretrained models and advanced techniques.
            </p>
          </div>

          {/* Video Generator Component */}
          <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm">
            <VideoGenerator />
          </div>

          {/* Tips Section */}
          <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-mono mb-4">Generation Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Choose appropriate model settings for your desired output</li>
              <li>Consider video length and complexity</li>
              <li>Specify clear motion and transition requirements</li>
              <li>Be mindful of computational resources required</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Navigation */}
      <div className="flex justify-center gap-4 py-8">
        <Link href="/hullai">
          <Button variant="outline" className="font-mono">
            Back to HULLAI
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline" className="font-mono">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

