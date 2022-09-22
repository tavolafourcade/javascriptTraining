'use strict';


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