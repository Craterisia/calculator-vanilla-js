// Varriables
let sample = document.querySelector(".sample");
let answerScreen = document.querySelector(".result");
let buttons = document.querySelectorAll("button");
let eraseBtn = document.getElementById("erase");
let clearMemoryBtn = document.getElementById("clear-memory");
let clearCurrentBtn = document.getElementById("clear");
let evaluate = document.getElementById("evaluate");
let memory = document.querySelector(".memory");

// Display
let realTimeScreenValue = [];
let calculated = false;

// Fulling memory display
function memoryFulling() {
  if (typeof eval(realTimeScreenValue.join("")) != "undefined") {
    const paragraph = document.createElement("p");
    let sampleValue = realTimeScreenValue.join("");
    let resultValue = eval(sampleValue);
    let resultMemory = `${sampleValue} <br> = ${resultValue}`;
    paragraph.innerHTML = resultMemory;
    memory.prepend(paragraph);
  }
}

// Clearing current screen and changing clear/clear all button
clearCurrentBtn.addEventListener("click", () => {
  realTimeScreenValue = [""];
  answerScreen.innerHTML = 0;
  sample.className = "invisible";
  answerScreen.className = "result active";
  clearCurrentBtn.className = "none";
  clearMemoryBtn.className = "clear";
  memoryFulling();
});

// Clearing all memory
clearMemoryBtn.addEventListener("click", () => {
  memory.innerHTML = "";
  sample.className = "invisible";
  answerScreen.className = "result active";
});

// Getting value of any button clicked and displaying it to the screen
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Deleting last sesion
    if (calculated === true) {
      realTimeScreenValue = [""];
      answerScreen.innerHTML = answer;
      calculated = false;
    }
    // when clicked button is not erased button
    if (
      (btn.classList.contains("num-btn") ||
        btn.classList.contains("fun-btn")) &&
      btn.id !== "erase"
    ) {
      // To display value on btn press
      realTimeScreenValue.push(btn.value);
      sample.innerHTML = realTimeScreenValue.join("");
      sample.className = "sample active";
      answerScreen.className = "result nonactive";

      // To evaluate answer in real time
      if (btn.classList.contains("num-btn")) {
        clearCurrentBtn.className = "clear";
        clearMemoryBtn.className = "none";
        answerScreen.innerHTML = "= " + eval(realTimeScreenValue.join(""));
      }
    }

    // When erase button is clicked
    if (btn.id.match("erase")) {
      realTimeScreenValue.pop();
      sample.innerHTML = realTimeScreenValue.join("");
      answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
    }

    // When clicked button is evaluate button
    if (btn.id.match("evaluate")) {
      sample.className = "sample nonactive";
      answerScreen.className = "result active";
      memoryFulling();
      calculated = true;
      return (answer = eval(realTimeScreenValue.join("")));
    }

    // To prevent undefined error in screen
    if (typeof eval(realTimeScreenValue.join("")) == "undefined") {
      answerScreen.innerHTML = 0;
    }
  });
});
