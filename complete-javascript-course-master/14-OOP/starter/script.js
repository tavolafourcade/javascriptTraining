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