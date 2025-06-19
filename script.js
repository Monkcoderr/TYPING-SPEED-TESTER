
const themeBtn = document.getElementById("toggle-theme");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


const quoteText = document.getElementById("quote");
const inputBox = document.getElementById("inputBox");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");

let quote = "Practice makes perfect, so keep typing until it becomes second nature.";

let startTime, intervalId;

startBtn.addEventListener('click',()=>{
    quoteText.innerText = quote;
    inputBox.value = "";
    inputBox.disabled = false;
    inputBox.focus();

})
