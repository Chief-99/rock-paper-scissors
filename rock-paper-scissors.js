




function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {
        playRound();

    } 

    function playRound() {
        let human = String(getHumanChoice()).toLowerCase();
        let computer = String(getComputerChoice()).toLowerCase();

        if (human === 'rock') {
            if (computer === 'rock') {
                console.log('Tie game!');
            } else if (computer === 'paper') {
                computerScore += 1;
                console.log('You lose! Paper beats rock.');
            } else if (computer === 'scissors') {
                humanScore += 1;
                console.log('You win! Rock beats scissors.');
            }
        } else if (human === 'paper') {
            if (computer === 'rock') {
                humanScore += 1;
                console.log('You win! Paper beats rock.');
            } else if (computer === 'paper') {
                console.log('Tie game!');
            } else if (computer === 'scissors') {
                computerScore += 1;
                console.log('You lose! Scissors beats paper.');
            }
        } else if (human === 'scissors') {
            if (computer === 'rock') {
                computerScore += 1;
                console.log('You lose! Rock beats scissors.');
            } else if (computer === 'paper') {
                humanScore += 1;
                console.log('You win! Scissors beats paper.');
            } else if (computer === 'scissors') {
                console.log('Tie game!');
            }
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
}

// playGame();