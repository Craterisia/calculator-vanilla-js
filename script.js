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

// Fulling memory display
function memoryFulling() {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = `${sampleString} <br> = ${answerScreen}`;
  memory.prepend(paragraph);
}

// Clearing current screen and changing clear/clear all button
clearCurrentBtn.addEventListener("click", () => {
  realTimeScreenValue = [""];
  answerScreen.innerHTML = 0;
  sample.className = "sample none";
  answerScreen.className = "result active";
  clearCurrentBtn.className = "none";
  clearMemoryBtn.className = "fun-btn";
});

// Clearing all memory
clearMemoryBtn.addEventListener("click", () => {
  memory.innerHTML = "";
});

// Getting value of any button clicked and displaying it to the screen
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // when clicked button is not erased button
    if (btn.id !== "erase") {
      console.log("bylo kliknuto");
      // To display value on btn press
      realTimeScreenValue.push(btn.value);
      sample.innerHTML = realTimeScreenValue.join("");

      // To evaluate answer in real time
      if (btn.classList.contains("num-btn")) {
        clearCurrentBtn.className = "fun-btn";
        clearMemoryBtn.className = "none";
        answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
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
      //   memoryFulling();
    }

    // To prevent undefined error in screen
    if (typeof eval(realTimeScreenValue.join("")) == "undefined") {
      answerScreen.innerHTML = 0;
    }
  });
});
