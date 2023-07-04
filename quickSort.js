async function quickSort() {
  await doQuickSort(0, arrSize - 1);
  // Set color of all bars to green after sorting
  for (let i = 0; i < arrSize; i++) {
    divs[i].style.backgroundColor = "green";
  }
  quickSortAlgo.style.background = "none";
  enableAllButtons();
}

async function doQuickSort(low, high) {
  if (low < high) {
    const pivotIndex = await getPartition(low, high);
    await doQuickSort(low, pivotIndex - 1);
    await doQuickSort(pivotIndex + 1, high);
  }
}

async function getPartition(low, high) {
  const pivot = values[low];
  let left = low + 1;
  let right = high;

  // Color the bars being compared
  for (let i = low; i <= high; i++) {
    if (i >= left && i <= right) {
      divs[i].style.backgroundColor = "blue";
    }
  }

  await sleep(1000); // Delay for visualization

  while (left <= right) {
    while (values[left] <= pivot) {
      left++;
    }

    while (values[right] > pivot) {
      right--;
    }

    if (left <= right) {
      // Swap values
      const temp = values[left];
      values[left] = values[right];
      values[right] = temp;

      // Update the bar heights with new values
      divs[left].style.height = `${values[left]}px`;
      divs[right].style.height = `${values[right]}px`;

      await sleep(1000); // Delay for visualization

      // Reset the color of swapped bars
      divs[left].style.backgroundColor = "yellow";
      divs[right].style.backgroundColor = "yellow";

      left++;
      right--;
    }
  }

  // Swap pivot with the right index
  const temp = values[low];
  values[low] = values[right];
  values[right] = temp;

  // Update the bar heights with new values
  divs[low].style.height = `${values[low]}px`;
  divs[right].style.height = `${values[right]}px`;

  await sleep(1000); // Delay for visualization

  // Reset the color of the pivot and sorted bars
  divs[low].style.backgroundColor = "yellow";
  for (let i = low + 1; i <= right; i++) {
    divs[i].style.backgroundColor = "green";
  }

  await sleep(1000); // Delay for visualization

  return right;
}

// Helper function for delaying execution
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
