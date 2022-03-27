let computerScore = 0;
let playerScore = 0;
const playerScoreDisplay = document.querySelector('.playerScoreDisplay');
    playerScoreDisplay.textContent = 'Player: ' + playerScore;
const computerScoreDisplay = document.querySelector('.computerScoreDisplay');
    computerScoreDisplay.textContent = 'Computer: ' + computerScore;

function newGame () {
    let gameStart = document.querySelector('.start');
    gameStart.textContent = 'YOUR MOVE !';
    computerScore = 0;
    playerScore = 0;
    computerScoreDisplay.textContent = 'Computer: ' + computerScore;
    playerScoreDisplay.textContent = 'Player: ' + playerScore;
}

function computerPlay() {
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }
    let randomSign = getRandomInt(1,4); 
    if (randomSign == 1) {
        return("Rock"); 
    } else if (randomSign == 2) {
        return("Paper");
    } else {
        return("Scissors");
    }       
}

function removeTransition (e) {
    e.target.classList.remove('clicking');
}

let buttons = document.querySelector('.buttons');
    buttons.addEventListener('click', playRound);
    buttons = Array.from(document.querySelectorAll('.buttons'));
    buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
let start = document.querySelector('#start');
    start.addEventListener('click', newGame);

function playRound(event, computerSelection) {
    let gameStart = document.querySelector('.start');
    if (gameStart.textContent === 'YOUR MOVE !') {
        gameStart.textContent = 'START GAME';
    }
    computerSelection = computerPlay();
    let playerSelection = '';

        if (event.target.className == 'btn rock') {
            playerSelection = 'Rock';
        }
        else if (event.target.className == 'btn paper') {
            playerSelection = 'Paper';
        }
        else if (event.target.className == 'btn scissors') {
            playerSelection = 'Scissors';
        }

        switch (playerSelection) {         
        case "Rock":
            let rock = document.querySelector('.rock');
            rock.classList.add('clicking');
            if (computerSelection === "Paper") {
                computerScore++;
                computerScoreDisplay.textContent = 'Computer: ' + computerScore;
                gameStart.textContent = "You lose! Paper beats Rock";
                if (computerScore != 5) {
                lose.play();
                }
            } 
            else if (computerSelection === "Scissors") {
                playerScore++;
                playerScoreDisplay.textContent = 'Player: ' + playerScore;
                gameStart.textContent = "You win! Rock beats Scissors";
                if (playerScore != 5) {
                win.play();
                }
            } 
            else {
                gameStart.textContent = "It's a tie!";
            }
            break;
        case "Paper":
            let paper = document.querySelector('.paper');
            paper.classList.add('clicking');
            if (computerSelection === "Scissors") {
                computerScore++;
                computerScoreDisplay.textContent = 'Computer: ' + computerScore;
                gameStart.textContent = "You lose! Scissors beats Paper";
                if (computerScore != 5) {
                lose.play();
                }
            }
            else if (computerSelection === "Rock") {
                playerScore++;
                playerScoreDisplay.textContent = 'Player: ' + playerScore;
                gameStart.textContent = "You win! Paper beats Rock";
                if (playerScore != 5) {
                    win.play();
                }
            }
            else {
                gameStart.textContent = "It's a tie!";
            }
            break;
        case "Scissors":
            let scissors = document.querySelector('.scissors');
            scissors.classList.add('clicking');
            if (computerSelection === "Rock") {
                computerScore++;
                computerScoreDisplay.textContent = 'Computer: ' + computerScore;
                gameStart.textContent = "You lose! Rock beats Scissors";
                if (computerScore != 5) {
                    lose.play();
                }
            }
            else if (computerSelection === "Paper") {
                playerScore++;
                playerScoreDisplay.textContent = 'Player: ' + playerScore;
                gameStart.textContent = "You win! Scissors beats Paper";
                if (playerScore != 5) {
                    win.play();
                }
            }
            else {
                gameStart.textContent = "It's a tie!";
            }
            break;
        default:
            return 0;
        }

    function restart () {
        gameStart.textContent = 'START GAME';
        computerScore = 0;
        playerScore = 0;
        computerScoreDisplay.textContent = 'Computer: ' + computerScore;
        playerScoreDisplay.textContent = 'Player: ' + playerScore;
    }

        if (playerScore === 5 | computerScore === 5) {
            if (playerScore > computerScore) {
                winner.play();
                gameStart.textContent = 'Congratulations!\n You won the game ' + playerScore + ' to '+ computerScore;             
            }
            else if (playerScore < computerScore) {
                loser.play();
                gameStart.textContent = 'Too bad!\n You lost the game ' + computerScore + ' to ' + playerScore;              
            }
        setTimeout (restart, 5000);
        }
    }
