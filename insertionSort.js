async function insertionSort() {
  let n = values.length;
  for (let i = 1; i < n; i++) {
    let current = values[i];
    let j = i - 1;

    divs[i].style.backgroundColor = "blue";
    divs[j].style.backgroundColor = "red";

    while (j >= 0 && values[j] > current) {
      // Move the elements greater than the current value one position ahead
      await swap(j, j + 1);

      // Update visualization
      divs[j + 1].style.backgroundColor = "green";
      divs[j].style.backgroundColor = "green";

      j--;
    }
    continue;
    // Set the current value in its correct position
    values[j + 1] = current;

    // Update visualization
    divs[j + 1].style.height = current + "px";
    divs[j + 1].style.backgroundColor = "green";
    divs[j].style.backgroundColor = "green";
  }

  // Set color of all bars to green after sorting
  for (let i = 0; i < n; i++) {
    divs[i].style.backgroundColor = "green";
  }

  insertionSortAlgo.style.background = "none";
  enableAllButtons();
}
