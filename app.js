
let userScore = 0;
let computerScore = 0;




function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper or Scissors: ');
        let computerSelection = computerPlay();
        playRound();

    } return result();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        userScore++
        console.log('You win this round! Rock beats Scissors')
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

function result() {
    if (userScore > computerScore) {
        return 'You win the game!'
    } else if (userScore < computerScore) {
        return 'Aww you lost'
    } else {
        return `It's a tie!`
    }
}




