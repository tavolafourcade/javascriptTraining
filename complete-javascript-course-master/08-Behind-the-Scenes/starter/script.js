'use strict';

// function calcAge(birthYear){
//   const age = 2037 - birthYear
//   console.log(firstName)
//   return age
// }

// const firstName = 'Octavio'
// calcAge(1999)


///////////////////////////////////////
// Hoisting and TDZ in Practice

// console.log(me)
// console.log(job)
// console.log(year)

// var me = 'Octavio' // undefined
// let job = 'teacher' // Cannot access 'job' before initialization
// const year = 1991 // Cannot access 'year' before initialization

// Functions

// //Function declaration

// console.log('addDecl', addDecl(2,3))
// console.log('addExpr', addExpr(2,3)) // Cannot access 'addExpr' before initialization
// console.log('addArrow', addArrow(2,3)) // Cannot access 'addArrow' before initialization

// function addDecl(a,b){
//   return a + b
// }

// //Function expression
// const addExpr = function(a,b){
//   return a + b
// }

// const addArrow = (a,b) => a + b

// Example
// console.log(numProducts); // undefined
// if(!numProducts) deleteShoppingCart() // All products deleted! <== because numProducts is undefined

// var numProducts = 10

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// Example 2
var x = 1
let y = 2
const z = 3

console.log(x === window.x) // true
console.log(y === window.y) // false
console.log(z === window.z) // false