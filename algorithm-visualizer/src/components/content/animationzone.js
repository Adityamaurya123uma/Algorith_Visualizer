import React, { useState } from "react";
import "./animationzone.css";

const Animationzone = ({ code }) => {
  const [array, setArray] = useState([]);

  const generateRandomArray = (size) => {
    const newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push(Math.floor(Math.random() * (300 - 5 + 1)) + 5);
    }
    setArray(newArray);
  };

  // Currently only bubble sort is implemented. Need to Find a way to implement more algorithms.
  const Sort = async () => {
    const arrayCopy = [...array];
    for (let i = 0; i < arrayCopy.length - 1; i++) {
      for (let j = 0; j < arrayCopy.length - i - 1; j++) {
        if (arrayCopy[j] > arrayCopy[j + 1]) {
          const temp = arrayCopy[j];
          arrayCopy[j] = arrayCopy[j + 1];
          arrayCopy[j + 1] = temp;

          await new Promise(
            (resolve) =>
              setTimeout(() => {
                setArray([...arrayCopy]);
                resolve();
              }, 30) // Speed
          );
        }
      }
    }
  };

  return (
    <div className="sorting-visualizer">
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => generateRandomArray(10)}>Generate Array</button>
        <button onClick={() => Sort()}>Sort</button>
      </div>
    </div>
  );
};

export default Animationzone;
