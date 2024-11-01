

"use client";

import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { texts } from "@/Texts";
import { argum } from "@/argum";
import Select from "react-select";
import styles from "./selectStyle.module.css";

export default function Home() {
  const [tempVoices, setTempVoices] = useState([]);
  const [voices, setVoices] = useState([{voiceURI: 'Thomas', name: 'Thomas', lang: 'fr-FR', localService: true, default: true}]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [volume, setVolume] = useState(0.2);
  const [rate, setRate] = useState(0.7);
  const [pitch, setPitch] = useState(1);


  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleVoiceChange = (e) => {
    const voiceIndex = e.target.value;
    console.log(' e.target.value',  e.target.value)
    setSelectedVoice(voices[voiceIndex]);
    console.log('voices[0]', voices[0])
    console.log('SSSSelectedVoice', selectedVoice)
  };

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(argum);

    // Set the voice if it's selected and valid
    if (selectedVoice) {
      console.log("firstsss", selectedVoice);
      utterance.voice = selectedVoice;
    }
    // Set the volume
    // utterance.volume = volume;
    // utterance.rate = rate; // Vitesse
    // utterance.pitch = pitch;
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
        <option value="">
          Selectionnez une voix
        </option>
        {voices.map((voice, index) => (
          <option key={index} value={index}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>

      {/* ================================================================================== */}

      <div style={{ marginTop: 55 }}>Ajuster le volume {volume}</div>
      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
      />

      {/* ================================================================================== */}
      <div style={{ marginTop: 15 }}>Pitch {pitch}</div>
      <input
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={pitch}
        onChange={(e) => setPitch(parseFloat(e.target.value))}
      />

      {/* ================================================================================== */}

      <div style={{ marginTop: 15 }}>Ajuster la vitesse {rate}</div>
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
