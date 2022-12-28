
/*
Goal: Play a 5 round game of Rock Paper Scissors against computer
Breaking down goal: 
[LOOP 5 TIMES]
- Randomly choose value between rock/paper/scissors for the computer's choice
- Ask user for choice for rock/paper/scissors (input)
- Compare user vs computer's choice, announce result
*/
choices = Array("Rock", "Paper", "Scissors");
let gamesWonByUser = 0;
let gamesWonByComputer = 0;

function getComputerChoice() {     
    return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
    return prompt("Choose between Rock, Paper, or Scissors.");
}

function playRound(playerSelection, computerSelection) {
    /*
    rock > scissors > paper > rock 
    */

    if (playerSelection.toLowerCase() == "rock") { 
        switch (computerSelection) {
            case "Rock": 
                return "You both tied using Rock!";
            case "Scissors": 
                gamesWonByUser++;
                return "You win! Rock beats Scissors!";
            case "Paper":
                gamesWonByComputer++;
                return "You lose! Paper beats Rock!";
        }
    }
    else if (playerSelection.toLowerCase() == "paper") { 
        switch (computerSelection) {
            case "Paper": 
                return "You both tied using Paper!";
            case "Rock": 
                gamesWonByUser++;
                return "You win! Paper beats Rock!";
            case "Scissors":
                gamesWonByComputer++;
                return "You lose! Scissors beats Paper!";
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") { 
        switch (computerSelection) {
            case "Scissors": 
                return "You both tied using Scissors!";
            case "Paper": 
                gamesWonByUser++;
                return "You win! Scissors beats Paper!";
            case "Rock":
                gamesWonByComputer++;
                return "You lose! Rock beats Scissors!";
        }
    }
}

function game() { 
    for (let i = 0; i < 5; i++) { 
        console.log(playRound(getUserChoice(), getComputerChoice()));
        console.log(`Current Score: 
        User: ${gamesWonByUser}
        Computer: ${gamesWonByComputer}`);
    }
    console.log(`Final Score: 
    User: ${gamesWonByUser}
    Computer: ${gamesWonByComputer}`);
    if (gamesWonByUser > gamesWonByComputer) { 
        return "You won!";
    } else if (gamesWonByUser < gamesWonByComputer) {
        return "You lost!";
    } else { 
        return "You tied.";
    }
}

console.log(game());    