let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === 'rock') {
        if (computerChoice.toLowerCase() === 'rock') {
            return 'Tie game!';
        } else if(computerChoice.toLowerCase() === 'paper') {
            return 'You lose! Paper beats rock.'
        } else {
            return 'You win! Rock beats scissors.';
        }
    } else if (humanChoice.toLowerCase() === 'paper') {
        if (computerChoice.toLowerCase() === 'rock') {
            return 'You win! Paper beats rock.';
        } else if(computerChoice.toLowerCase() === 'paper') {
            return 'Tie game!'
        } else {
            return 'You lose! Scissors beats paper.';
        }
    } else {
        if (computerChoice.toLowerCase() === 'rock') {
            return 'You lose! Rock beats scissors.';
        } else if(computerChoice.toLowerCase() === 'paper') {
            return 'You win! Scissors beats paper.';
        } else {
            return 'Tie game!';
        }
    }
}