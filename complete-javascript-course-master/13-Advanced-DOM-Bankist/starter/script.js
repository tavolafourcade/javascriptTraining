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

// console.log('DOCUMENT ELEMENT', document.documentElement);
// console.log('HEAD', document.head);
// console.log('BODY', document.body);

const header = document.querySelector('.header')

const allSections = document.querySelectorAll('.section');
// console.log('allSections', allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button')
// console.log('allButtons', allButtons)

// console.log('all buttons with class btn',document.getElementsByClassName('btn'))

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


// Styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'

// console.log(message.style.height) // don't show anything
// console.log(message.style.backgroundColor) // rgb(55, 56, 61)

// console.log(getComputedStyle(message).color) // rgb(255, 255, 255)
// console.log(getComputedStyle(message).height) // 43.5px 

// Modyfing the style
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'


// CSS Custom properties (CSS variables)
document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes
const logo = document.querySelector('.nav__logo')
// console.log('logo.alt', logo.alt) // Bankist logo
// console.log('logo.src', logo.src) // http://127.0.0.1:8080/starter/img/logo.png
// console.log('logo.className', logo.className) // nav__logo

// console.log(logo.getAttribute('src')) // img/logo.png

// Non-standard
// console.log('logo.designer', logo.designer) // undefined
// console.log(logo.getAttribute('designer')) // Jonas

logo.alt = 'Beautiful minimalist logo'
logo.setAttribute('company', 'Bankist')

const link = document.querySelector('.twitter-link')
// console.log('link.href', link.href) // https://twitter.com/jonasschmedtmann


// Data attributes
// console.log(logo.dataset.versionNumber) // 3.0

// Classes
logo.classList.add('c', 'j')
logo.classList.remove('c')
logo.classList.toggle('c')
logo.classList.contains('c')

logo.className = 'octavio'


///////////////////////////////////////

// 5. Implementing Smooth Scrolling

// Old school

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords)

  console.log(e.target.getBoundingClientRect())

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset)

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth)

  // Scrolling
  // window.scrollTo(s1coords.left, s1coords.top) // not smooth movement to the section 1
  // This top is relative to the viewport, no to the document
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset) // not smooth movement to the section 1

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth' // smooth movement to the section 1
  })

})