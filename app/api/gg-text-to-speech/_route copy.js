// pages/api/textToSpeech.js

import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';

// Configuration pour charger les identifiants JSON (si vous utilisez un compte de service)
if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;
}

// Fonction pour traiter les requêtes API
// export default async function handler(req, res) {
export async function POST(req, res) {
  const { text } = await req.json();

  if (!text) {
    return new Response(JSON.stringify({ error: 'Text is required' }), {
      status: 400,
    });
  }

  try {
    const textToSpeechClient = new TextToSpeechClient();

    // Récupérer le texte depuis la requête
    const { text } = req.body;

    // Configuration de la synthèse vocale
    const request = {
      input: { text: text },
      voice: {
        languageCode: 'en-US',
        ssmlGender: 'NEUTRAL',
      },
      audioConfig: {
        audioEncoding: 'MP3',
      },
    };

    // Appeler l'API Text-to-Speech
    const [response] = await textToSpeechClient.synthesizeSpeech(request);

    // Sauvegarder l'audio sur le serveur (pour tester en local)
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('output.mp3', response.audioContent, 'binary');

    // Retourner la réponse sous forme de fichier audio
    res.status(200).json({
      message: 'Text-to-Speech conversion successful',
      audioContent: response.audioContent.toString('base64'), // Retourner l'audio en base64
    });
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: 'Internal Server Error' });
  }
}
