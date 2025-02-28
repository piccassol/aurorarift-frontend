import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Video, Share2, Sparkles, Workflow } from "lucide-react"
import { VideoGenerator } from "@/components/VideoGenerator"

export default function HullAI() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-background.svg')] opacity-20 pointer-events-none" />

      <main className="container mx-auto px-4 py-12 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-mono mb-4">HULLAI</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Holographic Universal Learning Layer: Advanced Cinematography NFT Platform for Film and Video Content on
              Solana
            </p>
          </div>

          {/* Video Generator Component */}
          <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
            <h2 className="text-2xl font-mono mb-6">Generate Video</h2>
            <VideoGenerator />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/hullai/video" className="group">
              <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50 hover:bg-white/5 transition-all">
                <Video className="w-8 h-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-mono mb-2">Video NFT Creation</h3>
                <p className="text-white/70">
                  Create and mint video NFTs with automated royalty distribution. Supports multiple formats including
                  MP4/AVI/MOV/WebM.
                </p>
              </div>
            </Link>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Share2 className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-mono mb-2">Platform Integration</h3>
              <p className="text-white/70">
                Seamless integration with major platforms including YouTube, TikTok, and other video services for
                content distribution.
              </p>
            </div>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Sparkles className="w-8 h-8 mb-4 text-green-400" />
              <h3 className="text-xl font-mono mb-2">Marketing & Promotion</h3>
              <p className="text-white/70">
                Automated social media integration for cinematic NFT promotion. Content scheduling and community
                engagement tools.
              </p>
            </div>

            <div className="h-full border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
              <Workflow className="w-8 h-8 mb-4 text-red-400" />
              <h3 className="text-xl font-mono mb-2">Technical Features</h3>
              <p className="text-white/70">
                Advanced video transcoding, CDN integration for fast delivery, and comprehensive NFT management tools.
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="border border-white/10 rounded-lg p-8 backdrop-blur-sm bg-black/50">
            <h2 className="text-2xl font-mono mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-mono text-purple-400">Video Features</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Multi-format support</li>
                  <li>Advanced transcoding</li>
                  <li>CDN integration</li>
                  <li>High-quality streaming</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-blue-400">NFT Features</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>IPFS metadata storage</li>
                  <li>Royalty enforcement</li>
                  <li>Batch minting</li>
                  <li>Split payments</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-green-400">Distribution</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Platform integrations</li>
                  <li>Content scheduling</li>
                  <li>Analytics tracking</li>
                  <li>Audience insights</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-mono text-red-400">Security</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Content protection</li>
                  <li>Access control</li>
                  <li>DRM support</li>
                  <li>Secure delivery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <p className="text-lg text-white/80">Ready to transform your cinematic content?</p>
            <Link href="/hullai/video">
              <Button variant="default" size="lg" className="font-mono">
                Explore Advanced Features
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

