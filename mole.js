// Selecting necessary elements from the DOM
const squares = document.querySelectorAll(".square");
const timeLeft = document.getElementById("timeleft");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("highscore");

// Initializing variables
let result = 0;
let hitPosition;
let currentTime = 30;
let timerId = null;
let highScore = localStorage.getItem("highScore") || 0;

// Function to randomly place the mole in one of the squares
function randomSquare() {
  // Remove mole from all squares
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  // Randomly select a square to place the mole
  let randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
}

// Event listener for clicking on squares to whack the mole
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      // Increment score if mole is whacked
      result++;
      scoreDisplay.textContent = result;
      // Update high score if necessary
      if (result > highScore) {
        highScore = result;
        highScoreDisplay.textContent = highScore;
        localStorage.setItem("highScore", highScore);
      }
      // Assign classes based on the score
      if (result > 30) {
        scoreDisplay.classList.remove("fair", "bad");
        scoreDisplay.classList.add("great");
      } else if (result > 15) {
        scoreDisplay.classList.remove("bad", "great");
        scoreDisplay.classList.add("fair");
      } else {
        scoreDisplay.classList.remove("fair", "great");
        scoreDisplay.classList.add("bad");
      }
    }
  });
});

// Function to move the mole at intervals
function moveMole() {
  timerId = setInterval(randomSquare, 500);
}
moveMole();

// Function to update timer and handle game over
let countDownTimerId = setInterval(countDown, 1000);
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime < 10) {
    timeLeft.classList.remove("text-success");
    timeLeft.classList.add("bad");
  }
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    if (result > highScore) {
      alert(`The high score is ${highScore}`);
    }
    alert(`GAME OVER! Final score is ${result}`);
  }
}
