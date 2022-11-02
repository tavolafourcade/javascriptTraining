'use strict';

// 3. Constructor Functions and the new Operator
const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function
  // this.calcAge = function(){
  //   console.log(2037 - this.birthYear);
  // }
}

const octavio = new Person('Octavio', 1991)
// console.log(octavio)

// console.log(octavio instanceof Person) // true

///////////////////////////////////////

// 4. Prototypes

// console.log(Person.prototype) // Person {calcAge: ƒ}
Person.prototype.calcAge = function(){
  // console.log(2037 - this.birthYear);
}

octavio.calcAge() // 46
// console.log(octavio)

// Check the octavio prototype
// console.log(octavio.__proto__) // Person {calcAge: ƒ}

// console.log('Prototype',octavio.__proto__===Person.prototype) // true


Person.prototype.species = 'Homo Sapiens'
// console.log(octavio)
// console.log(octavio.hasOwnProperty('species')) // false

///////////////////////////////////////

// 5. Prototypal Inheritance and the Prototype Chain

///////////////////////////////////////

// 6. Prototypal Inheritance on Built-In Objects

// Prototype of arrays

const arr = [3, 6, 4, 5, 6, 9, 3] // new Array === []
// console.log(arr.__proto__)
// console.log(arr.__proto__ === Array.prototype) // true
// console.log(arr.__proto__.__proto__) // Object.prototype

Array.prototype.unique = function(){
  return [...new Set(this)]
}

// console.log(arr.unique()) // [3, 6, 4, 5, 9]

// console.dir(x => x + 1) // ƒ (anonymous)