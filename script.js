// Variables to store the timer state
let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Elements
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');

// Start the timer
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
  timerInterval = setInterval(updateTimer, 1000);
});

// Pause the timer
pauseButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  startButton.disabled = false;
  pauseButton.disabled = true;
});

// Reset the timer
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  startButton.disabled = false;
  pauseButton.disabled = true;
  resetButton.disabled = true;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerElement.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
});

// Update the timer display
function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  timerElement.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

// Format the time values with leading zeros
function formatTime(value) {
  return value < 10 ? '0' + value : value;
}
