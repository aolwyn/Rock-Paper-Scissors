const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resetButton = document.getElementById('reset-button');
const playAgainButton = document.getElementById('play-again-button');
const responseDiv = document.querySelector('.response');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

/* Note to self for the below:
The parentheses () are omitted when the function is being passed as a reference to the event listener. 
This is common in JavaScript when attaching functions to event listeners. The functions resetGame 
and playAgain will be invoked when the corresponding buttons are clicked.
*/
resetButton.addEventListener('click', resetGame); 
// playAgainButton.addEventListener('click', playAgain);

//start values for the scores
let playerScore = 0;
let computerScore = 0;

// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      //player wins
        playerScore++;
        responseDiv.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
      //tie
        responseDiv.innerHTML = "It's a Tie! Let's play again.";
    } else {
      //computer wins
        computerScore++;
        responseDiv.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    // Update displayed scores
    updateScores();
}

// Function to update displayed scores
function updateScores() {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

// Function to reset the game scores
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    responseDiv.innerHTML = '';
}

// function playAgain() {
//     responseDiv.innerHTML = '';
// }

