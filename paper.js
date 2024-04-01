const choices = [`rock`, `paper`, `scissors`];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerscore = 0;
let computerscore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice == computerChoice) {
    result = "It's a tie";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win" : "You loose";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win" : "You loose";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You Win" : "You loose";
        break;
    }
  }
  playerDisplay.textContent = `Player : ${playerChoice}`;
  computerDisplay.textContent = `Computer : ${computerChoice}`;
  resultDisplay.textContent = result;
  resultDisplay.classList.remove("win", "loose");

  switch (result) {
    case "You Win":
      playerscore++;
      resultDisplay.classList.add("win");
      playerScore.textContent = playerscore;
      break;
    case "You loose":
      computerscore++;
      resultDisplay.classList.add("loose");
      computerScore.textContent = computerscore;
      break;
  }
}
playGame();
