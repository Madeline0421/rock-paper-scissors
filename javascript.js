
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

const results = document.querySelector('.results');

function playRound(playerSelection) {
    let result =document.createElement('result');
    /*
    rock > scissors > paper > rock 
    */
    let computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() == "rock") { 
        switch (computerSelection) {
            case "Rock": 
                result.textContent = "You both tied using Rock!";
                results.append(result);
                break;
            case "Scissors": 
                gamesWonByUser++;
                result.textContent = "You win! Rock beats Scissors!";
                results.append(result);
                break;
            case "Paper":
                gamesWonByComputer++;
                result.textContent = "You lose! Paper beats Rock!";
                results.append(result);
                break;
        }
    }
    else if (playerSelection.toLowerCase() == "paper") { 
        switch (computerSelection) {
            case "Paper": 
                result.textContent = "You both tied using Paper!";
                results.append(result);
                break;
            case "Rock": 
                gamesWonByUser++;
                result.textContent = "You win! Paper beats Rock!";
                results.append(result);
                break;
            case "Scissors":
                gamesWonByComputer++;
                result.textContent = "You lose! Scissors beats Paper!";
                results.append(result);
                break;
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") { 
        switch (computerSelection) {
            case "Scissors": 
                result.textContent = "You both tied using Scissors!";
                results.append(result);
                break;
            case "Paper": 
                gamesWonByUser++;
                result.textContent = "You win! Scissors beats Paper!";
                results.append(result);
                break;
            case "Rock":
                gamesWonByComputer++;
                result.textContent = "You lose! Rock beats Scissors!";
                results.append(result);
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
let currentScoreLog = document.createElement('div');    



allButtons.forEach((button) => { 
    button.addEventListener('click', () => {
    const userChoice = button.textContent;
    playRound(userChoice, getComputerChoice);
    updateScore();
    });
});

function updateScore() { 
    if (gamesWonByUser == 5 || gamesWonByComputer == 5) {
        end();
    } else { 
        currentScoreLog.textContent = `Current Score: 
        User: ${gamesWonByUser}
        Computer: ${gamesWonByComputer}`;
        results.append(currentScoreLog);
    }
}

function end() { 
    let endScore = document.createElement('div');
    let endAnnouncement = document.createElement('div');
    endScore.textContent = `Game Over! 
    Final Score: 
    User: ${gamesWonByUser}
    Computer: ${gamesWonByComputer}`;

    if (gamesWonByUser > gamesWonByComputer) { 
        endAnnouncement.textContent = "You won!";
    } else {
        endAnnouncement.textContent = "You lost!";
    }

    results.append(endScore);
    results.append(endAnnouncement);

    allButtons.forEach((button) => {
        button.disabled = 'true';
    });


}