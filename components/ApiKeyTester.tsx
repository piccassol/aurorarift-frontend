"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle, XCircle } from "lucide-react"
import { toast } from "sonner"

export function ApiKeyTester() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  const testApiKey = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/test-openai")
      const data = await response.json()
      setResult(data)

      if (data.success) {
        toast.success("API key is valid and working!")
      } else {
        toast.error(data.error || "Failed to validate API key")
      }
    } catch (error) {
      setResult({ success: false, error: "An error occurred while testing the API key." })
      toast.error("Failed to test API key connection")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Button onClick={testApiKey} disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Testing Connection...
          </>
        ) : (
          "Test OpenAI API Connection"
        )}
      </Button>

      {result && (
        <div
          className={`p-4 rounded-md flex items-center space-x-2 ${
            result.success ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"
          }`}
        >
          {result.success ? (
            <CheckCircle className="h-5 w-5 text-green-400" />
          ) : (
            <XCircle className="h-5 w-5 text-red-400" />
          )}
          <span>{result.success ? result.message : result.error}</span>
        </div>
      )}
    </div>
  )
}

