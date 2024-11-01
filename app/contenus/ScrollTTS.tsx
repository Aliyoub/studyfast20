import { useState, useEffect, useRef } from "react";

import React from "react";
import { contents } from "./contents";
import { color } from "framer-motion";
import { contents2 } from "./contents2";
// import type { Metadata } from "next";
// import  { Metadata } from "next";


// export const metadata: Metadata = {
//   title: "Study Fast",
//   description: "Study Fast",
  // metadataBase: new URL('https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css'),
  // alternates: {
  //   canonical: '/',
  // },
// };

// export const metadata: Metadata = {
// //   metadataBase: new URL('https://acme.com'),
// // }
// // export const metadata = {
//   title: 'okokok',
//   manifest: '/manifest.json'
// }

function ScrollTTS() {
  // const ScrollTTS = () => {
  // const [text, setText] = useState(contents[0]); // Your long text\  here
  const [text, setText] = useState(contents2); // Your long text\  here
  const [isSpeaking, setIsSpeaking] = useState(false);
  const textRef = useRef(null); // Reference to the text container for scrolling

  useEffect(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Reset any previous speech
    }
  }, []);


  function changePreviousSiblingStyle(element: HTMLElement) {
    const previousElement = element.previousSibling;
  
    // Check if previous sibling is an HTMLElement
    if (previousElement instanceof HTMLElement) {
      previousElement.style.color = '#FFFFFF';  // Change style
    } else {
      console.log('Previous sibling is not an HTML element');
    }
  }

  const speakText = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);

      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        window.scrollTo(0, 0); // Scroll back to top when finished
      };

      // Use the onboundary event to detect word boundaries and scroll accordingly
      utterance.onboundary = (event) => {
        if (event.name === "word") {
          // Find the index of the word being read
          const wordIndex:any = event.charIndex;

          // Get the word element and scroll to it
          const wordElement = document.getElementById(`word-${wordIndex}`);     
          // const wordElement_2 = document.getElementById(`word-${wordIndex}`)?.previousSibling   
          if (wordElement) {
            changePreviousSiblingStyle(wordElement) 
            wordElement.style.color="#F8A3F0";
            wordElement.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      };

      // Speak the text
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Your browser does not support Text-to-Speech API.");
    }
  };

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Function to split text into words and render them with ids for scrolling
  const wordsFilter: any = []
  

  const renderTextWithSpans = () => {
    const wordIndex: number = 0;
    return text.split(" ").map((word, index) => (
      wordsFilter.push(word),
      // wordsFilter.includes(word) ? wordIndex = text.indexOf(word, index) : wordIndex,
      <span
        key={index}
        // id={`word-${text.indexOf(word, index)}`}
        id={`word-${text.indexOf(word, index)}`}
        style={{ marginLeft: "2px", marginRight: "2px",}}
      >
        {word}
      </span>
    ));
  };

  return (
    <>
    <div ref={textRef}>
      <div style={{   
        display:"flex",
        flexWrap: "wrap",
        padding: "5px",
        height: "200px",
        overflowX:"hidden",
        overflowY: "scroll",
        border: "1px solid #FCA4F0",}} >{renderTextWithSpans()}</div>
    </div>
    <div style={{ marginTop: "20px" }}>
    {isSpeaking ? (
      <button onClick={stopSpeaking}>Stop</button>
    ) : (
      <button onClick={speakText}>Read and Scroll</button>
    )}
  </div>
    </>
  );
}

export default ScrollTTS;
