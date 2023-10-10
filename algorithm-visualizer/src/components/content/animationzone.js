import React, { useState } from "react";
import "./animationzone.css";

const Animationzone = ({ code }) => {
  const [array, setArray] = useState([]);
  const [settings, setSettings] = useState({
    speed: 0,
    length: 20,
  });

  const handleSpeed = (ev) => {
    setSettings({ ...settings, speed: parseInt(ev.target.value) });
  }
  const handleLength = (ev) => {
    setSettings({ ...settings, length: parseInt(ev.target.value) });
  }

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

          const { speed } = settings
          const delay = 1000 - speed;
          await new Promise(
            (resolve) =>
              setTimeout(() => {
                setArray([...arrayCopy]);
                resolve();
              }, delay) // Speed
          );
        }
      }
    }
  };

  return (
    <div className="sorting-visualizer">
      <div className="input-controls">
        <div className="input-group">
          <label htmlFor="array-length">Array Length</label>
          <input type="range" name="array-length" min="20" max="80" step="10" value={settings.length} onChange={handleLength}/>
        </div>
        <div className="input-group">
          <label htmlFor="sorting-speed">Speed</label>
          <input type="range" name="sorting-speed" min="0" max="900" step="100" value={settings.speed} onChange={handleSpeed}/>
        </div>
      </div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-view"
            key={idx}>
            {/* does not fit in properly with large array input
            <div className="array-value">{value}</div> */}
            <div className="array-bar" style={{ height: `${value}px` }}></div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => generateRandomArray(settings.length)}>Generate Array</button>
        <button onClick={() => Sort()}>Sort</button>
      </div>
    </div>
  );
};

export default Animationzone;
