
// Variables
let values = [];
let divs = [];
let arrSize = 20; // Initial array size
const rangeInput = document.getElementById("size");
const speed = document.getElementById("speed");
const displaySize = document.querySelector(".displaySize")
const getNewArr = document.querySelector(".newArrayGen");
const graph = document.querySelector(".graph");
const bubbleSortAlgo = document.querySelector(".bubbleSort");
const insertionSortAlgo = document.querySelector(".insertionSort")
const selectionSortAlgo =document.querySelector(".selectionSort")
const mergeSortAlgo = document.querySelector(".mergeSort");
const quickSortAlgo = document.querySelector(".quickSort");
let displayTimeComplexity = document.querySelector(".displayTimeComplexity");
let displaySpaceComplexity = document.querySelector(".displaySpaceComplexity");
// Event listeners


document.addEventListener('DOMContentLoaded', function() {
  rangeInput.addEventListener('input', function() {
    arrSize = rangeInput.value;
    generateArray();
  });
  
  generateArray();
});

getNewArr.addEventListener('click', function() {
  generateArray();
});

bubbleSortAlgo.addEventListener('click', function(e) {
  bubbleSortAlgo.style.backgroundColor="red";
  disableAllButtons();
  displayTimeComplexity.innerHTML="O(N<sup>2</sup>)";
  displaySpaceComplexity.innerHTML="O(1)" 
  bubbleSort();
});
insertionSortAlgo.addEventListener('click', function(e) {
  disableAllButtons();
  displayTimeComplexity.innerHTML="O(N<sup>2</sup>)";
  displaySpaceComplexity.innerHTML="O(1)" 
  insertionSortAlgo.style.backgroundColor="red";
  insertionSort();
});

selectionSortAlgo.addEventListener('click', function(e) {
  disableAllButtons();
  selectionSortAlgo.style.backgroundColor="red";
  displayTimeComplexity.innerHTML="O(N<sup>2</sup>)";
  displaySpaceComplexity.innerHTML="O(1)" 
  selectionSort();
});

mergeSortAlgo.addEventListener('click', function(e) {
  disableAllButtons();
  mergeSortAlgo.style.backgroundColor="red";
  displayTimeComplexity.innerHTML="O(N LOG N)";
  displaySpaceComplexity.innerHTML="O(N)" 
  mergeSort();
});

quickSortAlgo.addEventListener('click', function(e) {
  disableAllButtons();
  displayTimeComplexity.innerHTML="O(N LOG N)";
  displaySpaceComplexity.innerHTML="O(LOG N)" 
  quickSortAlgo.style.backgroundColor="red";
  quickSort();
});

// Utility function to generate random values for the array
function random() {
  return Math.floor(Math.random() * 200 + 1);
}
// Generate the array
function generateArray() {
  graph.innerHTML = "";
  values = [];
  displaySize.innerHTML=arrSize;
  for (let i = 0; i < arrSize; i++) {
    values[i] = random();
    divs[i] = document.createElement("div");
    divs[i].classList.add("bar");
    graph.appendChild(divs[i]);
    divs[i].style.height = values[i] + "px";
    divs[i].style.backgroundColor = "yellow";
    divs[i].style.margin = "0.8px"
  }
}

// Bubble Sort function




// Utility function to swap two bars
function swap(i, j) {
  return new Promise(resolve => {
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


function disableAllButtons(){
  rangeInput.setAttribute('disabled','');
  console.log(getNewArr)
  console.log(rangeInput)
  getNewArr.setAttribute('disabled', '');
  bubbleSortAlgo.setAttribute('disabled','');
  selectionSortAlgo.setAttribute('disabled','');
  mergeSortAlgo.setAttribute('disabled','');
  insertionSortAlgo.setAttribute('disabled','');
  quickSortAlgo.setAttribute('disabled','');

}
function enableAllButtons(){
  rangeInput.removeAttribute('disabled','')
  getNewArr.removeAttribute('disabled','');
  bubbleSortAlgo.removeAttribute('disabled','');
  mergeSortAlgo.removeAttribute('disabled','');
  insertionSortAlgo.removeAttribute('disabled','');
  quickSortAlgo.setAttribute('disabled','');
}