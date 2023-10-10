import React, { useState } from "react";
import CodeView from "./codeview";
import "./controlpanel.css";
import Animationzone from "./animationzone";
import {
  mergeSort,
  quickSort,
  bubbleSort,
  selectionSort,
  radixSort,
} from "./method";

const ControlPanel = () => {
  const [selectedAlgorithm, setselectedAlgorithm] = useState("");
  const options = [
    "Selection Sort",
    "Merge Sort",
    "Quick Sort",
    "Bubble Sort",
    "Radix Sort",
  ];

  const handleSelection = (event) => {
    setselectedAlgorithm(event.target.value);
  };

  // TODO - Find more efficient way to do this.

  const algorithms = {
    "Selection Sort": selectionSort,
    "Merge Sort": mergeSort,
    "Quick Sort": quickSort,
    "Bubble Sort": bubbleSort,
    "Radix Sort": radixSort,
  };

  // TODO - Improve
  const code = algorithms[selectedAlgorithm] || `Please select an algorithm`;

  return (
    <div className="codeviewWrapper">
      <div className="algorithm-type">
        <h1>Sorting Algorithm</h1>
      </div>
      <div className="select-container">
        <label className="dropdown-label" htmlFor="custom-select">
          Choose an Option:
        </label>
        <select
          id="custom-select"
          className="custom-select"
          value={selectedAlgorithm}
          onChange={handleSelection}
        >
          <option value="Nothing Selected">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="selected-algorithm">
        <span>You selected -- </span>
        <span>{selectedAlgorithm}</span>
      </div>
      <div className="main-frame">
        <div>
          <CodeView code={code} language="javascript" />
        </div>
        <div>
        <Animationzone code={code} />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
