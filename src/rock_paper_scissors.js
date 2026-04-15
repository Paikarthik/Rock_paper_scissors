

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



