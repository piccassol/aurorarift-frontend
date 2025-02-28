import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music, Share2, Sparkles, Workflow } from "lucide-react"

export default function MichelAI() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-background.svg')] opacity-20 pointer-events-none" />

      <main className="container mx-auto px-4 py-12 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-mono mb-4">MICHÉLAI</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Multimodal Intelligent Cognitive Hybrid Engine: Advanced Music NFT Creation and Distribution Platform on
              Solana
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/michelai/music" className="group">
              <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50 hover:bg-white/5 transition-all">
                <Music className="w-8 h-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-mono mb-2">Music Generation</h3>
                <p className="text-white/70">
                  Create and generate unique AI-powered music tracks with advanced algorithms and customizable
                  parameters.
                </p>
              </div>
            </Link>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Share2 className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-mono mb-2">Streaming Integration</h3>
              <p className="text-white/70">
                Seamless integration with major platforms including Spotify, Apple Music, and SoundCloud. Support for
                multiple audio formats (MP3/WAV/FLAC).
              </p>
            </div>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Sparkles className="w-8 h-8 mb-4 text-green-400" />
              <h3 className="text-xl font-mono mb-2">Marketing Automation</h3>
              <p className="text-white/70">
                Automated social media integration for NFT drops and promotions. SOL-20 token rewards for community
                engagement and sharing.
              </p>
            </div>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Workflow className="w-8 h-8 mb-4 text-red-400" />
              <h3 className="text-xl font-mono mb-2">Technical Features</h3>
              <p className="text-white/70">
                Gas optimization with EIP-1559, Layer 2 solutions, and transaction batching. Secure key management with
                HSM and AWS KMS integration.
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="border border-white/10 rounded-lg p-8 backdrop-blur-sm bg-black/50">
            <h2 className="text-2xl font-mono mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-mono text-purple-400">NFT Features</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>IPFS metadata storage with CID v1</li>
                  <li>Batch minting capabilities</li>
                  <li>EIP-2981 royalty standard compliance</li>
                  <li>Split payment support for collaborations</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-blue-400">Security</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Hardware Security Module integration</li>
                  <li>Environment variable encryption</li>
                  <li>Smart contract auditing</li>
                  <li>Transaction replay protection</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-green-400">Integration</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Major streaming platform support</li>
                  <li>Social media automation</li>
                  <li>Content scheduling</li>
                  <li>Analytics dashboard</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-red-400">Blockchain</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Solana primary deployment</li>
                  <li>Multi-chain support ready</li>
                  <li>Layer 2 optimization</li>
                  <li>Gas fee management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <p className="text-lg text-white/80">Ready to revolutionize your music distribution?</p>
            <Link href="/michelai/music">
              <Button variant="default" size="lg" className="font-mono">
                Start Creating
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

