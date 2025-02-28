import type React from "react"

const MarqueeText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative flex overflow-hidden whitespace-nowrap font-mono text-xs tracking-wider bg-black border-y border-white/10">
      <div className="animate-marquee-slow py-3 flex items-center space-x-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-4 text-white/70">
            <span>{children}</span>
            <span className="text-white/40">⟶</span>
          </div>
        ))}
      </div>
      <div className="absolute top-0 animate-marquee2-slow py-3 flex items-center space-x-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-4 text-white/70">
            <span>{children}</span>
            <span className="text-white/40">⟶</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueeText

