let timer;
let timerRunning = false;
let startTime;
let elapsedTime = 0;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

function formatTime(ms) {
  const date = new Date(ms);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTimeDisplay, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
  }
}

function pauseTimer() {
  if (timerRunning) {
    timerRunning = false;
    clearInterval(timer);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }
}

function resetTimer() {
  clearInterval(timer);
  timerRunning = false;
  elapsedTime = 0;
  updateTimeDisplay();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
}

function updateTimeDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
