import type React from "react"
import { Terminal, Cpu, Bot, Brain, Code, Network, Database, Cloud, Lock } from "lucide-react"

const apps = [
  { name: "Terminal", icon: Terminal, description: "Command Interface" },
  { name: "System", icon: Cpu, description: "Core Functions" },
  { name: "Agents", icon: Bot, description: "AI Management" },
  { name: "Neural", icon: Brain, description: "Processing Unit" },
  { name: "Developer", icon: Code, description: "Build Tools" },
  { name: "Network", icon: Network, description: "Connectivity" },
  { name: "Database", icon: Database, description: "Storage" },
  { name: "Cloud", icon: Cloud, description: "Remote Access" },
  { name: "Security", icon: Lock, description: "Protection" },
]

export const AppGrid: React.FC = () => {
  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-mono text-white text-center mb-12">/applications</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {apps.map((app, index) => (
            <div key={index} className="group flex flex-col items-center space-y-3">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:scale-105">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0" />
                <app.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white/70 transition-all duration-300 group-hover:text-white/90" />
              </div>
              <div className="text-center">
                <div className="text-xs sm:text-sm font-mono text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {app.name}
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-white/40 group-hover:text-white/60 transition-colors duration-300">
                  {app.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

