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
const checkGuess = () => {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof(guess))

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number'
  }
}
document.querySelector('.check').addEventListener('click', checkGuess);