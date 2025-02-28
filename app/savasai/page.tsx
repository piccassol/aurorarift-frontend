import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Image, Share2, Sparkles, Workflow } from "lucide-react"

export default function SavasAI() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-background.svg')] opacity-20 pointer-events-none" />

      <main className="container mx-auto px-4 py-12 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-mono mb-4">SAVASAI</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Synthetic Audio Visual Agent: Standard NFT Platform for Visual Artists, Photographers, and Digital Content
              Creators
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/savasai/image" className="group">
              <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50 hover:bg-white/5 transition-all">
                <Image className="w-8 h-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-mono mb-2">NFT Creation</h3>
                <p className="text-white/70">
                  Create and mint NFTs with rich metadata. Support for various digital art formats and automated royalty
                  distribution.
                </p>
              </div>
            </Link>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Share2 className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-mono mb-2">Social Integration</h3>
              <p className="text-white/70">
                Seamless integration with popular social media platforms for content promotion and NFT drops.
              </p>
            </div>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Sparkles className="w-8 h-8 mb-4 text-green-400" />
              <h3 className="text-xl font-mono mb-2">Content Delivery</h3>
              <p className="text-white/70">
                CDN integration for fast access to media files. Comprehensive features for seamless NFT management and
                distribution.
              </p>
            </div>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Workflow className="w-8 h-8 mb-4 text-red-400" />
              <h3 className="text-xl font-mono mb-2">Technical Features</h3>
              <p className="text-white/70">
                Multi-chain support, gas optimization, and advanced security features for reliable NFT operations.
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
                  <li>Rich metadata support</li>
                  <li>Multiple format support</li>
                  <li>Batch minting</li>
                  <li>Royalty management</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-blue-400">Platform Features</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Social media integration</li>
                  <li>Marketing automation</li>
                  <li>Content scheduling</li>
                  <li>Analytics dashboard</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-green-400">Technical</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Multi-chain support</li>
                  <li>Gas optimization</li>
                  <li>Layer 2 solutions</li>
                  <li>Smart contract security</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-red-400">Content Delivery</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>CDN integration</li>
                  <li>Fast access</li>
                  <li>High availability</li>
                  <li>Global distribution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <p className="text-lg text-white/80">Ready to create your digital masterpiece?</p>
            <Link href="/savasai/image">
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

