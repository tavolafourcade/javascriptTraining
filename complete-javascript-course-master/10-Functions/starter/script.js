'use strict';

// 6. The call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  }
}

lufthansa.book(239, 'Octavio')
lufthansa.book(635, 'John Smith')
console.log(lufthansa.bookings);

// The group created a new airline
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}

// This doesn't work
const book = lufthansa.book
// book(34, 'Sarah Williams')

book.call(lufthansa, 43, 'Laura')
book.call(eurowings, 984, 'Rachel')
console.log(eurowings)

const flightDetails = [342, 'Marylin']


book.call(eurowings, ...flightDetails)
console.log(eurowings)


// Apply method
const flightData = [583, 'George Cooper']

book.apply(eurowings, flightData)
console.log(eurowings)


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