import OpenAI from "openai"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      n: 1,
      size: "1024x1024",
    })

    if (!response.data || response.data.length === 0) {
      throw new Error("No image generated")
    }

    const imageUrl = response.data[0].url

    if (!imageUrl) {
      throw new Error("No image URL in the response")
    }

    return NextResponse.json({ imageUrl })
  } catch (error) {
    console.error("DALL-E API error:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json({ error: `Failed to generate image: ${errorMessage}` }, { status: 500 })
  }
}

