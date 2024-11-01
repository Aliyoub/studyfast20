"use client";

import { useState } from "react";
import { questions } from "./quizzData";

import Confetti from "react-confetti";

const HistoryQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswer = (selectedOption: any) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleCelebrate = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // L'effet dure 5 secondes
  };

  return (
    <div>
      {showResult ? (
        <div
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#264BC0",
            background: 'linear-gradient(to top, #264BC0, #FCA4F0)',
          }}
        >
          <h2
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#FCA4F0",
            }}
          >
            Résultat: {score} / {questions.length}
          </h2>
          <h2
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            {score >= 5 ? "Bravo, vous maîtriser bien le sujet !" : ""}
          </h2>
          <p>
            {score >= 5 ? <Confetti /> : "Vous pouvez réviser encore un peu."}
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              backgroundColor: "#264BC0",
              marginBottom: "10px",
              color: "#FCA4F0",
              padding: "10px",
              fontSize: 16,
              fontWeight: "bolder",
            }}
          >
            {questions[currentQuestion].question}
          </h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                handleAnswer(option);
                handleCelebrate;
              }}
              style={{
                margin: "2px",
                padding: "10px",
                color: "#FFFFFF",
                backgroundColor: "#264BC0",
                fontSize: "16px",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryQuiz;
