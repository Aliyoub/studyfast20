import { useEffect } from 'react';

interface LayoutProps {
  text: string;
}
const TextToSpeech = ({ text }: LayoutProps) => {
  useEffect(() => {
    // This code will only run in the browser
    const speakButton = document.getElementById('speakButton');

    const handlePlay = () => {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    };

    if (speakButton) {
      speakButton.addEventListener('click', handlePlay);
    }

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      if (speakButton) {
        speakButton.removeEventListener('click', handlePlay);
      }
    };
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <div style={{
      marginRight: 20,
      border: "1px solid #EEE,",
      padding: "10px 25px 10px 25px",
    }}>
      <button id="speakButton">Speak</button>
    </div>
  );
};

export default TextToSpeech;
