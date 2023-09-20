// Variables
let values = [];
let divs = [];
let arrSize = 20; // Initial array size
const rangeInput = document.getElementById("size");
const displaySize = document.querySelector(".displaySize");
const getNewArr = document.querySelector(".newArrayGen");
const graph = document.querySelector(".graph");
const bubbleSortAlgo = document.querySelector(".bubbleSort");
const insertionSortAlgo = document.querySelector(".insertionSort");
const selectionSortAlgo = document.querySelector(".selectionSort");
const mergeSortAlgo = document.querySelector(".mergeSort");
const quickSortAlgo = document.querySelector(".quickSort");
const algorithm = document.querySelector(".algorithm");
let displayTimeComplexity = document.querySelector(".displayTimeComplexity");
let displaySpaceComplexity = document.querySelector(".displaySpaceComplexity");
let notes = document.querySelector(".description");
// Event listeners

document.addEventListener("DOMContentLoaded", function () {
  rangeInput.addEventListener("input", function () {
    arrSize = rangeInput.value;
    generateArray();
  });

  generateArray();
});

getNewArr.addEventListener("click", function () {
  generateArray();
});
let algoRunning = false;
bubbleSortAlgo.addEventListener("click", async function (e) {
  if (algoRunning === false) {
    bubbleSortAlgo.style.backgroundColor = "red";
    disableAllButtons();
    displayTimeComplexity.innerHTML = "O(N<sup>2</sup>)";
    displaySpaceComplexity.innerHTML = "O(1)";
    notes.innerHTML =
      "<br> Red Blue color bars represents comparing values (or portion )of bars <br> Green for sorted portion of values (or Array)";
    await bubbleSort();
  } else {
    alert("algorithm is running please wait or reload the page");
    bubbleSortAlgo.style.backgroundColor = "transparent";
  }
});
insertionSortAlgo.addEventListener("click", async function (e) {
  if (algoRunning === false) {
    disableAllButtons();
    displayTimeComplexity.innerHTML = "O(N<sup>2</sup>)";
    displaySpaceComplexity.innerHTML = "O(1)";
    insertionSortAlgo.style.backgroundColor = "red";
    notes.innerHTML =
      "<br> Red and Blue color bars represents comparing values (or portion )of bars <br> Green for sorted portion of values (or Array)";
    await insertionSort();
  } else {
    alert("algorithm is running please wait or reload the page");
    insertionSortAlgo.style.backgroundColor = "transparent";
  }
});

selectionSortAlgo.addEventListener("click", async function (e) {
  if (algoRunning === false) {
    disableAllButtons();
    selectionSortAlgo.style.backgroundColor = "red";
    displayTimeComplexity.innerHTML = "O(N<sup>2</sup>)";
    displaySpaceComplexity.innerHTML = "O(1)";
    notes.innerHTML =
      "<br> Red and Blue color bars represents comparing values (or portion )of bars <br> Green for sorted portion of values (or Array)";
    await selectionSort();
  } else {
    alert("algorithm is running please wait or reload the page");
    selectionSortAlgo.style.backgroundColor = "transparent";
  }
});

mergeSortAlgo.addEventListener("click", async function (e) {
  if (algoRunning === false) {
    disableAllButtons();
    mergeSortAlgo.style.backgroundColor = "red";
    displayTimeComplexity.innerHTML = "O(N LOG N)";
    displaySpaceComplexity.innerHTML = "O(N)";
    notes.innerHTML =
      "<br> Red and Blue color bars represents comparing values (or portion )of bars <br> Green for sorted portion of values (or Array)";
    await mergeSort();
  } else {
    alert("algorithm is running please wait or reload the page");
    mergeSortAlgo.style.backgroundColor = "transparent";
  }
});

quickSortAlgo.addEventListener("click", async function (e) {
  if (algoRunning === false) {
    disableAllButtons();
    displayTimeComplexity.innerHTML = "O(N LOG N)";
    displaySpaceComplexity.innerHTML = "O(1) + O(N) auxiliary stack space";
    notes.innerHTML =
      "<br>Violet for sorting space <br> White for pivot element <br> Red indicates element which is greater than pivot element from left side <br> Blue indicates element which is smaller than pivot element from right side <br> Gray indicates comparing current element with pivot element <br> Orange indicates partation element.";
    quickSortAlgo.style.backgroundColor = "red";
    await quickSort();
  } else {
    alert("algorithm is running please wait or reload the page");
    quickSortAlgo.style.backgroundColor = "transparent";
  }
});

// Utility function to generate random values for the array
function random() {
  return Math.floor(Math.random() * 200 + 1);
}
// Generate the array
function generateArray() {
  graph.innerHTML = "";
  values = [];
  displaySize.innerHTML = arrSize;
  for (let i = 0; i < arrSize; i++) {
    values[i] = random();
    divs[i] = document.createElement("div");
    divs[i].classList.add("bar");
    graph.appendChild(divs[i]);
    divs[i].style.height = values[i] + "px";
    divs[i].style.backgroundColor = "yellow";
    divs[i].style.margin = "0.8px";
  }
}

// Bubble Sort function

// Utility function to swap two bars
function swap(i, j) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let temp = values[i];
      values[i] = values[j];
      values[j] = temp;

      divs[i].style.height = values[i] + "px";
      divs[j].style.height = values[j] + "px";

      resolve();
    }, 1000); // Adjust the delay time as per your preference
  });
}

function disableAllButtons() {
  rangeInput.setAttribute("disabled", "");
  getNewArr.setAttribute("disabled", "");
  bubbleSortAlgo.setAttribute("disabled", "");
  selectionSortAlgo.setAttribute("disabled", "");
  mergeSortAlgo.setAttribute("disabled", "");
  insertionSortAlgo.setAttribute("disabled", "");
  quickSortAlgo.setAttribute("disabled", "");
}
function enableAllButtons() {
  rangeInput.removeAttribute("disabled", "");
  getNewArr.removeAttribute("disabled", "");
  bubbleSortAlgo.removeAttribute("disabled", "");
  mergeSortAlgo.removeAttribute("disabled", "");
  insertionSortAlgo.removeAttribute("disabled", "");
  quickSortAlgo.setAttribute("disabled", "");
}
