import React, { Component } from "react";
import "./animationzone.css";

class SortingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      arraySize: 25,
    };
  }

  generateArray() {
    const newArray = [];
    for (let i = 1; i <= this.state.arraySize; i++) {
      newArray.push(Math.ceil(2 * (Math.floor(Math.random() * 100) + 10)));
    }
    this.setState({ array: newArray });
  }

  async bubbleSort() {
    const array = this.state.array.slice();
    let animations = [];
    let swapped;

    for (let i = 0; i < array.length - 1; i++) {
      swapped = false;
      for (let j = 0; j < array.length - i - 1; j++) {
        animations.push([j, j + 1, "compare"]);
        if (array[j] > array[j + 1]) {
          animations.push([j, j + 1, "swap"]);
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
      if (!swapped) break;
    }

    for (let i = 0; i < animations.length; i++) {
      const [a, b, type] = animations[i];
      setTimeout(() => {
        this.animateBars(a, b, type);
      }, i * this.state.speed);
    }
  }

  animateBars(a, b, type) {
    const arrayBars = document.getElementsByClassName("bar");
    const barA = arrayBars[a];
    const barB = arrayBars[b];

    if (type === "compare") {
      setTimeout(() => {
        barA.style.backgroundColor = "red";
        barB.style.backgroundColor = "red";
      }, 0);
      setTimeout(() => {
        barA.style.backgroundColor = "#2196F3";
        barB.style.backgroundColor = "#2196F3";
      }, 300);
    } else if (type === "swap") {
      setTimeout(() => {
        const tempHeight = barA.style.height;
        barA.style.height = barB.style.height;
        barB.style.height = tempHeight;
      }, 0);
    }
  }

  handleSpeedChange(e) {
    const newSpeed = parseInt(e.target.value, 10);
    this.setState({ speed: newSpeed });
  }

  handleArraySizeChange() {
    this.generateArray();
  }

  render() {
    const { array, speed } = this.state;

    return (
      <div className="sorting-visualizer">
        <div className="array-container">
          {array.map((value, index) => (
            <div className="array-bar" key={index}>
              <span className="bar-number">{value}</span>
              <div className="bar" style={{ height: `${value}px` }}></div>
            </div>
          ))}
        </div>
        <button onClick={() => this.generateArray()}>Generate Array</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        {/* TODO:Flex direction */}
        <input
          type="range"
          min="1"
          max="10"
          value={speed}
          onChange={(e) => this.handleSpeedChange(e)}
        />
        <div className="speed-label">Speed: {speed}</div>
        <input
          type="range"
          min="2"
          max="25"
          value={this.state.arraySize}
          onChange={(e) => this.setState({ arraySize: e.target.value })}
          onInput={() => this.handleArraySizeChange()}
        />
        <div className="speed-label">Array Size: {this.state.arraySize}</div>
      </div>
    );
  }
}

export default SortingVisualizer;
