'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////

// Selecting elements

console.log('DOCUMENT ELEMENT', document.documentElement);
console.log('HEAD', document.head);
console.log('BODY', document.body);

const header = document.querySelector('.header')

const allSections = document.querySelectorAll('.section');
console.log('allSections', allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button')
console.log('allButtons', allButtons)

console.log('all buttons with class btn',document.getElementsByClassName('btn'))

// Creating and inserting elements

// insertAdjacentHTML

const message = document.createElement('div')
message.classList.add('cookie-message')
// message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>' 

// prepend() - insert at the beginning
// header.prepend(message)

// append() - insert at the end
header.append(message)

// header.append(message.cloneNode(true))

// before() - insert before
// header.before(message)

// after() - insert after
// header.after(message)

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove())