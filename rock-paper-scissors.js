// Create a variable for the computer choice
// Randomly assign either 'rock', 'paper' or 'scissors' to computerChoice
// Get user's choice from a prompt
// If userChoice beats computerChoice, display victory message
// If computerChoice beats userChoice, display defeat message

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let number = Math.random();
  let computerChoice = '';
  if (number >= 0 && number < 1 / 3) {
    computerChoice = 'rock';
  } else if (number >= 1 / 3 && number < 2 / 3) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  return computerChoice;
}

function getHumanChoice(humanChoice) {
  humanChoice = prompt('Please choose rock, paper or scissors:');

  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    return humanChoice;
  } else {
    alert('Please enter a valid choice');    
  }
}

