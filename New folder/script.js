// Get the necessary elements
const timerTab = document.getElementById("timer");
const stopwatchTab = document.getElementById("stopwatch");
const timerSection = document.getElementById("timerSection");
const stopwatchSection = document.getElementById("stopwatchSection");
const timerInput = document.getElementById("timerInput");
const playButton = document.getElementById("playButton");
const resetButton = document.getElementById("resetButton");

// Set initial state
let timerActive = false;
let timerInterval;
let time = 0;

// Event listeners
timerTab.addEventListener("click", switchToTimer);
stopwatchTab.addEventListener("click", switchToStopwatch);
playButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);

// Switch to the Timer section
function switchToTimer() {
  timerTab.classList.add("activeTab");
  stopwatchTab.classList.remove("activeTab");
  timerSection.style.display = "block";
  stopwatchSection.style.display = "none";
}

// Switch to the Stopwatch section
function switchToStopwatch() {
  timerTab.classList.remove("activeTab");
  stopwatchTab.classList.add("activeTab");
  timerSection.style.display = "none";
  stopwatchSection.style.display = "block";
}

// Toggle the timer (Start/Pause)
function toggleTimer() {
  if (!timerActive) {
    startTimer();
  } else {
    pauseTimer();
  }
}

// Start the timer
function startTimer() {
  const timeParts = timerInput.value.split(":");
  const hours = parseInt(timeParts[0]) || 0;
  const minutes = parseInt(timeParts[1]) || 0;
  const seconds = parseInt(timeParts[2]) || 0;

  time = hours * 3600 + minutes * 60 + seconds;

  if (time > 0) {
    timerActive = true;
    playButton.textContent = "Pause";
    timerInterval = setInterval(updateTimer, 1000);
  }
}

// Pause the timer
function pauseTimer() {
  timerActive = false;
  playButton.textContent = "Resume";
  clearInterval(timerInterval);
}

// Update the timer display
function updateTimer() {
  if (time <= 0) {
    clearInterval(timerInterval);
    timerActive = false;
    playButton.textContent = "Start";
    return;
  }

  time--;
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  timerInput.value = `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
}

// Reset the timer
function resetTimer() {
  pauseTimer();
  timerInput.value = "";
}

// Helper function to pad single-digit time values with leading zeros
function padTime(time) {
  return time.toString().padStart(2, "0");
}
