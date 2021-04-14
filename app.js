let userScore;
let computerScore;
let playerSelection;
let computerSelection;

function game() {
    userScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound()

    } return result()
}

function computerPlay() {
    let roll = Math.floor(Math.random() * 3) + 1;
    if (roll === 1) {
        return 'rock'
    } else if (roll === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = (prompt('Rock, Paper or Scissors: '));
    computerSelection = computerPlay();
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win this round! Rock beats Scissors')
        userScore++
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        console.log('You lose this round! Rock beats Scissors')
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore++
        console.log('You win this round! Paper beats Rock')
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        console.log('You lose this round! Paper beats Rock')
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        userScore++
        console.log('You win this round! Scissors beats Paper')
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        console.log('You lose this round! Scissors beats Paper')
    } else {
        console.log('Tie!')
    }
}

function result() {
    if (userScore > computerScore) {
        return 'You win the game!'
    } else if (userScore < computerScore) {
        return 'Aww you lost'
    } else {
        return `It's a tie!`
    }
}


