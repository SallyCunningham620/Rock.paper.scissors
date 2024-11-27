let playerScore = 0;
let computerScore = 0;
const roundsToWin = 5;

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerScore");
const computerDisplaye = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");


function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}
function playGame(playerChoice){
    const computerChoice = getComputerChoice();
    let result = "";
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE"
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        result = "You win!";
        playerScore++;
      } else {
        result = "You lose!";
        computerScore++;
      }

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("result").textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;


    checkWinner();
}



function checkWinner() {
    if (playerScore === roundsToWin) {
        alert("Player wins the game!");
        resetGame();
    } else if (computerScore === roundsToWin) {
        alert("Computer wins the game!");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;
    document.getElementById("result").textContent = "";
}