/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        buttonBg: "#1a1a1a",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "marquee-slow": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee2-slow": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        glow: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "glitch-1": {
          "0%, 100%": {
            transform: "translate(0)",
            opacity: "0.8",
          },
          "20%": {
            transform: "translate(-4px, 4px)",
            opacity: "0.5",
          },
          "40%": {
            transform: "translate(-4px, -4px)",
            opacity: "0.7",
          },
          "60%": {
            transform: "translate(4px, 4px)",
            opacity: "0.6",
          },
          "80%": {
            transform: "translate(4px, -4px)",
            opacity: "0.4",
          },
        },
        "glitch-2": {
          "0%, 100%": {
            transform: "translate(0)",
            opacity: "0.8",
          },
          "20%": {
            transform: "translate(4px, -4px)",
            opacity: "0.5",
          },
          "40%": {
            transform: "translate(4px, 4px)",
            opacity: "0.7",
          },
          "60%": {
            transform: "translate(-4px, -4px)",
            opacity: "0.6",
          },
          "80%": {
            transform: "translate(-4px, 4px)",
            opacity: "0.4",
          },
        },
        "glitch-3": {
          "0%, 100%": {
            transform: "translate(0)",
            opacity: "0.8",
          },
          "20%": {
            transform: "translate(2px, 2px)",
            opacity: "0.5",
          },
          "40%": {
            transform: "translate(-2px, 2px)",
            opacity: "0.7",
          },
          "60%": {
            transform: "translate(2px, -2px)",
            opacity: "0.6",
          },
          "80%": {
            transform: "translate(-2px, -2px)",
            opacity: "0.4",
          },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glitchText: {
          "0%": {
            textShadow:
              "0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), -0.025em 0.05em 0 rgba(0,0,255,0.75)",
          },
          "14%": {
            textShadow:
              "0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), -0.025em 0.05em 0 rgba(0,0,255,0.75)",
          },
          "15%": {
            textShadow:
              "-0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75)",
          },
          "49%": {
            textShadow:
              "-0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75)",
          },
          "50%": {
            textShadow:
              "0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75)",
          },
          "99%": {
            textShadow:
              "0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75)",
          },
          "100%": {
            textShadow:
              "-0.025em 0 0 rgba(255,0,0,0.75), -0.025em -0.025em 0 rgba(0,255,0,0.75), -0.025em -0.05em 0 rgba(0,0,255,0.75)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "marquee-slow": "marquee-slow 40s linear infinite",
        "marquee2-slow": "marquee2-slow 40s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "glitch-1": "glitch-1 0.5s infinite",
        "glitch-2": "glitch-2 0.5s infinite",
        "glitch-3": "glitch-3 0.5s infinite",
        scroll: "scroll 40s linear infinite",
        glitchButton: "glitchText 0.3s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

