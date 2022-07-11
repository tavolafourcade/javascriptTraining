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

const getRandomNumber = () => {
  return Math.trunc(Math.random()*20) + 1
} // 1-20

let secretNumber = getRandomNumber()
let score = 20
let highScore = 0

const displayValue = (cssClass,message) => {
  document.querySelector(cssClass).textContent = message
}

const checkGuess = () => {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof(guess))

  // When there is no input
  if (!guess) {
    displayValue('.message', '⛔️ No number')
    // document.querySelector('.message').textContent = '⛔️ No number'
  }
  // When player wins
  else if (guess === secretNumber) {
    displayValue('.message', 'Correct Number! 🤟')
    // document.querySelector('.message').textContent = 'Correct Number! 🤟';
    displayValue('.number', secretNumber)
    // document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highScore) {
      highScore = score
      displayValue('.highscore', highScore)
      // document.querySelector('.highscore').textContent = highScore
    }
  // When guess is wrong
  } else if(guess !== secretNumber) {
    if (score > 1) {
      displayValue('.message', guess > secretNumber ? 'Too high! 🤔' : 'Too low! 🤔')
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high! 🤔' : 'Too low! 🤔'
      score--
      displayValue('.score', score)
      // document.querySelector('.score').textContent = score
    } else {
      displayValue('.message', 'You lost! 😭')
      displayValue('.score', 0)
      // document.querySelector('.message').textContent = 'You lost! 😭';
      // document.querySelector('.score').textContent = 0
    }
  }
}

const resetGame = () => {
  score = 20
  secretNumber = getRandomNumber()
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
  displayValue('.number', '?')
  // document.querySelector('.number').textContent = '?'
  displayValue('.message', 'Start guessing...')
  // document.querySelector('.message').textContent = 'Start guessing...'
  displayValue('.score', score)
  // document.querySelector('.score').textContent = score
  document.querySelector('.guess').value=''

}
document.querySelector('.check').addEventListener('click', checkGuess);


//////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', resetGame)