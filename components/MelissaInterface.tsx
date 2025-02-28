"use client"

import type React from "react"
import { useState, useEffect, useRef, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, MicOff, Eye, EyeOff, Send, Paperclip, X } from "lucide-react"
import { Model3DViewer } from "./Model3DViewer"

type Message = {
  content: string
  sender: "user" | "melissa"
  isThinking?: boolean
  file?: File
}

const melissaResponses = [
  "I'm here to assist you with any questions about the AuroraRift ecosystem.",
  "How can I help you navigate the metaverse today?",
  "Is there anything specific you'd like to know about our AI agents?",
  "I'm always learning. What would you like to explore together?",
  "The digital realm is vast. What area are you most interested in?",
  "I'm equipped to help with various tasks. What's on your mind?",
  "Blockchain, AI, or virtual worlds - which topic intrigues you most?",
  "I'm here to make your journey through AuroraRift smoother. What can I clarify for you?",
]

export function MelissaInterface() {
  const [isListening, setIsListening] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    audioRef.current = new Audio("/melissa-wake.mp3")
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatEndRef])

  const handleWake = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
    addMessage("Hello! I'm Melissa, your AI assistant for AuroraRift. How can I help you today?", "melissa")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() || selectedFile) {
      if (input.trim()) {
        addMessage(input, "user")
      }
      if (selectedFile) {
        addMessage(`Uploaded file: ${selectedFile.name}`, "user", selectedFile)
        setSelectedFile(null)
      }
      setInput("")
      // Simulate Melissa thinking
      addMessage("Melissa is thinking...", "melissa", undefined, true)
      setTimeout(() => {
        const response = melissaResponses[Math.floor(Math.random() * melissaResponses.length)]
        setMessages((prev) => {
          const newMessages = prev.filter((msg) => !msg.isThinking)
          return [...newMessages, { content: response, sender: "melissa" }]
        })
      }, 1500)
    }
  }

  const addMessage = (content: string, sender: "user" | "melissa", file?: File, isThinking = false) => {
    setMessages((prev) => [...prev, { content, sender, file, isThinking }])
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleFileUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-mono">Melissa Interface</h2>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsListening(!isListening)}
            className={isListening ? "bg-purple-500/20" : ""}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsVisible(!isVisible)}
            className={isVisible ? "bg-blue-500/20" : ""}
          >
            {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {isVisible && (
        <Model3DViewer modelUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MelissaAIR1_0218045620_texture-jtRxJMcKKMMMOly2ySHHd9q3R98mDI.glb" />
      )}

      <div className="space-y-4 mt-4">
        <div className="bg-white/5 p-4 rounded-lg h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block p-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-purple-500/20 text-white"
                    : message.isThinking
                      ? "bg-gray-500/20 text-white/50 animate-pulse"
                      : "bg-blue-500/20 text-white"
                }`}
              >
                {message.content}
                {message.file && <div className="mt-1 text-xs text-white/70">Attached: {message.file.name}</div>}
              </span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
            <Button type="submit" variant="outline">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button type="button" variant="outline" onClick={handleFileUploadClick} className="flex-grow">
              <Paperclip className="h-4 w-4 mr-2" />
              {selectedFile ? "Change File" : "Attach File"}
            </Button>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            {selectedFile && (
              <div className="flex items-center bg-white/10 rounded px-2 py-1">
                <span className="text-sm text-white/70 truncate max-w-[150px]">{selectedFile.name}</span>
                <Button type="button" variant="ghost" size="sm" onClick={handleRemoveFile} className="ml-2">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </form>

        <Button onClick={handleWake} variant="outline" className="w-full">
          Wake up Melissa
        </Button>
      </div>
    </div>
  )
}

