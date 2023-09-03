import React, { useState } from "react";
import CodeView from "./codeview";

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

  const code = `
    function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
    }
  `;

  return (
    <div className="codeviewWrapper">
      <div>
        <h1>Sorting Algorithm</h1>
      </div>
      <div className="select-container">
        <label htmlFor="custom-select">Choose an option:</label>
        <select
          id="custom-select"
          className="custom-select"
          value={selectedAlgorithm}
          onChange={handleSelection}
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <span>{selectedAlgorithm}</span>
      <div>
        <CodeView code={code} language="javascript" />
      </div>
    </div>
  );
};

export default ControlPanel;
