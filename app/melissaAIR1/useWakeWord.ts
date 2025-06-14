import { useEffect } from 'react';

export function useWakeWord(callback: () => void) {
  useEffect(() => {
    let listening = false;

    async function startListening() {
      // Guard for client-side
      if (typeof window === 'undefined') return;

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Plug stream into wake word engine (e.g., Porcupine WebAssembly)
        // Trigger `callback()` when wake word is detected
      } catch (err) {
        console.error('Microphone access error:', err);
      }
    }

    startListening();
    return () => {
      // Cleanup
    };
  }, [callback]);
}