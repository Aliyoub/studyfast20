"use client";

import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { geographyCards, flippedCards } from "./geographyCards";
import { useRouter } from "next/navigation";

const FlippingCards = () => {
  const router = useRouter();
  const [isFlippedCard, setIsFlippedCards] = useState<boolean[]>(flippedCards);

  const handleFlip = (index: number) => {
    setIsFlippedCards((prev) =>
      prev.map((flip, i) => (i === index ? !flip : flip))
    );
  };

  return (
    <>
      <h2 style={{ marginTop: 27 }} onClick={() => router.back()}>
        Retour
      </h2>
      <div className="card-container">
        {geographyCards.map((geographyCard) => (
          <ReactCardFlip
            key={geographyCard.id}
            isFlipped={isFlippedCard[geographyCard.id]}
          >
            <div
              className="card front"
              key="front"
              onClick={() => handleFlip(geographyCard.id)}
            >
              {geographyCard.front}
            </div>

            <div
              className="card back"
              key="back"
              onClick={() => handleFlip(geographyCard.id)}
            >
              {geographyCard.back}
            </div>
          </ReactCardFlip>
        ))}

        <style jsx>{`
          .card-container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .card {
            width: 300px;
            height: 400px;
            padding: 17px;
            background-color: #61dafb;
            color: #fff;
            display: flex;
            // align-items: center;
            justify-content: center;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.6s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            // text-align: justify;
            overflow: scroll;
          }
          .front {
            background-color: #264BC0;
          }
          .back {
            background-color: #6586f0;
            // background-color: #f39c12;
          }
        `}</style>
      </div>
    </>
  );
};

export default FlippingCards;
