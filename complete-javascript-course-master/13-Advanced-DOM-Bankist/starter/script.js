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

console.log('HEADER', document.querySelector('.header'));

const allSections = document.querySelectorAll('.section');
console.log('allSections', allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button')
console.log('allButtons', allButtons)

console.log('all buttons with class btn',document.getElementsByClassName('btn'))