
let userScore = 0;
let computerScore = 0;

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

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = toLowerCase(prompt('Rock, Paper or Scissors: '))
        let computerSelection = computerPlay()
        function playRound(playerSelection, computerSelection) {
            playerSelection.toLowerCase();
            if (playerSelection === 'rock' && computerSelection === 'scissors') {
                userScore++
                console.log('You win! Rock beats Scissors')
            } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                computerScore++
                console.log('You lose! Rock beats Scissors')
            } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                userScore++
                console.log('You win! Paper beats Rock')
            } else if (playerSelection === 'rock' && computerSelection === 'paper') {
                computerScore++
                console.log('You lose! Paper beats Rock')
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                userScore++
                console.log('You win! Scissors beats Paper')
            } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                computerScore++
                console.log('You lose! Scissors beats Paper')
            } else {
                console.log('Tie!')
            }
        }
    } return result()
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



console.log(playRound(playerSelection, computerSelection));