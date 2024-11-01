import React from "react";
import { useEffect, useState } from "react";
import { texts } from "@/Texts";
import { argum } from "@/argum";

function Tts() {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(
    voices.find((voice) => voice.name === "Google US English")
  );
  const [volume, setVolume] = useState(0.2);
  const [rate, setRate] = useState(0.7);
  const [pitch, setPitch] = useState(1);

  // const handleSelectChange = (event) => {
  //   setSelectedVoice(event.target.value);
  // };

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleVoiceChange = (e) => {
    if(e.target){
      const voiceIndex = e.target.value;
      setSelectedVoice(voices[voiceIndex]);

      console.log('selectedVoice', selectedVoice)
    }
  };

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(argum);

    // Set the voice if it's selected and valid
    if (selectedVoice) {
      // setSelectedVoice(utterance.voice)
      // utterance.voice = selectedVoice;
      utterance.voice = selectedVoice;

      // Set the volume
      utterance.volume = volume;
      utterance.rate = rate; // Vitesse
      utterance.pitch = pitch;
    }

    // Speak the text
    window.speechSynthesis.speak(utterance);
  };

  const pause = () => {
    window.speechSynthesis.pause();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <select onChange={handleVoiceChange}>
        <option value="">Select a voice</option>
        {voices.map((voice, index) => (
          <option key={index} value={index}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
      <div style={{ marginTop: 55 }}>Ajuster le volume</div>
      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
      />

      <div style={{ marginTop: 5 }}>Pitch</div>
      <input
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={pitch}
        onChange={(e) => setPitch(parseFloat(e.target.value))}
      />

      <div style={{ marginTop: 5 }}>Ajuster la vitesse</div>
      <input
        type="range"
        min="0.01"
        max="1"
        step="0.1"
        value={rate}
        onChange={(e) => setRate(parseFloat(e.target.value))}
      />

      <button
        style={{
          marginTop: 55,
          backgroundColor: "#005CC8",
          color: "#E5E5E5",
          paddingLeft: 50,
          paddingRight: 50,
        }}
        onClick={speak}
      >
        Ecouter
      </button>
      <button
        style={{
          marginTop: 20,
          backgroundColor: "#005CC8",
          color: "#E5E5E5",
          paddingLeft: 50,
          paddingRight: 65,
        }}
        onClick={pause}
      >
        Pause
      </button>
    </div>
  );
}

export default Tts;
