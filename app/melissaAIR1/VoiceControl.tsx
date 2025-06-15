import { useEffect, useState } from 'react';
import { useWakeWord } from '../hooks/useWakeWord';

export default function VoiceControl() {
  const [listening, setListening] = useState(false);

  useWakeWord(() => {
    console.log('🔥 Wake word detected!');
    setListening(true);
    startSpeechRecognition();
  });

  function startSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      console.log('🎤 User said:', transcript);
      // Send to backend via fetch or socket
    };

    recognition.onerror = (event: any) => {
      console.error('Recognition error:', event.error);
    };

    recognition.start();
  }

  return (
    <div>
      <p>{listening ? 'Listening...' : 'Waiting for wake word...'}</p>
    </div>
  );
}