// * Score variables
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

// * User choice function
function getHumanChoice(humanChoice) {
  humanChoice = prompt('Please choose rock, paper or scissors:');
  return humanChoice;
}

// * Play round function 
function playRound(humanChoice, computerChoice) {
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

// * Button event listeners
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {playRound('rock')});
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

// * Full game function
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