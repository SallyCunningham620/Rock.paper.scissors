console.log("Hello World!");

function getComputerChoice() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min +1) + min);
    }
    let randomComputerChoice = getRandomInt(1, 3);
    function computerChoice() {
        if (randomComputerChoice == 1) {
            return "rock";
        } else if (randomComputerChoice == 2) {
            return "paper";
        } else if (randomComputerChoice == 3) {
            return "scissors"
        } else "An error occured"
    }
    return computerChoice();
}

console.log(getComputerChoice());
