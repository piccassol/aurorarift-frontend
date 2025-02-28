import OpenAI from "openai"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { NextResponse } from "next/server"

// Set runtime to nodejs (not edge) for AI SDK [^1]
export const runtime = "nodejs"
export const maxDuration = 30 // Allow streaming responses up to 30 seconds [^3]

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key is not configured" }, { status: 500 })
    }

    const { messages } = await req.json()

    // Validate messages array
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 })
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      stream: true,
      messages: messages.map((message: any) => ({
        content: message.content,
        role: message.role,
      })),
      temperature: 0.7,
      max_tokens: 1000,
    })

    // Create a stream using the AI SDK
    const stream = OpenAIStream(response)

    // Return a StreamingTextResponse, which is compatible with AI SDK
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error("OpenAI API error:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json({ error: `Failed to get response from OpenAI: ${errorMessage}` }, { status: 500 })
  }
}

