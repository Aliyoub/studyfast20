import { useState, useEffect } from 'react';

const Gamification = () => {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);

  // Increment points on button click
  const gainPoints = () => {
    setPoints(prevPoints => prevPoints + 10);
  };

  // Calculate level based on points
  useEffect(() => {
    if (points >= 100) setLevel(2);
    if (points >= 200) setLevel(3);
  }, [points]);

  return (
    <div>
      <h2>Your Gamification Progress</h2>
      <p>Points: {points}</p>
      <p>Level: {level}</p>
      <button onClick={gainPoints}>Gain Points</button>
    </div>
  );
};

export default Gamification;
