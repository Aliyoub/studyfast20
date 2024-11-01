"use client";

import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const FlippingList = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <ReactCardFlip
        containerClassName="reactCardFlipStyle"
        flipDirection="horizontal"
        isFlipped={isFlipped}
      >
        <div
          style={{
            width: 300,
            height: 400,
            border: "1px solid #000000,",
            borderRadius: 20,
            margin: "50 auto",
            background: "skyblue",
          }}
          onClick={flipCard}
        >
          <h1>Question</h1>
        </div>
        <div
          style={{
            width: 300,
            height: 400,
            border: "1px solid #000000,",
            borderRadius: 20,
            margin: "50 auto",
            background: "#0491FE",
          }}
          onClick={flipCard}
        >
          <h1>Réponse</h1>
        </div>
      </ReactCardFlip>
      <style jsx>{`
        .reactCardFlipStyle {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default FlippingList;
