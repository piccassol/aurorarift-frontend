import type React from "react"

interface GlowingTextProps {
  children: React.ReactNode
  delay?: number
}

const GlowingText: React.FC<GlowingTextProps> = ({ children, delay = 0 }) => {
  return <span className={`animate-glow transition-opacity duration-1000 delay-${delay} opacity-0`}>{children}</span>
}

export default GlowingText

