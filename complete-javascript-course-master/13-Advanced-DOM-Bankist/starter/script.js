'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function(e){
//   e.addEventListener('click', function(e) {
//     e.preventDefault()

//     const id = this.getAttribute('href')

//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//     console.log('LINK')
//   })
// })

// Event delegation

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault()

  // Matching strategy
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})
///////////////////////////////////////

// Selecting elements

// console.log('DOCUMENT ELEMENT', document.documentElement);
// console.log('HEAD', document.head);
// console.log('BODY', document.body);

const header = document.querySelector('.header')

// const allSections = document.querySelectorAll('.section');
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
// document.documentElement.style.setProperty('--color-primary', 'orangered')

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
// logo.classList.add('c', 'j')
// logo.classList.remove('c')
// logo.classList.toggle('c')
// logo.classList.contains('c')

// logo.className = 'octavio'


///////////////////////////////////////

// 5. Implementing Smooth Scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords)

  // console.log(e.target.getBoundingClientRect())

  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset)

  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth)

  // Scrolling
  // window.scrollTo(s1coords.left, s1coords.top) // not smooth movement to the section 1
  // This top is relative to the viewport, no to the document
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset) // not smooth movement to the section 1


  // Old school

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth' // smooth movement to the section 1
  // })


  // Modern way
  section1.scrollIntoView({behavior: 'smooth'})
})

///////////////////////////////////////

// 6. Types of Events and Event Handlers

const h1 = document.querySelector('h1')

const alertH1 = () => {
  alert('addEventListener: Great! You are reading  the heading :D')
  // h1.removeEventListener('mouseenter', alertH1) // remove the event listener
}
// h1.addEventListener('mouseenter', alertH1) 

// Another way to add event listener
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading  the heading :D')
// }

// Remove the event listener after 3000ms
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

///////////////////////////////////////

// 7. Event Propagation: Bubbling and Capturing

/*

When someone clicks a link, the DOM generates a click event right away. But, this event is not generated at the target element (the element where the event happened: the anchor element). Instead, the event is generated at the root of the document (at the top of the DOM tree).

From there, the ******************************Capturing phase****************************** happens where the event travels all the way down from the document route to the target element. As soon the event reaches the target, the **********************target phase********************** begins where events can be handled right at the target with event listeners (the event listeners wait for a certain event to happen on a certain element, as soon as the event occurs it runs the attached callback function like the alert window of the previous example).

As the event reaches the target, the event travels all the way up to the Document route again  in the so-called ****************************bubbling phase****************************. So, we say that events bubble up from the target to the document route.

This means that is as if the event also happened in each of the parent elements. If we attach the same event listener to a parent element then we get the exact same alert window (of the previous example), for the section element as well. So we would have handled the exact same event twice, once at its target, and once at one of its parent elements.

Not all types of events do have a capturing and bubbling phase. Some are created on the target element and can only been handled there.

*/

///////////////////////////////////////

// 8. Event Propagation in Practice

// We’ll attach event handlers to the navigation links and its parent elements

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   // console.log('LINK', e.target, e.currentTarget)
//   // console.log(e.currentTarget === this) // true

//   // Stop propagation
//   e.stopPropagation()
// })

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()
//   // console.log('CONTAINER', e.target, e.currentTarget)
// })

//   document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()
//   // console.log('NAV', e.target, e.currentTarget)
// })

///////////////////////////////////////

// 10.  DOM Traversing

const h1el = document.querySelector('h1')

// Going downwards: selecting child elements
// console.log(h1el.querySelectorAll('.highlight')) // NodeList(2) [span.highlight, span.highlight]

// Getting the direct children
// console.log(h1el.childNodes) // NodeList(9) [text, br, text, span.highlight, text, br, text, span.highlight, text]

// Getting the text
// console.log(h1el.textContent) // We're building a bankist app //innerHtml

// Getting the children in other way
// console.log(h1.children)

// Getting the first element child
// h1el.firstElementChild.style.color = 'white'

// Getting the last element child
// h1el.lastElementChild.style.color = 'orangered'


// Going upwards: selecting parent elements
// console.log(h1el.parentNode) // <div class="header">...</div>

// Getting the parent element
// console.log(h1el.parentElement) // <div class="header">...</div>

// Getting a parent element no matter how many levels up in the DOM tree
// h1el.closest('.header').style.background = 'var(--gradient-secondary)'

// h1el.closest('h1').style.background = 'var(--gradient-primary)'

// Going sideways: selecting sibling elements
// console.log(h1el.previousElementSibling) // null first child
// console.log(h1el.nextElementSibling) // <h4>A simpler banking experience for a simpler life.</h4>

// console.log(h1el.previousSibling) // #text
// console.log(h1el.nextSibling) // #text

// Getting all siblings
// console.log(h1el.parentElement.children)

// [...h1el.parentElement.children].forEach(function(el) {
//   if (el !== h1el) el.style.transform = 'scale(0.5)'
// } )


///////////////////////////////////////

// 11. Building a Tabbed Component

const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

// Adding event handlers to buttons


// This is a bad practice because if we have 200 tabs we will have 200 callback functions
// tabs.forEach(tab => tab.addEventListener('click', () => console.log('TAB')))

// Instead, we'll use event delegation: attaching the event handler to the parent element of the tabs
tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab')
  console.log(clicked)

  // Guard clause
  if(!clicked) return

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  // Remove active content areas
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  // Activate tab
  clicked.classList.add('operations__tab--active')
  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
  // console.log('clicked',clicked)
  // console.log('clicked dataset', clicked.dataset)
  // console.log(clicked.dataset.tab)
})

///////////////////////////////////////

// 12. Passing Arguments to Event Handlers

// Menu fade animation

const handleHover = function(e){
  // console.log(this)
  if (e.target.classList.contains('nav__link')){
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')

    //Changing opacity of all siblings
    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this
    })
    // logo.style.opacity = 0.5
  }
}
const nav = document.querySelector('nav')

// nav.addEventListener('mouseover', (e) => {
//   handleHover(e, 0.5)
// })
nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout', handleHover.bind(1))

///////////////////////////////////////

// 13. Implementing a Sticky Navigation: The Scroll Event

// Sticky navigation

const initialCoords = section1.getBoundingClientRect()
// console.log(initialCoords)
// window.addEventListener('scroll', () => {
//   // console.log(window.scrollY)

//   if(window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky') 
//   } else {
//     nav.classList.remove('sticky')
//   }
    
// })

///////////////////////////////////////

// 14. Sticky Navigation: Intersection Observer API

// const obsCallback = (entries,observer) => {
//    entries.forEach(entry => {
//     console.log(entry)
//    })
// }
// const obsOptions = {
//   root: null, // will be the element that we want our target element to intersect
//   threshold: [0, 0.2] // the percentage of intersection at which the observer callback will be called
// }
// const observer = new IntersectionObserver(obsCallback, obsOptions)
// observer.observe(section1)

// const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height
const stickyNav = (entries) => {
  const [entry] = entries
  // console.log('ENTRY',entry)
  if(!entry.isIntersecting) nav.classList.add('sticky') 
  else nav.classList.remove('sticky')
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
})
headerObserver.observe(header)

///////////////////////////////////////

// 15. Revealing Elements on Scroll

// Reveal sections
const allSections = document.querySelectorAll('.section')

const revealSection = (entries, observer) => {
  const [entry] = entries
  console.log(entry)

  if(!entry.isIntersecting) return
  
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

allSections.forEach(function(section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})