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
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log('Tie!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock') 
  ) {
    console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
  } else {
    console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
  }
}