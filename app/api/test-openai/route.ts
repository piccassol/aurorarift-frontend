import { NextResponse } from "next/server"
import OpenAI from "openai"

export const runtime = "nodejs"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function GET() {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OpenAI API key is not configured")
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello, this is a test message." }],
    })

    if (!response) {
      throw new Error("No response received from OpenAI")
    }

    return NextResponse.json({
      success: true,
      message: "API key is valid and connection successful! OpenAI integration is ready to use.",
    })
  } catch (error) {
    console.error("OpenAI API error:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json(
      {
        success: false,
        error: `Failed to connect to OpenAI: ${errorMessage}. Please check your API key configuration.`,
      },
      { status: 500 },
    )
  }
}

