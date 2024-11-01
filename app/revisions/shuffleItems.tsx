'use client'

import { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

const FlippingList = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const shuffleItems = () => {
    setItems((prevItems) => [...prevItems.sort(() => Math.random() - 0.5)]);
  };

  return (
    <div>
      <button onClick={shuffleItems}>Shuffle List</button>
      <Flipper flipKey={items.join("")}>
        <ul>
          {items.map((item) => (
            <Flipped key={item} flipId={item}>
              <li>
                <div className="list-item">{item}</div>
              </li>
            </Flipped>
          ))}
        </ul>
      </Flipper>
      <style jsx>{`
        .list-item {
          background-color: #D4E3FD;
          margin: 10px;
          padding: 10px;
          text-align: center;
          border-radius: 4px;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default FlippingList;
