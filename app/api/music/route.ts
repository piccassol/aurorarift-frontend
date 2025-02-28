import { NextResponse } from "next/server"
import OpenAI from "openai"
import { spawn } from "child_process"
import path from "path"

export const runtime = "nodejs"
export const maxDuration = 60 // Adjusted to 60 seconds for hobby plan compliance

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { prompt, negativePrompt, settings } = await req.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    // First, get music description from GPT-4
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a music composition expert. Convert the user's prompt into detailed musical instructions.",
        },
        {
          role: "user",
          content: `Create music matching this description: ${prompt}
Avoid: ${negativePrompt}
Genre: ${settings.genre}
Tempo: ${settings.tempo} BPM
Duration: ${settings.duration}s
Complexity: ${settings.complexity}%`,
        },
      ],
    })

    const musicDescription = completion.choices[0].message.content

    // Execute the Python script for music generation
    const scriptPath = path.join(process.cwd(), "michelai_agent", "generate.py")

    return new Promise((resolve) => {
      const pythonProcess = spawn("python", [
        scriptPath,
        "--prompt",
        musicDescription || prompt,
        "--tempo",
        settings.tempo.toString(),
        "--duration",
        settings.duration.toString(),
        "--complexity",
        (settings.complexity / 100).toString(),
      ])

      let outputData = ""
      let errorData = ""

      pythonProcess.stdout.on("data", (data) => {
        outputData += data.toString()
      })

      pythonProcess.stderr.on("data", (data) => {
        errorData += data.toString()
      })

      pythonProcess.on("close", (code) => {
        if (code !== 0) {
          resolve(NextResponse.json({ error: `Music generation failed: ${errorData}` }, { status: 500 }))
          return
        }

        try {
          const result = JSON.parse(outputData)
          resolve(
            NextResponse.json({
              audioUrl: result.audio_url,
              metadata: {
                duration: settings.duration,
                tempo: settings.tempo,
                genre: settings.genre,
              },
            }),
          )
        } catch (error) {
          resolve(NextResponse.json({ error: "Failed to parse music generation output" }, { status: 500 }))
        }
      })
    })
  } catch (error) {
    console.error("Music generation error:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json({ error: `Failed to generate music: ${errorMessage}` }, { status: 500 })
  }
}

