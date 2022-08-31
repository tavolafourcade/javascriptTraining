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
// var x = 1
// let y = 2
// const z = 3

// console.log(x === window.x) // true
// console.log(y === window.y) // false
// console.log(z === window.z) // false


///////////////////////////////////////
// The this keyword
// console.log(this)

// const calcAge = function(birthYear){
//   console.log(2037 - birthYear)
//   console.log(this) // this is undefined in strict mode 
// }

// // Regular function call
// calcAge(1999)


// // Let's try an arrow function
// const calcAgeArrowFn = (birthYear) =>{
//   console.log(2037 - birthYear)
//   console.log(this) // this is empty object in strict mode because of the surrounding function (parent scope)
// }

// calcAgeArrowFn(1999)


// // Now, let's try a method
// console.log('METHOD FUNCTION')
// const octavio = {
//   name: 'Octavio',
//   birthYear: 1999,
//   calcAge: function(){
//     console.log(this)
//     console.log(2037 - this.birthYear)
//   }
// }

// octavio.calcAge() // this is the object that calls the method

// // Second example
// console.log('MATILDA EXAMPLE')
// const matilda = {
//   birthYear: 2017,
// }

// matilda.calcAge = octavio.calcAge // method borrowing from the octavio object into matilda object
// matilda.calcAge() // 20... because the this method is not pointing to the matilda object, but to the octavio object
// // The this keyword always point to the object that calls the method

///////////////////////////////////////
// Regular functions vs Arrow functions

// var name = 'Laura'

// const octavio = {
//   name: 'Octavio',
//   year: 1999,
//   calcAge: function(){
//     console.log(this)
//     console.log(2037 - this.year)

//     // Solution 1 Using self
//     // const self = this // self or that
//     // const isMillenial = function(){
//     //   console.log('SELF', self)
//     //   console.log('THIS', this)
//     //   console.log(self.year >= 1981 && self.year <= 1996)
//     //   console.log(this.year >= 1981 && this.year <= 1996)
//     // }

//     // Solution 2 Using arrow function
//     const isMillenial =() => {
//       console.log('THIS', this)
//       console.log(this.year >= 1981 && this.year <= 1996)
//     }

//     isMillenial()
//   },

//   greet: function () {
//     console.log(`Hey ${this.name}`)
//   }
// }

// octavio.greet() // Hey undefined because arrow functions doesn't has the this keyword. It will use this keyword from the surrounding function (parent scope) instead which is the global scope

// octavio.calcAge()


// // Arguments keyword
// //Function expression
// const addExpr = function(a,b){
//   console.log(arguments)
//   return a + b
// }
// addExpr(5,4)

// const addArrow = (a,b) => {
//   console.log(arguments)
//   return a + b
// }

// addArrow(5,4)

///////////////////////////////////////

// Primitives vs. Objects (Primitive vs. Reference Types)

// // First example
// let age = 30
// let oldAge = age
// age = 31

// console.log('AGE', age, 'OLDAGE', oldAge) // 31 30

// // Second example

// const me = {
//   name: 'Octavio',
//   age: 30
// }

// const friend = me
// friend.age = 27

// console.log('ME', me) // {name: 'Octavio', age: 27}
// console.log('FRIEND', friend) // {name: 'Octavio', age: 27}

///////////////////////////////////////

// Primitives vs. Objects in Practice

let lastName = 'Williams'
let oldLastName = lastName

lastName = 'Davis'

console.log('LASTNAME', lastName, 'OLDLASTNAME', oldLastName) // Davis Williams
// Each primitive has its own memory space in the stack

// An object is a reference value because it is gonna be stored in the heap
// And the stack then just keeps a reference to the memory position at which the object is stored in the heap.

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27
}

const marriedJessica = jessica // We're just copying the reference to the object
marriedJessica.lastName = 'Davis'

// Both objects are pointing to the same memory location in the heap because in the stack they both hold the same memory address reference
// If we change a property in marriedJessica, it will change the property in jessica as well
console.log('before marriage:', jessica) // {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log('after marriage:', marriedJessica) // {firstName: 'Jessica', lastName: 'Davis', age: 27}


// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27
}

const jessicaCopy = Object.assign({}, jessica2) // This is a shallow copy
jessicaCopy.lastName = 'Davis'

console.log('before copy:', jessica2) // {firstName: 'Jessica', lastName: 'Williams', age: 27}
console.log('after copy:', jessicaCopy) // {firstName: 'Jessica', lastName: 'Davis', age: 27}