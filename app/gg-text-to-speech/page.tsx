"use client";
import { useEffect, useState } from "react";
import { myVoices } from "./voices";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

export default function Home() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [audioPlayer, setAudioPlayer] = useState<any>(null);
  const [voices, setVoices] = useState([]);
  const [error, setError] = useState(null);
  // const [audioPlayer, setAudioPlayer] = useState(null);
  // const [contents, setContents] = useState<any[]>([]);

  const [isRepeating, setIsRepeating] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const ggTtsSelectedVoiceFromStore = useSelector(
      (state: RootState) => state.ggTtsSelectedVoice.voice
    );
  const handleSubmit = async (e: any) => {
    e.preventDefault();


console.log('ggTtsSelectedVoiceFromStore', ggTtsSelectedVoiceFromStore)
    const res = await fetch("/api/gg-text-to-speech", {
      // const res = await fetch(`${process.env.API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    // Convertir la réponse audio base64 en URL pour la lire
    if (data.audioContent) {
      const audioBlob = new Blob(
        [Uint8Array.from(atob(data.audioContent), (c) => c.charCodeAt(0))],
        { type: "audio/mp3" }
      );
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
      // {
      //   console.log("first audioUrl", audioUrl);
      // }

      // ===============
      // Create a new Audio object
      const audioContent = `data:audio/mp3;base64,${data.audioContent}`;
      const audio: any = new Audio(audioContent);
      setAudioPlayer(audio);
      // ================
    }
  };
  const handlePlay = () => {
    if (audioPlayer) {
      audioPlayer.play();
    }
  };

  const handlePause = () => {
    if (audioPlayer) {
      audioPlayer.pause();
    }
  };

  const handleStop = () => {
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0; // Reset to the beginning
    }
  };

  const handleRepeatToggle = () => {
    setIsRepeating(!isRepeating); // Toggle the repeat flag
  };

  useEffect(() => {
    if (audioPlayer) {
      // Listen for the 'ended' event to know when the audio finishes
      audioPlayer.addEventListener("ended", () => {
        if (isRepeating) {
          audioPlayer.currentTime = 0; // Reset to start
          audioPlayer.play(); // Replay the audio
        }
      });

    }

    // Cleanup the event listener when the component unmounts or player changes
    return () => {
      if (audioPlayer) {
        audioPlayer.removeEventListener("ended", () => {});
      }
    };
  }, [audioPlayer, isRepeating]);

  // useEffect(() => {
  //   async function fetchVoices() {
  //     // try {
  //     //   const response = await fetch('/api/gg-text-to-speech');
  //     //   if (!response.ok) {
  //     //     throw new Error('Failed to fetch voices');
  //     //   }
  //     //   const data = await response.json();
  //     //   // setVoices(data.voices);
  //     //   console.log('all data!!', data.voices)

  //     // } catch (error) {
  //     //   // setError(error.message);
  //     //   console.log('first', error)
  //     // }
  //     console.log('voices', myVoices[10])
  //   }
  //   fetchVoices();
  // }, []);



  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        border: "1px solid grey",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: 15 }}>
        Google Text-to-Speech Demo
      </h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          cols={50}
        />
        <button type="submit">Convert to Speech</button>
      </form>

      {audioUrl && (
        <div>
          <h2>Audio Output:</h2>
          {/* <audio controls src={audioUrl}></audio> */}
          <div>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleRepeatToggle}>
              {isRepeating ? "Disable Repeat" : "Enable Repeat"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
