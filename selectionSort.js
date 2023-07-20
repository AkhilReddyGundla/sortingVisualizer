async function selectionSort() {
  let inputSize = values.length;
  algoRunning=true;
  for (let i = 0; i < inputSize - 1; i++) {
    let minElement = values[i];
    let minIndex = i;

    divs[i].style.backgroundColor = "blue";

    for (let j = i + 1; j < inputSize; j++) {
      divs[j].style.backgroundColor = "red";

      // Delay for visualization
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (values[j] < minElement) {
        if (minIndex !== i) {
          divs[minIndex].style.backgroundColor = "yellow"; // Reset previous minimum element's color
        }
        minElement = values[j];
        minIndex = j;
        divs[minIndex].style.backgroundColor = "red";
      } else {
        divs[j].style.backgroundColor = "yellow"; // Reset non-minimum elements' color
      }
    }

    if (minIndex !== i) {
      await swap(i, minIndex);
    }

    // Set color of the sorted bar
    divs[i].style.backgroundColor = "green";
  }

  // Set color of all bars to green after sorting
  for (let i = 0; i < inputSize; i++) {
    divs[i].style.backgroundColor = "green";
  }
  selectionSortAlgo.style.background = "none";
  enableAllButtons();
  algoRunning=false;
}
