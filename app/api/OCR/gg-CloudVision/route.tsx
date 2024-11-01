import { NextResponse } from 'next/server';
import { ImageAnnotatorClient } from '@google-cloud/vision';
import * as path from 'path';
import { config } from 'dotenv';

// Load environment variables
config({ path: path.resolve('.env.local') });

const client = new ImageAnnotatorClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

export async function POST(request: any) {
  const { imageUrl } = await request.json();
  
  try {
    const [labels_result] = await client.labelDetection(imageUrl); // You can use textDetection, faceDetection, etc.
    const labels = labels_result.labelAnnotations;
    
    const [textDetection_result] = await client.textDetection(imageUrl); // You can use textDetection, faceDetection, etc.
    const textDetection = textDetection_result.textAnnotations
    
    // return NextResponse.json({ labels });
    return NextResponse.json({ textDetection });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
