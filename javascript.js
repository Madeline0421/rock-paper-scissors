
/*
Goal: Play a 5 round game of Rock Paper Scissors against computer
Breaking down goal: 
[LOOP 5 TIMES]
- Randomly choose value between rock/paper/scissors for the computer's choice
- Ask user for choice for rock/paper/scissors (input)
- Compare user vs computer's choice, announce result
*/
choices = Array("Rock", "Paper", "Scissors");

function getComputerChoice() {     
    return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
    return prompt("Choose between Rock, Paper, or Scissors.");
}



