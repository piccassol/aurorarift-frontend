import dynamic from 'next/dynamic';
const VoiceControl = dynamic(() => import('../components/VoiceControl'), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Melissa Interface</h1>
      <VoiceControl />
    </div>
  );
}