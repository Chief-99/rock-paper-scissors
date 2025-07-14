let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const display = document.querySelector('#score-display');

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

display.textContent = `${humanScore} : ${computerScore}`


function playRound(event) {
    let human = event.target.id;
    let computer = String(getComputerChoice()).toLowerCase();
    let srcHuman = '';
    let srcComputer = '';

    if (human === 'rock') {
        if (computer === 'rock') { // tie game
            display.textContent = `${humanScore} : ${computerScore} \n\n${displayMessage(2)}`;
        } else if (computer === 'paper') { // loss
            computerScore += 1;
            display.textContent = `${humanScore} : ${computerScore} \n\n${displayMessage(0)}`;;
        } else if (computer === 'scissors') { // win
            humanScore += 1;
            display.textContent = `${humanScore} : ${computerScore} \n\n${displayMessage(1)}`;
        }
    } else if (human === 'paper') {
        if (computer === 'rock') { // win
            humanScore += 1;
            display.textContent = `${humanScore} : ${computerScore} \n\n${displayMessage(1)}`;
        } else if (computer === 'paper') { // tie game
            display.textContent = `${humanScore} : ${computerScore} \n\n${displayMessage(2)}`;
        } else if (computer === 'scissors') { // loss
            computerScore += 1;
            display.textContent = `${humanScore} : ${computerScore} \n\n${displayMessage(0)}`;
        }
    } else if (human === 'scissors') {
        if (computer === 'rock') { // loss
            computerScore += 1;
            display.textContent = `${humanScore} : ${computerScore} \n\n${displayMessage(0)}`;
        } else if (computer === 'paper') { // win
            humanScore += 1;
            display.textContent = `${humanScore} : ${computerScore} \n\n${displayMessage(1)}`;
        } else if (computer === 'scissors') { // tie
            display.textContent = `${humanScore} : ${computerScore} \n\n${displayMessage(2)}`;
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

    function displayMessage(value) {
        if (value === 0) {
            return `You lose - ${computer} beats ${human}!`;
        } else if (value === 1) {
            return `You win - ${human} beats ${computer}!`;
        } else if (value === 2) {
            return 'Tie game!';
        }
    }

    function humanHands(choice) {
        return `images/human/${choice}-human.png`;
    }

    function commputerHands(choice) {
        return `images/computer/${choice}-computer.png`;
    }


// result message
    if (humanScore === 5) {
        display.append('\n\nCongratulations, you win the game!!');
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        display.append('\n\nYou lose, better luck next time!');
        humanScore = 0;
        computerScore = 0;
    }
}