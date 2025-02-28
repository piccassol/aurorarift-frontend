import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mic, Brain, Sparkles, Eye, Code, Github } from "lucide-react"

export default function MelissaAIR1() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-background.svg')] opacity-20 pointer-events-none" />

      <main className="container mx-auto px-4 py-12 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-mono mb-4">Melissa AIR1</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your personal AGI Assistant: Always listening, always responding, and Augmented for the aurora.rift
              ecosystem
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Mic className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-xl font-mono mb-2">Voice-Controlled Interface</h3>
              <p className="text-white/70">
                Activate Melissa with the wake word "Melissa, Wake up" and enjoy continuous nonstop audio conversation.
              </p>
            </div>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Brain className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-mono mb-2">Advanced AI Capabilities</h3>
              <p className="text-white/70">
                Neurosymbolic deep learning with casual interfacing to adapt to user personality, even on micro levels.
              </p>
            </div>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Eye className="w-8 h-8 mb-4 text-green-400" />
              <h3 className="text-xl font-mono mb-2">Augmented/Virtual Avatar</h3>
              <p className="text-white/70">
                Toggleable augmented/virtual avatar for a more immersive interaction experience in the metaverse.
              </p>
            </div>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Code className="w-8 h-8 mb-4 text-red-400" />
              <h3 className="text-xl font-mono mb-2">Backend Capabilities</h3>
              <p className="text-white/70">
                Node.js and UI API capabilities for automated task delivery throughout the web and metaverse.
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="border border-white/10 rounded-lg p-8 backdrop-blur-sm bg-black/50">
            <h2 className="text-2xl font-mono mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-mono text-purple-400">AI Model</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Neurosymbolic architecture</li>
                  <li>Causal learning capabilities</li>
                  <li>Multi-modal processing</li>
                  <li>Reinforced problem-solving</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-blue-400">Memory</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Long-term memory capacity</li>
                  <li>Multi-conversational memory</li>
                  <li>Context-aware recall</li>
                  <li>Adaptive learning patterns</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-green-400">Interface</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Voice-controlled activation</li>
                  <li>Continuous audio conversation</li>
                  <li>Augmented/Virtual avatar</li>
                  <li>Natural language processing</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-red-400">Integration</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>aurora.rift ecosystem management</li>
                  <li>Web3 navigation assistance</li>
                  <li>Metaverse interaction support</li>
                  <li>Blockchain-aware operations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Beta Testing Info */}
          <div className="text-center space-y-4 p-6 border border-white/10 rounded-lg backdrop-blur-sm bg-black/50">
            <h2 className="text-2xl font-mono">Beta Testing</h2>
            <p className="text-lg text-white/80">
              Melissa AIR1 is currently in beta testing and is scheduled for open-source release soon.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="https://github.com/piccassol/aurora.rift/blob/main/Melissa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="font-mono">
                  <Github className="w-4 h-4 mr-2" />
                  Learn More on GitHub
                </Button>
              </Link>
              <Link href="/chat">
                <Button variant="outline" size="lg" className="font-mono">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Try Melissa Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <p className="text-lg text-white/80">Ready to experience the future of AI assistance?</p>
            <Link href="/chat">
              <Button variant="outline" size="lg" className="font-mono">
                Start Chatting with Melissa
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

