"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Toaster } from "sonner"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [htmlStyles, setHtmlStyles] = useState({})

  useEffect(() => {
    setHtmlStyles({ filter: "invert(0)" })
  }, [])

  return (
    <html lang="en" style={htmlStyles}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
