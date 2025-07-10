const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');



function playRound() {
    let human = String(getHumanChoice()).toLowerCase();
    let computer = String(getComputerChoice()).toLowerCase();

    if (human === 'rock') {
        if (computer === 'rock') {
            console.log(
                `Tie game!
                    
                    Player: ${humanScore}
                    Computer: ${computerScore}`
            );
        } else if (computer === 'paper') {
            computerScore += 1;
            console.log(
                `You lose! Paper beats rock.
                    
                    Player: ${humanScore}
                    Computer: ${computerScore}`
            );
        } else if (computer === 'scissors') {
            humanScore += 1;
            console.log(
                `You win! Rock beats scissors.
                    
                    Player: ${humanScore}
                    Computer: ${computerScore}`
            );
        }
    } else if (human === 'paper') {
        if (computer === 'rock') {
            humanScore += 1;
            console.log(
                `You win! Paper beats rock.
                    
                    Player: ${humanScore}
                    Computer: ${computerScore}`
            );
        } else if (computer === 'paper') {
            console.log(
                `Tie game!
                    
                    Player: ${humanScore}
                    Computer: ${computerScore}`
            );
        } else if (computer === 'scissors') {
            computerScore += 1;
            console.log(
                `You lose! Scissors beats paper.
                    
                    Player: ${humanScore}
                    Computer: ${computerScore}`
            );
        }
    } else if (human === 'scissors') {
        if (computer === 'rock') {
            computerScore += 1;
            console.log(
                `You lose! Rock beats scissors.
                    
                    Player: ${humanScore}
                    Computer: ${computerScore}`
            );
        } else if (computer === 'paper') {
            humanScore += 1;
            console.log(
                `You win! Scissors beats paper.
                    
                    Player: ${humanScore}
                    Computer: ${computerScore}`
            );
        } else if (computer === 'scissors') {
            console.log(
                `Tie game!
                    
                    Player: ${humanScore}
                    Computer: ${computerScore}`
            );
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
        console.log('Congratulations, you win the game!!')
    } else if (computerScore === 5) {
        console.log('You lose, better luck next time!');
    }
}

// playGame();