// 'use client'

// import Tesseract from '../../components/scanner/tesseract/Tesseract'
// const Page = () => {
//   return (
//     <Tesseract />
//   )
// }

// export default Page

// pages/ocr.js
'use client'
import * as Tesseract from 'tesseract.js';

import { useState } from 'react';

const Ocr = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    // setSelectedImage(URL.createObjectURL(file)); !!!
    // runOcr(file); !!!
  };

  const runOcr = (file: any) => {
    Tesseract.recognize(file, 'eng', {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          setProgress(Math.floor(m.progress * 100));
        }
      },
    })
      .then(({ data: { text } }) => {
        setText(text);
      })
      .catch((err) => {
        console.error('OCR Error:', err);
      });
  };

  return (
    <div>
      <h1>OCR with Tesseract.js</h1>
      <input type="file" onChange={handleImageChange} />
      {progress > 0 && <p>Progress: {progress}%</p>}
      {selectedImage && <img src={selectedImage} alt="Selected" width="200px" />}
      {text && <p>Extracted Text: {text}</p>}
    </div>
  );
};

export default Ocr;
