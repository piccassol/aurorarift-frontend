"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  radius: number
  baseY: number
  speed: number
  amplitude: number
}

type Ripple = {
  x: number
  y: number
  radius: number
  strength: number
  age: number
}

export const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const isHovering = useRef(false)
  const isDragging = useRef(false)
  const ripples = useRef<Ripple[]>([])
  const lastDragPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const numberOfParticles = Math.floor(canvas.width / 10)

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: (canvas.width * i) / numberOfParticles,
          y: canvas.height / 2,
          radius: 1,
          baseY: canvas.height / 2,
          speed: 0.1 + Math.random() * 0.2,
          amplitude: 30,
        })
      }
    }

    const createRipple = (x: number, y: number, strength = 1) => {
      ripples.current.push({
        x,
        y,
        radius: 0,
        strength: strength * 50, // Adjust ripple intensity
        age: 0,
      })
    }

    const updateRipples = () => {
      ripples.current = ripples.current.filter((ripple) => {
        ripple.radius += 5
        ripple.age += 1
        ripple.strength *= 0.95 // Decay ripple strength
        return ripple.age < 50 // Remove old ripples
      })
    }

    const drawParticle = (particle: Particle) => {
      if (!ctx) return

      const time = Date.now() * particle.speed * 0.001
      particle.y = particle.baseY + Math.sin(time) * particle.amplitude

      // Apply ripple effects
      ripples.current.forEach((ripple) => {
        const dx = particle.x - ripple.x
        const dy = particle.y - ripple.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = ripple.radius + 50

        if (distance < maxDistance) {
          const rippleEffect =
            (1 - distance / maxDistance) * ripple.strength * Math.sin((distance - ripple.radius) * 0.1)
          particle.y += rippleEffect
        }
      })

      if (isHovering.current) {
        const dx = mousePos.current.x - particle.x
        const dy = mousePos.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 30
          particle.y += force * Math.sin(time * 2)
        }
      }

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
      ctx.fill()
    }

    const connectParticles = () => {
      if (!ctx) return

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 50) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 50)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (isDragging.current) {
        const dx = mousePos.current.x - lastDragPos.current.x
        const dy = mousePos.current.y - lastDragPos.current.y
        const dragDistance = Math.sqrt(dx * dx + dy * dy)
        if (dragDistance > 10) {
          // Only create ripples when dragging some distance
          createRipple(mousePos.current.x, mousePos.current.y, dragDistance * 0.1)
          lastDragPos.current = { ...mousePos.current }
        }
      }

      updateRipples()
      particles.forEach(drawParticle)
      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePos.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    }

    const handleMouseDown = (event: MouseEvent) => {
      isDragging.current = true
      lastDragPos.current = {
        x: event.clientX - canvas.getBoundingClientRect().left,
        y: event.clientY - canvas.getBoundingClientRect().top,
      }
    }

    const handleMouseUp = () => {
      isDragging.current = false
    }

    const handleMouseEnter = () => {
      isHovering.current = true
    }

    const handleMouseLeave = () => {
      isHovering.current = false
      isDragging.current = false
    }

    window.addEventListener("resize", resize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    canvas.addEventListener("mouseenter", handleMouseEnter)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      canvas.removeEventListener("mouseenter", handleMouseEnter)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto cursor-grab active:cursor-grabbing"
      style={{ background: "linear-gradient(to bottom, rgba(88, 28, 135, 0.1), black, rgba(30, 58, 138, 0.1))" }}
    />
  )
}

