async function bubbleSort() {
  algoRunning=true;
  for (let i = 0; i < arrSize; i++) {
    for (let j = 0; j < arrSize - i - 1; j++) {
      divs[j].style.backgroundColor = "blue";
      divs[j + 1].style.backgroundColor = "red";

      if (values[j] > values[j + 1]) {
        // Swap values
        await swap(j, j + 1);
      }

      divs[j].style.backgroundColor = "yellow";
      divs[j + 1].style.backgroundColor = "yellow";
    }

    // Set sorted bar color
    divs[arrSize - i - 1].style.backgroundColor = "green";
  }

  // Set color of all bars to green after sorting
  for (let i = 0; i < arrSize; i++) {
    divs[i].style.backgroundColor = "green";
  }
  bubbleSortAlgo.style.background="none";
  algoRunning=false;
  enableAllButtons();
}
