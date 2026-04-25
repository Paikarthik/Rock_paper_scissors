let humanScore = 0;
let computerScore = 0;

function getWinner() {
    if (computerScore > humanScore) {
        return "Computer wins";
    } else if (computerScore === humanScore) {
        return "Tie";
    } else {
        return "You win";
    }
}

function getComputerChoice() {
    let random_number = Math.random();

    if (random_number <= 0.33) return "Rock";
    else if (random_number <= 0.66) return "Paper";
    else return "Scissors";
}

function getHumanChoice() {
    let humanInput = parseInt(prompt("1.Rock, 2.Paper, 3.Scissors"));

    if (humanInput === 1) return "Rock";
    else if (humanInput === 2) return "Paper";
    else return "Scissors";
}

function playRound(computerChoice, humanChoice) {

    if (computerChoice === "Rock") {
        if (humanChoice === "Paper") {
            humanScore++;
            console.log("Paper beats Rock, you win");
        } else if (humanChoice === "Scissors") {
            computerScore++;
            console.log("Rock beats Scissors, you lose");
        } else {
            console.log("Tie");
        }
    } 
    else if (computerChoice === "Paper") {
        if (humanChoice === "Rock") {
            computerScore++;
            console.log("Paper beats Rock, you lose");
        } else if (humanChoice === "Scissors") {
            humanScore++;
            console.log("Scissors beats Paper, you win");
        } else {
            console.log("Tie");
        }
    } 
    else {
        if (humanChoice === "Rock") {
            humanScore++;
            console.log("Rock beats Scissors, you win");
        } else if (humanChoice === "Paper") {
            computerScore++;
            console.log("Scissors beats Paper, you lose");
        } else {
            console.log("Tie");
        }
    }
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         let computerChoice = getComputerChoice();
//         let humanChoice = getHumanChoice();

//         playRound(computerChoice, humanChoice);
//     }

//     console.log(getWinner());
// }

// playGame();

function rockHandler(event){
    let botChoice = getComputerChoice();
    playRound(botChoice, "Rock")
    

}

function scissorsHandler(event){
    let botChoice = getComputerChoice();
    playRound(botChoice, "Scissors")

}

function paperHandler(event){
    let botChoice = getComputerChoice();
    playRound(botChoice, "Paper")

}

let paperButton = document.querySelector("#paper")
let rockButton = document.querySelector("#rock")
let scissorsButton = document.querySelector("#scissors")

paperButton.addEventListener("click", paperHandler)
rockButton.addEventListener("click",  rockHandler)
scissorsButton.addEventListener("click", scissorsHandler)

