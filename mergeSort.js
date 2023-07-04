async function mergeSort() {
    await doMergeSort(0, arrSize - 1);
    // Set color of all bars to green after sorting
    for (let i = 0; i < arrSize; i++) {
      divs[i].style.backgroundColor = "green";
    }
    mergeSortAlgo.style.background = "none";
    enableAllButtons();
  }
  
  async function doMergeSort(low, high) {
    if (low < high) {
      let mid = Math.floor((low + high) / 2);
      await doMergeSort(low, mid);
      await doMergeSort(mid + 1, high);
      await merge(low, mid, high);
    }
  }
  
  async function merge(low, mid, high) {
    let left = low;
    let right = mid + 1;
    let newArray = [];
    
    // Color the bars being compared
    for (let i = low; i <= high; i++) {
      if (i >= left && i <= mid) {
        divs[i].style.backgroundColor = "blue";
      } else if (i >= right && i <= high) {
        divs[i].style.backgroundColor = "red";
      }
    }
    
    await sleep(1000); // Delay for visualization
    
    while (left <= mid && right <= high) {
      if (values[left] <= values[right]) {
        newArray.push(values[left]);
        left++;
      } else {
        newArray.push(values[right]);
        right++;
      }
    }
  
    while (left <= mid) {
      newArray.push(values[left]);
      left++;
    }
    
    while (right <= high) {
      newArray.push(values[right]);
      right++;
    }
    
    for (let i = low; i <= high; i++) {
      values[i] = newArray[i - low];
      // Update the bar heights with new values
      divs[i].style.height = `${values[i]}px`;
    }
    
    // Color the sorted bars
    for (let i = low; i <= high; i++) {
      divs[i].style.backgroundColor = "green";
    }
    
    await sleep(1000); // Delay for visualization
    
    return;
  }
  
  // Helper function for delaying execution
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  