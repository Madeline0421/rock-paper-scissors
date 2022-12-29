
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

function playRound(playerSelection) {
    /*
    rock > scissors > paper > rock 
    */
    let computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() == "rock") { 
        switch (computerSelection) {
            case "Rock": 
                console.log("You both tied using Rock!");
                break;
            case "Scissors": 
                gamesWonByUser++;
                console.log("You win! Rock beats Scissors!");
                break;
            case "Paper":
                gamesWonByComputer++;
                console.log("You lose! Paper beats Rock!");
                break;
        }
    }
    else if (playerSelection.toLowerCase() == "paper") { 
        switch (computerSelection) {
            case "Paper": 
                console.log("You both tied using Paper!");
                break;
            case "Rock": 
                gamesWonByUser++;
                console.log("You win! Paper beats Rock!");
                break;
            case "Scissors":
                gamesWonByComputer++;
                console.log("You lose! Scissors beats Paper!");
                break;
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") { 
        switch (computerSelection) {
            case "Scissors": 
                console.log("You both tied using Scissors!");
                break;
            case "Paper": 
                gamesWonByUser++;
                console.log("You win! Scissors beats Paper!");
                break;
            case "Rock":
                gamesWonByComputer++;
                console.log("You lose! Rock beats Scissors!");
                break;
        }
    }
}

function game() { 
    console.log(playRound(getUserChoice(), getComputerChoice()));
    console.log(`Current Score: 
    User: ${gamesWonByUser}
    Computer: ${gamesWonByComputer}`);
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


const allButtons = document.querySelectorAll('.choice');

allButtons.forEach((button) => { 
    button.addEventListener('click', () => {
    const userChoice = button.textContent;
    playRound(userChoice, getComputerChoice);
    console.log(`Current Score: 
    User: ${gamesWonByUser}
    Computer: ${gamesWonByComputer}`);
    });
});
