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

