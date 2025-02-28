"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MarqueeText from "./MarqueeText"
import GlowingText from "./GlowingText"
import { Chat } from "./chat"
import { WaveBackground } from "./WaveBackground"
import { HandshakeSection } from "./HandshakeSection"
import { AppGrid } from "./AppGrid"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function AuroraRift() {
  const [mounted, setMounted] = useState(false)
  const [showAgents, setShowAgents] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Animated Background */}
      <WaveBackground />

      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-background.svg')] opacity-20 pointer-events-none" />

      {/* Chat Component */}
      <Chat />

      {/* Top Marquee */}
      <MarqueeText>MOONTURTLE IO (THE OPERATING SYSTEM FOR CREATIVE AGENTS ⇥)</MarqueeText>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative">
        <div
          className={`space-y-8 text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Title with Enhanced Glitch Effect */}
          <h1 className="text-4xl md:text-6xl font-mono tracking-wider relative group">
            <span className="relative inline-block">
              <span className="absolute inset-0 text-red-500 animate-none group-hover:animate-glitch-1">
                AURORARIFT
              </span>
              <span className="absolute inset-0 text-blue-500 animate-none group-hover:animate-glitch-2">
                AURORARIFT
              </span>
              <span className="absolute inset-0 text-green-500 animate-none group-hover:animate-glitch-3">
                AURORARIFT
              </span>
              <span className="relative">AURORARIFT</span>
            </span>
          </h1>

          {/* Animated Tagline */}
          <p className="text-sm md:text-base font-mono tracking-wide max-w-md mx-auto text-white/80">
            <GlowingText delay={100}>TOKENIZE</GlowingText> <GlowingText delay={200}>YOUR</GlowingText>{" "}
            <GlowingText delay={300}>REALITY</GlowingText>
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col items-center space-y-4">
            <Button
              variant="default"
              className="w-48 font-mono text-sm tracking-wider border-white/20 bg-black/50 backdrop-blur-sm
                hover:bg-white/10 hover:border-white/40 transform transition-all duration-300
                flex items-center justify-center py-4"
              onClick={() => setShowAgents(!showAgents)}
            >
              <span className="text-white mr-2">/agents</span>
              {showAgents ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>

            {showAgents && (
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                {[
                  { href: "/savasai", label: "SAVASAI", desc: "Synthetic Visual Agent" },
                  { href: "/hullai", label: "HULLAI", desc: "Holographic Universal Learning Visual Layer Agent" },
                  {
                    href: "/michelai",
                    label: "MICHÉLAI",
                    desc: "Multimodal Intelligent Cognitive Hybrid Audio Engine",
                  },
                  { href: "/melissaAIR1", label: "MELISSA AIR1", desc: "Personal AGI Assistant" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} passHref>
                    <Button
                      variant="default"
                      className="w-48 font-mono text-sm tracking-wider border-white/20 bg-black/50 backdrop-blur-sm
                        hover:bg-white/10 hover:border-white/40 hover:scale-105 transform transition-all duration-300
                        flex flex-col items-center py-4"
                    >
                      <span className="text-white">{item.label}</span>
                      <span className="text-xs text-white/60 mt-1">{item.desc}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* App Grid Section */}
      <AppGrid />

      {/* Spacer */}
      <div className="h-12" />

      {/* Handshake Section */}
      <HandshakeSection />

      {/* Bottom Marquee */}
      <MarqueeText>RIFT ⇥ INTERFACE ⇥ SWIM</MarqueeText>
    </div>
  )
}

