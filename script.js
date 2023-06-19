// Variables to store the timer state
let timerInterval;
let totalTime = 0;
let remainingTime = 0;

// Elements
// const timerElement = document.getElementById('timer');
const hoursInput = document.getElementById('hours-input');
const minutesInput = document.getElementById('minutes-input');
const secondsInput = document.getElementById('seconds-input');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');
// hoursInput.value = "00"
//     minutesInput.value = "00"
//     secondsInput.value = "00"
// Start the timer
startButton.addEventListener('click', () => {
  console.log('start ')
  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  totalTime = hours * 3600 + minutes * 60 + seconds;
  remainingTime = totalTime;

  if (totalTime > 0) {
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
    timerInterval = setInterval(updateTimer, 1000);
  }
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
  totalTime = 0;
  remainingTime = 0;
//   timerElement.textContent = '00:00:00';
  hoursInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
});

// Update the timer display
function updateTimer() {
  remainingTime--;

  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    // timerElement.textContent = '00:00:00';
    startButton.disabled = false;
    pauseButton.disabled = true;
  } else {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    hoursInput.value = formatTime(hours)
    minutesInput.value = formatTime(minutes)
    secondsInput.value = formatTime(seconds)
    // timerElement.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
  }
}

// Format the time values with leading zeros
function formatTime(value) {
  return value < 10 ? '0' + value : value;
}

// let x = <section>ccccccc </section>
// console.log(x)
// console.log(typeof (x))