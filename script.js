// Varriables
const currentInput = document.querySelector(".sample");
const answerScreen = document.querySelector(".result");
const buttons = document.querySelectorAll(".button");
const eraseBtn = document.getElementById("erase");
const clearMemoryBtn = document.getElementById("clear-memory");
const clearCurrentBtn = document.getElementById("clear");
const evaluate = document.getElementById("evaluate");
const memory = document.querySelector(".memory");

// Display
let realTimeScreenValue = [];
let memoryValue = [];

// To clear current display
function memoryFulling() {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = `${realTimeScreenValue} <br> = ${answerScreen}`;
  memory.appendChild(paragraph);
}

function answerScreenFulling() {
  answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
}

clearCurrentBtn.addEventListener("click", () => {
  memoryFulling();
  realTimeScreenValue = [""];
  answerScreen.innerHTML = 0;
  currentInput.className = "sample none";
  answerScreen.className = "result active";
  clearCurrentBtn.className = "none";
  clearMemoryBtn.className = "fun-btn";
});

clearMemoryBtn.addEventListener("click", () => {
  memory.innerHTML = "";
});
