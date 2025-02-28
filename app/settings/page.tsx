import { ApiKeyTester } from "@/components/ApiKeyTester"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('/grid-background.svg')] opacity-20 pointer-events-none" />

      <main className="container mx-auto px-4 py-12 relative">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-mono mb-4">Settings</h1>

          <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-black/50">
            <h2 className="text-2xl font-mono mb-4">API Configuration</h2>
            <div className="max-w-md">
              <ApiKeyTester />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

