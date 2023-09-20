async function quickSort() {
  algoRunning = true;
  await doQuickSort(0, arrSize - 1);
  setColorToAllBars("green");
  enableAllButtons();
  algoRunning = false;
}

async function doQuickSort(low, high) {
  if (low < high) {
    const partitionIndx = await getPartitionIndx(low, high);
    await sleep(2000);
    await doQuickSort(low, partitionIndx - 1);
    await doQuickSort(partitionIndx + 1, high);
  }
}

async function getPartitionIndx(low, high) {
  const pivot = values[low];
  let left = low;
  let right = high;
  divs[left].style.backgroundColor = "white"; //assuming first element as pivot element 
  setColorToBars("violet", low, high); // sorting space

  while (left < right) {
    while (values[left] <= pivot && left <= high-1) {
      if (left !== low) {
        divs[left].style.backgroundColor = "gray"; // 
        await sleep(1000);
        divs[left].style.backgroundColor = "yellow";
      } else {
        divs[left].style.backgroundColor = "white"; // Pivot
      }
      await sleep(1000);
      left++;
    }
    divs[left].style.backgroundColor = "red";
    await sleep(1000);
    while (values[right] > pivot && right >= low+1) {
      if (right !== low) {
        divs[right].style.backgroundColor = "gray";
        await sleep(1000);
        divs[right].style.backgroundColor = "yellow";
      } else {
        divs[right].style.backgroundColor = "white"; // Pivot
      }
      right--;
    }
    divs[right].style.backgroundColor = "blue";
    await sleep(1000);
    if (left < right) {
      await swap(left, right); // Call the swap function to swap elements
    }
  }

  await swap(low, right); // Call the swap function to swap elements


  //highlight and reset the partation element
  divs[right].style.backgroundColor = "orange";
  await sleep(2000)
  divs[right].style.backgroundColor = "yellow";
  return right;
}

async function swap(i, j) {
  await sleep(2000);
  const temp = values[i];
  values[i] = values[j];
  values[j] = temp;

  // Update the heights and reset the colors
  divs[i].style.height = `${values[i]}px`;
  divs[j].style.height = `${values[j]}px`;

  divs[i].style.backgroundColor = "yellow"; // Reset color after swap
  divs[j].style.backgroundColor = "yellow"; // Reset color after swap
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setColorToAllBars(color) {
  for (let i = 0; i < arrSize; i++) {
    divs[i].style.backgroundColor = color;
  }
}

function setColorToBars(color, start, end) {
  for (let i = start; i <= end; i++) {
    divs[i].style.backgroundColor = color;
  }
}