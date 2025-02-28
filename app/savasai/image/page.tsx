import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageGenerator } from "@/components/ImageGenerator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function ImageGenerationPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-background.svg')] opacity-20 pointer-events-none" />

      <main className="flex-1 container mx-auto p-6 relative">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-mono mb-4">Image Generation</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Create unique images using SAVASAI technology.</p>
          </div>

          {/* Image Generator Component */}
          <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm">
            <ImageGenerator />
          </div>

          {/* Error Message */}
          <Alert variant="destructive" className="bg-red-900/50 border-red-500/50 text-white hidden">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              An error occurred while generating the image. Please try again or contact support if the problem persists.
            </AlertDescription>
          </Alert>

          {/* Tips Section */}
          <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-mono mb-4">Prompt Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Be specific about art style (e.g., "digital art", "oil painting", "photography")</li>
              <li>Include details about lighting and atmosphere</li>
              <li>Specify perspective and composition</li>
              <li>Mention color schemes or themes</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Navigation */}
      <div className="flex justify-center gap-4 py-8">
        <Link href="/savasai">
          <Button variant="default" className="font-mono">
            Back to SAVASAI
          </Button>
        </Link>
        <Link href="/">
          <Button variant="default" className="font-mono">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

