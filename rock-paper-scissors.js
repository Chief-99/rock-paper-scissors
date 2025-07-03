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

console.log(getComputerChoice());