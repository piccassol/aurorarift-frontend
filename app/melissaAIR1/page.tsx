import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mic, Headphones, Brain, Eye, Code, Cog, Clock, MessageSquare } from "lucide-react"
import { MelissaInterface } from "@/components/MelissaInterface"
import { ApiKeyTester } from "@/components/ApiKeyTester"

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
              Your personal AGI Assistant: Always listening, always responding, and Augmented.
            </p>
          </div>

          {/* API Key Tester */}
          <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
            <h2 className="text-2xl font-mono mb-4">API Key Tester</h2>
            <ApiKeyTester />
          </div>

          {/* Melissa Interface */}
          <MelissaInterface />

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Mic className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-lg font-mono mb-2">Voice Control</h3>
              <p className="text-white/70">Wake-word activated interface. Just say "Wake up Melissa" to start.</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Headphones className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-lg font-mono mb-2">Continuous Audio</h3>
              <p className="text-white/70">Engage in nonstop audio conversations, togglable for your convenience.</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Brain className="w-8 h-8 mb-4 text-green-400" />
              <h3 className="text-lg font-mono mb-2">Neurosymbolic Learning</h3>
              <p className="text-white/70">Adapts to your personality through reinforced, deep learning.</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Eye className="w-8 h-8 mb-4 text-red-400" />
              <h3 className="text-lg font-mono mb-2">Augmented Avatar</h3>
              <p className="text-white/70">Virtual/Augmented avatar with togglable visibility.</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Code className="w-8 h-8 mb-4 text-yellow-400" />
              <h3 className="text-lg font-mono mb-2">Backend Capabilities</h3>
              <p className="text-white/70">Node.js and UI API integration for automated task delivery.</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Cog className="w-8 h-8 mb-4 text-indigo-400" />
              <h3 className="text-lg font-mono mb-2">Problem Solving</h3>
              <p className="text-white/70">Advanced reinforced problem-solving and troubleshooting assistance.</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Clock className="w-8 h-8 mb-4 text-pink-400" />
              <h3 className="text-lg font-mono mb-2">Long-term Memory</h3>
              <p className="text-white/70">Extensive memory capacity for prolonged interactions.</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <MessageSquare className="w-8 h-8 mb-4 text-orange-400" />
              <h3 className="text-lg font-mono mb-2">Multi-modal Processing</h3>
              <p className="text-white/70">Complex, causal multi-modal processing with advanced Voice UX.</p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="border border-white/10 rounded-lg p-8 backdrop-blur-sm bg-black/50">
            <h2 className="text-2xl font-mono mb-6">About Melissa AIR1</h2>
            <p className="text-white/80 mb-4">
              Melissa is your personal assistant for managing the aurora.rift ecosystem, a Multi-modal AI creation
              system with blockchain integration and social distribution. She's here to help you navigate the overall
              web3 & the metaverse at large.
            </p>
            <p className="text-white/80 mb-4">
              Think of Melissa as your "Siri" in the aurora.rift virtual & augmented environment, as well as in web3 and
              the metaverse in general.
            </p>
            <p className="text-white/80">
              Melissa is currently in beta testing and is scheduled to be released to the public via open source very
              soon.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <p className="text-lg text-white/80">Ready to experience the future of AI assistance?</p>
            <Link href="https://github.com/piccassol/aurora.rift/blob/main/Melissa/">
              <Button variant="default" size="lg" className="font-mono">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

