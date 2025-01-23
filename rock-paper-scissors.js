
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
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    alert('Tie!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock') 
  ) {
    alert(`You win, ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  } else {
    alert(`You lose, ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  }
}



function playGame() {
  let message = '';

  console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
  
  if (humanScore === computerScore) {
    message = 'Tie! So close' 
  } else if (humanScore > computerScore) {
    message = `You win! Well done`;
  } else {
    message = `You lose! Better luck next time`;
  }

  return console.log(message);
}

