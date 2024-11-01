'use client'

import { useState } from 'react';

export default function EasyOcr() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0];
    setImage(file);

    const formData = new FormData();
    // formData.append('image', image);
    formData.append('image', file);

    const res = await fetch('/api/OCR/easyOcr', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setText(data.text);
  };

  return (
    <div>
      <h1>EasyOCR with Next.js</h1>
      <input type="file" onChange={handleImageUpload} />
      <p>{text}</p>
    </div>
  );
}