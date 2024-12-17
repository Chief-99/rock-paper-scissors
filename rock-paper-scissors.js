// Create a variable for the computer choice
// Randomly assign either 'rock', 'paper' or 'scissors' to computerChoice
// Get user's choice from a prompt
// If userChoice beats computerChoice, display victory message
// If computerChoice beats userChoice, display defeat message

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

console.log(getComputerChoice());