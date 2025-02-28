"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send, Loader2, Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { toast } from "sonner"

const MELISSA_SYSTEM_MESSAGE = {
  content:
    "You are Melissa, an AI assistant for AuroraRift. Your goal is to help users with any questions they have about the game.",
}

export function Chat() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "Hi! I'm Melissa, your AI assistant for AuroraRift. How can I help you today?",
      },
    ],
    initialSystemMessage: MELISSA_SYSTEM_MESSAGE.content,
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  // Show error toast if API call fails
  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to send message")
    }
  }, [error])

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      toast.success("Copied to clipboard")
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      toast.error("Failed to copy text")
    }
  }

  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "")
      const codeString = String(children).replace(/\n$/, "")

      if (!inline && match) {
        return (
          <div className="relative group">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(codeString, messages.length)}
            >
              {copiedIndex === messages.length ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" {...props}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        )
      }

      return (
        <code className={cn("bg-white/10 rounded px-1", className)} {...props}>
          {children}
        </code>
      )
    },
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleSubmit(e)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-10 w-16 h-16 rounded-full overflow-hidden hover:opacity-90 transition-opacity"
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject-hehvCINToZFn577AcxUlIzOEozsHU9.png"
          alt="Chat with Melissa"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
      </button>

      <div
        className={cn(
          "fixed inset-y-0 right-0 w-full sm:w-[400px] bg-black/95 border-l border-white/10 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject-hehvCINToZFn577AcxUlIzOEozsHU9.png"
                alt="Melissa"
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
            </div>
            <h2 className="text-white font-mono text-lg">Chat with Melissa</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100vh-8rem)]">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={cn("flex flex-col space-y-2 text-sm", message.role === "user" ? "items-end" : "items-start")}
            >
              <div
                className={cn(
                  "px-4 py-2 rounded-lg max-w-[90%]",
                  message.role === "user" ? "bg-purple-500/20 text-white" : "bg-white/10 text-white/90",
                )}
              >
                <ReactMarkdown
                  components={components}
                  className="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10"
                >
                  {message.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2 text-white/50">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Melissa is typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleFormSubmit} className="border-t border-white/10 p-4 flex items-center space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Send a message..."
            className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/50"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </div>
    </>
  )
}

