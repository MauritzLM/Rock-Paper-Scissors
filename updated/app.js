const user = {
    score: 0,
    display: document.querySelector('.player')
}
const computer = {
    score: 0,
    display: document.querySelector('.computer')
};

let playerSelection;
let computerSelection;
const score = document.getElementById('score')
const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id)
        let playerSelection = e.target.id
        playRound(playerSelection, computerPlay()); // click event calls playround function
    })
})

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

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        const result1 = document.createElement('p')
        result1.textContent = 'You win this round! Rock beats Scissors'
        score.appendChild(result1)
        user.score += 1;
        user.display.textContent = user.score;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        const result2 = document.createElement('p')
        result2.textContent = 'You lose this round! Rock beats Scissors'
        score.appendChild(result2)
        computer.score += 1;
        computer.display.textContent = computer.score;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        const result3 = document.createElement('p')
        result3.textContent = 'You win this round! Paper beats Rock'
        score.appendChild(result3)
        user.score += 1;
        user.display.textContent = user.score;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        const result4 = document.createElement('p')
        result4.textContent = 'You lose this round! Paper beats Rock'
        score.appendChild(result4)
        computer.score += 1;
        computer.display.textContent = computer.score;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        const result5 = document.createElement('p')
        result5.textContent = 'You win this round! Scissors beats Paper'
        score.appendChild(result5)
        user.score += 1;
        user.display.textContent = user.score;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        const result6 = document.createElement('p')
        result6.textContent = 'You lose this round! Scissors beats Paper'
        score.appendChild(result6)
        computer.score += 1;
        computer.display.textContent = computer.score;
    } else {
        const result7 = document.createElement('p')
        result7.textContent = 'Tie!'
        score.appendChild(result7)

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


