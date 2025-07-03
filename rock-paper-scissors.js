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
    let humanChoice = prompt('Please enter your choice', '');

    return humanChoice;
}
