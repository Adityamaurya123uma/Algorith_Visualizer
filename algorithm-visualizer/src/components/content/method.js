// Bubble Sort
export function bubbleSort(array) {
  const arrayCopy = [...array];
  const animations = [];
  const n = arrayCopy.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compare and swap if needed
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        // Swap elements
        const temp = arrayCopy[j];
        arrayCopy[j] = arrayCopy[j + 1];
        arrayCopy[j + 1] = temp;

        // Store the animations
        animations.push([j, j + 1]);
      }
    }
  }
  return animations;
}

// Merge Sort
export const mergeSort = function mergeSort(arr) {
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }

  const n = arr.length;

  if (n <= 1) {
    return arr;
  }

  const middle = Math.floor(n / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

// Selection Sort
export const selectionSort = function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the current element is the minimum
    let minIndex = i;
    // Find the index of the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the minimum element with the first element in the unsorted part
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
};

//Radix Sort
export const radixSort = function radixSort(arr) {
  function getMax() {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  function countingSort(exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      count[digit]++;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }

    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
    }
  }

  const max = getMax();

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(exp);
  }

  return arr;
};

export const quickSort = function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Select a pivot element (e.g., the middle element)
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  // Divide the array into two sub-arrays: elements less than the pivot and elements greater than the pivot
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the sub-arrays and combine them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
};
