
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

// Start Test
startBtn.addEventListener("click", () => {
  quoteText.innerText = quote;
  inputBox.value = "";
  inputBox.disabled = false;
  inputBox.focus();

  timerDisplay.innerText = "0";
  wpmDisplay.innerText = "0";
  accuracyDisplay.innerText = "0";

  clearInterval(intervalId);
  startTime = new Date().getTime();
  intervalId = setInterval(updateTimer, 1000);
});

// Update timer every second
function updateTimer() {
  const currentTime = new Date().getTime();
  const seconds = Math.floor((currentTime - startTime) / 1000);
  timerDisplay.innerText = seconds;
  calculateStats();

  // ⏱ Check if user finished typing correctly
  if (inputBox.value === quote) {
    clearInterval(intervalId); // stop timer
    inputBox.disabled = true;
    alert("🎉 Test Complete!");
  }
}

// Calculate WPM and Accuracy
function calculateStats() {
  const typed = inputBox.value;
  const wordsTyped = typed.trim().split(/\s+/).filter(Boolean).length;
  const seconds = parseInt(timerDisplay.innerText);
  const minutes = seconds / 60;

  // WPM = words per minute
  const wpm = seconds > 0 ? Math.round(wordsTyped / minutes) : 0;
  wpmDisplay.innerText = wpm;

  // Accuracy
  let correctChars = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === quote[i]) {
      correctChars++;
    }
  }
  const accuracy = typed.length > 0
    ? Math.round((correctChars / typed.length) * 100)
    : 0;
  accuracyDisplay.innerText = accuracy;
}
 inputBox.addEventListener('paste',(e)=>{
alert('don,t try to paste')
  e.preventDefault();


 })