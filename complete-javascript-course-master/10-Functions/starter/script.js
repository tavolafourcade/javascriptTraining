'use strict';

// 10. Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker()
booker()
booker()

console.dir(booker)

///////////////////////////////////////

// 9. Immediately Invoked Function Expressions (IIFE)

// (function(){
//   console.log('This will never run again')
// })();

// (() => console.log('This will also never run again'))();

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer(){
//     // Get answer
//     const answer = Number(prompt(`${this.question} \n${this.options.join('\n')}`))
//     console.log(answer)

//     // Register answer
//     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++ // if answer is a number and answer is less than the length of the array and the answer is the index of the array, then increment the value of the index by 1
//     this.displayResults()
//     this.displayResults('string')

//   },
//   displayResults(type = 'array'){
//     if(type==='array'){
//       console.log(this.answers)
//     } else if (type === 'string'){
//       console.log(`Poll results are ${this.answers.join(', ')}`)
//     }

//   }
// }

// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll)) // bind the this keyword to the poll object
// // poll.registerNewAnswer()

// const data1 = [5, 2, 3]
// const data2 = [1, 5, 3, 9, 6, 1]

// poll.displayResults.call({answers: data1}) // call the displayResults method and pass in the data1 array as the answers property
// poll.displayResults.call({answers: data2}, 'string') // call the displayResults method and pass in the data2 array as the answers property and the string as the type argument
///////////////////////////////////////

// The bind method

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function () {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   }
// }

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: []
// }

// const book = lufthansa.book

// const bookEw = book.bind(eurowings)
// const bookL = book.bind(lufthansa)
// bookEw(23, 'Lauterbach')
// bookL(345, 'Hope')

// const bookEw234 = book.bind(eurowings, 234)
// bookEw234('Doe')


// // With Event Listeners
// lufthansa.planes = 300
// lufthansa.buyPlane = function () {
//   console.log('this',this)
//   this.planes++
//   console.log('this.planes',this.planes)
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))


// // Partial Application

// const addTax = (rate, value) => value + value * rate
// console.log(addTax(0.1, 200)) // 220

// const addIgv = addTax.bind(null, 0.18) // null is the this keyword
// // This is equivalent to
// // const addIgv = value => value + value * 0.18

// console.log(addIgv(100)) // 118

// const addTaxRate = function(rate){
//   return function(value){
//     return value + value * rate
//   }
// }

// const addIgv2 = addTaxRate(0.18)
// console.log(addIgv2(100)) // 118

///////////////////////////////////////

// 6. The call and apply methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function () {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   }
// }

// lufthansa.book(239, 'Octavio')
// lufthansa.book(635, 'John Smith')
// console.log(lufthansa.bookings);

// // The group created a new airline
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: []
// }

// // This doesn't work
// const book = lufthansa.book
// // book(34, 'Sarah Williams')

// book.call(lufthansa, 43, 'Laura')
// book.call(eurowings, 984, 'Rachel')
// console.log(eurowings)

// const flightDetails = [342, 'Marylin']


// book.call(eurowings, ...flightDetails)
// console.log(eurowings)


// // Apply method
// const flightData = [583, 'George Cooper']

// book.apply(eurowings, flightData)
// console.log(eurowings)


///////////////////////////////////////

// 5. Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// console.log('greeterHey',greeterHey)
// greeterHey('Octavio');
// greeterHey('Doe');

// greet('Hello')('Octavio'); // Hello Octavio

// // Using arrow functions
// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetArrow('Hi')('Octavio'); // Hi Octavio

///////////////////////////////////////

// 4. Functions accepting callback functions

// /*
// Function that receives a string and replaces all empty spaces with '' and converts it to lowercase
// */
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// }

// /*
// Function that receives a string and capitalizes the first letter of the first word
// */

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// }

// /*
// Higher-order function that receives a function as an argument
// */

// const transformer = function(str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function() {
//   console.log('👋');
// }

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

///////////////////////////////////////

// 2. How Passing Arguments Works: Value vs Reference
// const flight = 'LH234'
// const octavio = {
//   name: 'Octavio',
//   passport: 123456789,
// }

// const checkIn = function(flightNum, passenger) {
//   flightNum = 'LH999'
//   passenger.name = 'Mr. ' + passenger.name

//   if (passenger.passport === 123456789) {
//     alert('Check in')
//   } else {
//     alert('Wrong passport!')
//   }
// }

// checkIn(flight, octavio)
// console.log(flight)
// console.log(octavio)

// // Is the same as doing...
// const flightNum = flight
// const passenger = octavio

// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 1000000000)
// }

// newPassport(octavio) // We called the function before and then changed the passport number
// checkIn(flight, octavio) // Since we are affecting the object this alert will show 'Wrong passport!'

///////////////////////////////////////

// 1. Default Parameters

// const bookings = []

// const createBooking = function(flightNum, numPassenger, price){
//   const booking = {
//     flightNum,
//     numPassenger,
//     price
//   }

//   console.log(booking)
//   bookings.push(booking)
// }

// createBooking('LH123')

// Old way of setting default parameters (ES05)


// const createBooking = function(flightNum, numPassenger, price){
//   numPassenger = numPassenger || 1
//   price = price || 199
//   const booking = {
//     flightNum,
//     numPassenger,
//     price
//   }

//   console.log(booking)
//   bookings.push(booking)
// }

// createBooking('LH123')

// New way of setting default parameters (ES06)
// const createBooking = function(flightNum, numPassenger = 1, price = 199 * numPassenger){

//   const booking = {
//     flightNum,
//     numPassenger,
//     price
//   }

//   console.log(booking)
//   bookings.push(booking)
// }

// createBooking('LH123', 2)