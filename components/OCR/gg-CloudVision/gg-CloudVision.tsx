'use client'
import { useState } from 'react';

export default function GG_CloudVision() {
  const [imageUrl, setImageUrl] = useState('');
  const [labels, setLabels] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    const res = await fetch('/api/OCR/gg-CloudVision', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl }),
    });

    const data = await res.json();
    setLabels(data.labels || []);
  };

  return (
    <div>
      <h1>Image Label Detection</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL"
        />
        <button type="submit">Analyze Image</button>
      </form>

      {labels.length > 0 && (
        <div>
          <h2>Labels Detected:</h2>
          <ul>
            {labels.map((label, index) => (
              <li key={index}>{index}</li>
              // <li key={index}>{label.description}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
