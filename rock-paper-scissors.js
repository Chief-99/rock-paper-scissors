
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
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if (human === 'rock') {
        if (computer === 'rock') {
            return 'Tie game!';
        } else if(computer === 'paper') {
            computerScore += 1;
            return 'You lose! Paper beats rock.'
        } else if (computer === 'scissors') {
            humanScore += 1;
            return 'You win! Rock beats scissors.';
        }
    } else if (human === 'paper') {
        if (computer === 'rock') {
            humanScore += 1;
            return 'You win! Paper beats rock.';
        } else if(computer === 'paper') {
            return 'Tie game!'
        } else if (computer === 'scissors') {
            computerScore += 1;
            return 'You lose! Scissors beats paper.';
        }
    } else if (human === 'scissors'){
        if (computer === 'rock') {
            computerScore += 1;
            return 'You lose! Rock beats scissors.';
        } else if(computer === 'paper') {
            humanScore += 1;
            return 'You win! Scissors beats paper.';
        } else if (computer === 'scissors') {
            return 'Tie game!';
        }
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
}