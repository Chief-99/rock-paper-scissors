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
  computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    console.log('Tie!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock') 
  ) {
    console.log(`
      Computer chose ${computerChoice}.
      You win, ${humanChoice} beats ${computerChoice}!
      `);
    humanScore++;
  } else {
    console.log(`
      Computer chose ${computerChoice}.
      You lose, ${computerChoice} beats ${humanChoice}!
      `);
    computerScore++;
  }

  runningScore = `
  User: ${humanScore}
  Computer: ${computerScore}`;
  results.textContent = runningScore;

  switch (5) {
    case computerScore: 
    computerScore = 0;
    humanScore = 0;
    resultsMessage.textContent = `The computer won five rounds. You lost the game, better luck next time!`;
    results.appendChild(resultsMessage);
      break;
    case humanScore: 
      computerScore = 0;
      humanScore = 0;
      resultsMessage.textContent = `You won five rounds. You won the game, well done!`;
      results.appendChild(resultsMessage);
      break;
  }
  
}

// * Button event listeners
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {playRound('rock')});
paper.addEventListener('click', () => {playRound('paper')});
scissors.addEventListener('click', () => {playRound('scissors')});


// * Results
let results = document.querySelector('#results');
let runningScore = '';
let resultsMessage = document.querySelector('#results-message');