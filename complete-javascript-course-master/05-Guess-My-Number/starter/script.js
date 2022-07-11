'use strict';

/*
console.log(document.querySelector('.message').textContent)

//Set content of an element
document.querySelector('.message').textContent = 'Correct Numer! 🤟';

document.querySelector('.number').textContent = 25
document.querySelector('.score').textContent = 30

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)

*/

const secretNumber = Math.trunc(Math.random()*20) + 1 // 1-20
let score = 20
document.querySelector('.number').textContent = secretNumber
const checkGuess = () => {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof(guess))

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number'
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🤟';
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
  // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! 🤔';
    score--
    document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost! 😭';
      document.querySelector('.score').textContent = 0
    }
  // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
    document.querySelector('.message').textContent = 'Too low! 🤔';
    score--
    document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost! 😭';
      document.querySelector('.score').textContent = 0
    }
  }
}
document.querySelector('.check').addEventListener('click', checkGuess);