"use client";

import React from "react";

import { useEffect, useState } from "react";
import { texts } from "@/Texts";
import { argum } from "@/argum";
import Select from "react-select";

import styles from "../app/settings/selectStyle.module.css";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { ttsVolume } from '../store/slices/tts/ttsVolumeSlice';
import { ttsPitch } from '../store/slices/tts/ttsPitchSlice';
import { ttsRate } from '../store/slices/tts/ttsRateSlice';

export default function Tts() {
  const dispatch = useDispatch<AppDispatch>();
  // const volumeFromStore = useSelector(
  //   (state: RootState) => state.tts.value);
  const volumeFromStore = useSelector((state: RootState) => state.ttsVolume.value);
  const pitchFromStore = useSelector((state: RootState) => state.ttsPitch.value);
  const rateFromStore = useSelector((state: RootState) => state.ttsRate.value);

  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [volume, setVolume] = useState(volumeFromStore);
  const [pitch, setPitch] = useState(pitchFromStore);
  const [rate, setRate] = useState(rateFromStore);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices: any = window.speechSynthesis.getVoices();
      // console.log("availableVoices", availableVoices[0]);
      // setVoices(availableVoices);

      const tempVoices: any = [];
      availableVoices.forEach((voice: any, index: number) => {
        tempVoices.push({
          value: voice.name,
          label: voice.name + voice.lang,
          index: index,
        });
      });
      setVoices(tempVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleVoiceChange = (val: any) => {
    // const voiceIndex = e.target.value;
    // setSelectedVoice(voices[voiceIndex]);
    console.log("val", val);
    console.log("setSelectedVoice", voices[val.index]);

    setSelectedVoice(voices[val.index]);
  };

  // const handleVoiceChange = (e: any) => {
  //   const voiceIndex = e.target.value;
  //   console.log(' e.target.value',  e.target.value)
  //   setSelectedVoice(voices[voiceIndex]);
  //   console.log('SSSSelectedVoice', selectedVoice)
  // };

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(argum);

    // Set the voice if it's selected and valid
    if (selectedVoice) {
      console.log("firstsss", selectedVoice);
      // setSelectedVoice(utterance.voice)
      // utterance.voice = selectedVoice;
      utterance.voice = selectedVoice;
    }
    // Set the volume
    utterance.volume = volume;
    utterance.rate = rate; // Vitesse
    utterance.pitch = pitch;
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
      {/* <select onChange={handleVoiceChange}>
        <option value="">
          Selectionnez une voix
        </option>
        {voices.map((voice: any, index: any) => (
          <option key={index} value={index}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select> */}

      <div className={styles.selectStyle}>
        <Select
          defaultValue={selectedVoice}
          onChange={(val: any) => handleVoiceChange(val)}
          options={voices}
          className={styles.selectStyle}
          classNamePrefix="react-select__control"
        />
      </div>

      {/* ================================================================================== */}

      <div style={{ marginTop: 55 }}>Volume: {volume}</div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => {
          setVolume(parseFloat(e.target.value));
          dispatch(ttsVolume(e.target.value));
        }}
      />

      {/* ================================================================================== */}
      <div style={{ marginTop: 15 }}>Pitch: {pitch}</div>
      <input
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={pitch}
        onChange={(e) => {
          setPitch(parseFloat(e.target.value));
          dispatch(ttsPitch(e.target.value));
        }}
      />

      {/* ================================================================================== */}

      <div style={{ marginTop: 15 }}>Vitesse: {rate}</div>
      <input
        type="range"
        min="0.1"
        max="5"
        step="0.1"
        value={rate}
        onChange={(e) => {
          setRate(parseFloat(e.target.value));
          dispatch(ttsRate(e.target.value));
        }}
      />

      <button
        style={{
          marginTop: 55,
          backgroundColor: "#0175FF",
          color: "#E5E5E5",
          paddingLeft: 50,
          paddingRight: 50,
        }}
        onClick={speak}
      >
        Ecouter
      </button>
      {/* <button
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
      </button> */}
    </div>
  );
}
