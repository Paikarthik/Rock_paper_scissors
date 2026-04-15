let humanScore = 0
let computerScore = 0

function getComputerChoice(){

    let random_number = Math.random();

    if (random_number <=0.33){
        return "Rock"
    }

    else if(random_number>0.33 && random_number<=0.66){
        return "Paper"
    }

    else{
        return "Scissors"
    }

}



function getHumanChoice(){
    let humanInput = parseInt(prompt("1.Rock, 2.Paper, 3.Scissors. Please enter your choice"));

    if (humanInput == 1){
        return "Rock"
    }
    else if(humanInput == 2){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}


