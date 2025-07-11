let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const display = document.querySelector('#display');

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);




function playRound(event) {
    let human = event.target.id;
    let computer = String(getComputerChoice()).toLowerCase();

    if (human === 'rock') {
        if (computer === 'rock') {
            display.textContent = `Tie game! \n\nPlayer: ${humanScore} \nComputer: ${computerScore}`;
        } else if (computer === 'paper') {
            computerScore += 1;
            display.textContent = `You lose! Paper beats rock. \n\nPlayer: ${humanScore} \nComputer: ${computerScore}`;
        } else if (computer === 'scissors') {
            humanScore += 1;
            display.textContent = `You win! Rock beats scissors. \n\nPlayer: ${humanScore} \nComputer: ${computerScore}`;
        }
    } else if (human === 'paper') {
        if (computer === 'rock') {
            humanScore += 1;
            display.textContent = `You win paper beats rock. \n\nPlayer: ${humanScore} \nComputer: ${computerScore}`;
        } else if (computer === 'paper') {
            display.textContent = `Tie game! \n\nPlayer: ${humanScore} \nComputer: ${computerScore}`;
        } else if (computer === 'scissors') {
            computerScore += 1;
            display.textContent = `You lose! Scissors beats paper. \n\nPlayer: ${humanScore} \nComputer: ${computerScore}`;
        }
    } else if (human === 'scissors') {
        if (computer === 'rock') {
            computerScore += 1;
            display.textContent = `You lose! Rock beats scissors. \n\nPlayer: ${humanScore} \nComputer: ${computerScore}`;
        } else if (computer === 'paper') {
            humanScore += 1;
            display.textContent = `You win! Scissors beat paper. \n\nPlayer: ${humanScore} \nComputer: ${computerScore}`;
        } else if (computer === 'scissors') {
            display.textContent = `Tie game! \n\nPlayer: ${humanScore} \nComputer: ${computerScore}`;
        }
    }


    function getComputerChoice() {
        let choiceNumber = Math.random();

        if (choiceNumber <= 0.3333) {
            return 'rock';
        } else if (choiceNumber > 0.3333 & choiceNumber <= 0.6666) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    function getHumanChoice() {
        let choice = prompt('Please enter your choice', '');
        return choice;
    }

    if (humanScore === 5) {
        console.log('Congratulations, you win the game!!');
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        console.log('You lose, better luck next time!');
        humanScore = 0;
        computerScore = 0;
    }
}