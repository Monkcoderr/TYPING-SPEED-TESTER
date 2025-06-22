
const themeBtn = document.getElementById("toggle-theme");

// 🔁 Load theme from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// 🌗 Toggle dark mode + save to localStorage
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // save current theme
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});



const quoteText = document.getElementById("quote");
const inputBox = document.getElementById("inputBox");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");
const c = document.getElementById('c');

let quote = "Practice makes perfect, so keep typing until it becomes second nature.";
let startTime, intervalId,tlid;
let tl = 15;




// Start Test
startBtn.addEventListener("click", () => {
  quoteText.innerText = quote;
  inputBox.value = "";
  inputBox.disabled = false;
  inputBox.focus();

  timerDisplay.innerText = "0";
  wpmDisplay.innerText = "0";
  accuracyDisplay.innerText = "0";
tl = 15;
c.innerText = tl;
clearInterval(tlid);
  clearInterval(intervalId);
tlid = setInterval(countdown,1000)

  startTime = new Date().getTime();
  intervalId = setInterval(updateTimer, 1000);
});

function countdown(){
  tl = tl-1;
  c.innerText = tl;

  if (tl ===0){
    clearInterval(tlid);
    inputBox.disabled= true;
    clearInterval(intervalId)


  }
}

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