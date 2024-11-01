// app/api/textToSpeech/route.js

// import { send } from "process";
// import { json } from "stream/consumers";
import { getAllContents } from "@/lib/db";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import { NextResponse } from "next/server";
import { useLocalStorage } from "react-use";

export async function GET() {
  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  const url = `https://texttospeech.googleapis.com/v1/voices?key=${apiKey}`;
  // const url = `https://texttospeech.googleapis.com/v1/voices`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching voices: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({ success: true, voices: data.voices });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// Gestion de la requête POST
export async function POST(req: any) {
  const { text, ggTtsSelectedVoiceFromStore } = await req.json();

  if (!text) {
    return new Response(JSON.stringify({ error: "Text is required" }), {
      status: 400,
    });
  }
  // if (!ggTtsSelectedVoiceFromStore) {
  //   return new Response(JSON.stringify({ error: "Voice is required" }), {
  //     status: 400,
  //   });
  // }

  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

  const body = {
    input: { text: text },
    voice: {
      languageCode: ggTtsSelectedVoiceFromStore.languageCode,
      // languageCode: 'en-US',
      ssmlGender: ggTtsSelectedVoiceFromStore.ssmlGender,
    },
    // voice: {
    //   languageCode: 'fr-FR',
    //   // languageCode: 'en-US',
    //   ssmlGender: 'NEUTRAL',
    // },
    // voice: ggTtsSelectedVoiceFromStore,
    audioConfig: {
      audioEncoding: "MP3",
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.json();
      return new Response(JSON.stringify({ error: error.error.message }), {
        status: 500,
      });
    }

    const data = await response.json();

    // const client = new TextToSpeechClient()

    //   res.json(result.voices);
    // } catch (error) {
    //   res.status(500).send("Error fetching voices");
    // }

    return new Response(JSON.stringify({ audioContent: data.audioContent }), {
      // return new Response(JSON.stringify({ audioContent: data.audioContent, voices: client.listVoices() }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

// // Gestion de la requête GET
// export async function GET() {
//   return new Response(JSON.stringify({ message: 'Use POST to convert text to speech' }), {
//     status: 200,
//   });
// }
