let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0


function isGameFinished(roundNumber){
    return roundNumber > 4

}


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



function playRound(computerChoice, humanChoice) {

    if (computerChoice === "Rock") {
        if (humanChoice === "Paper") {
            humanScore++;
            return "Human"
        } else if (humanChoice === "Scissors") {
            computerScore++;
            return "Computer"
        } else {
            return "Tie";
        }
    } 
    else if (computerChoice === "Paper") {
        if (humanChoice === "Rock") {
            computerScore++;
            return "Computer";
        } else if (humanChoice === "Scissors") {
            humanScore++;
            return "Human";
        } else {
            return "Tie";
        }
    } 
    else {
        if (humanChoice === "Rock") {
            humanScore++;
            return "Human";
        } else if (humanChoice === "Paper") {
            computerScore++;
            return "Computer";
        } else {
            return "Tie";
        }
    }
}


function rockHandler(event){
    if(!isGameFinished(++numberOfRounds))
    {
        updateRoundNumber(numberOfRounds)
        winner = playRound(
            getComputerChoice(),
            "Rock"
        )
        updateRoundWinner(winner)


    }
    else{
        alert(
            getWinner()
        )
    }
   

}

function scissorsHandler(event){
    
    if(!isGameFinished(++numberOfRounds))
    {
        updateRoundNumber(numberOfRounds)
        winner = playRound(
            getComputerChoice(),
            "Scissors"
        )
        updateRoundWinner(winner)


    }
    else{
        alert(
        getWinner()
    )

    }
    

}

function paperHandler(event){
    if(!isGameFinished(++numberOfRounds))
    {
        updateRoundNumber(numberOfRounds)
        winner = playRound(
            getComputerChoice(),
            "Paper"
        )
        updateRoundWinner(winner)


    }
    else{
        alert(
        getWinner()
    )

    }
    

}

let paperButton = document.querySelector("#paper")
let rockButton = document.querySelector("#rock")
let scissorsButton = document.querySelector("#scissors")

paperButton.addEventListener("click", paperHandler)
rockButton.addEventListener("click",  rockHandler)
scissorsButton.addEventListener("click", scissorsHandler)

function updateRoundNumber(roundNumber){
    let roundParaElement = document.querySelector("#round")
    roundParaElement.textContent = "Round" + " " + roundNumber

}


function updateRoundWinner(winner){
    winnerParagraph = document.querySelector("#wonby");
    winnerParagraph.textContent = "Won by" + " " + winner

}


