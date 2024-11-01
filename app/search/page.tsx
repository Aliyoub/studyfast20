"use client";

import React, { useEffect } from "react";
// import MySearch from "../../components/search/MySearch";
import { myVoices } from "../gg-text-to-speech/voices";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import {
  clearSelection,
  ggTtsSelectedVoice,
} from "@/store/slices/ggTtsSelectedVoice/ggTtsSelectedVoiceSlice";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ggTtsSelectedVoiceFromStore = useSelector(
    (state: RootState) => state.ggTtsSelectedVoice.voice
  );
  const handleSelect = async (voice: any) => {
    dispatch(ggTtsSelectedVoice(voice));
    console.log("ggTtsSelectedVoiceFromStore", ggTtsSelectedVoiceFromStore);
    // const sendUsernameToServer = async () => {
    if (ggTtsSelectedVoiceFromStore) {
      try {
        const response = await fetch("/api/gg-text-to-speech", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ggTtsSelectedVoiceFromStore),
        });
        const data = await response.json();
        console.log("Réponse du serveur:", data);
      } catch (error) {
        console.error("Erreur lors de l'envoi du nom d'utilisateur:", error);
      }
    } else return;
    //   };
  };

  const handleClearSelection = () => {
    dispatch(clearSelection());
  };

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {myVoices.map((voice) => (
          <li key={voice.name}>
            <button onClick={() => handleSelect(voice)}>{voice.name}</button>
          </li>
        ))}
      </ul>

      {ggTtsSelectedVoice ? (
        <div>
          <h3>Selected Item:</h3>
          <p>ID: {ggTtsSelectedVoice.name}</p>
          <p>Name: {ggTtsSelectedVoice.name}</p>
          <button onClick={handleClearSelection}>Clear Selection</button>
        </div>
      ) : (
        <p>No item selected</p>
      )}
    </div>
  );
};

export default Page;
