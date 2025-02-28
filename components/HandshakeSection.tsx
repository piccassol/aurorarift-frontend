import type React from "react"
import Image from "next/image"

const logos = [
  {
    name: "Apple Music",
    logo: "https://variety.com/wp-content/uploads/2018/04/apple-music.jpg?w=1000&h=562&crop=1-logo-white.png",
    fallback: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "YouTube",
    logo: "https://1000logos.net/wp-content/uploads/2017/02/YouTube-Logosu.png",
    fallback: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Meta",
    logo: "https://www.victoryxr.com/wp-content/uploads/2023/04/Meta-Logo-1024x576.png.webp",
    fallback: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Sola AI",
    logo: "https://pbs.twimg.com/profile_images/1870351049326051328/nvFz3UoC_400x400.jpg",
    fallback: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "SwarmNodes",
    logo: "https://pbs.twimg.com/profile_images/1868230497366605824/l14HtTzm_400x400.jpg",
    fallback: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "PicoVoice",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaOAQcf47Kr5cQKHIUu10MTbB2sNJbkhWJw&s",
    fallback: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Spotify",
    logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png",
    fallback: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Neuralink",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lgYcsSJsif5H9tho51_aY1QhOqbBvEOnig&s",
    fallback: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Exchange Art",
    logo: "https://pbs.twimg.com/media/GLTLktIWkAALhcE.jpg:large",
    fallback: "/placeholder.svg?height=64&width=64",
  },
]

export const HandshakeSection: React.FC = () => {
  return (
    <div className="w-full bg-black/80 backdrop-blur-sm border-t border-b border-white/10 py-12 overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-mono text-white">/handshake</h2>
      </div>
      <div className="flex">
        <div className="flex animate-scroll">
          {logos.concat(logos).map((item, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-24 mx-8 flex flex-col items-center justify-center">
              <div className="w-full h-16 flex items-center justify-center mb-2">
                <Image
                  src={item.logo || "/placeholder.svg"}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = item.fallback
                  }}
                />
              </div>
              <span className="text-white/70 font-mono text-xs">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

