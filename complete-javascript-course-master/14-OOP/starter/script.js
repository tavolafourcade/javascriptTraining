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

///////////////////////////////////////

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function(make,speed){
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function(){
  this.speed += 10
  console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function(){
  this.speed -= 5
  console.log(this.speed)
}

const car1 = new Car('BMW', 100)

// car1.accelerate()
// car1.accelerate()
// car1.brake()

///////////////////////////////////////

// 7. ES6 Classes

// Class expression
// const PersonCl = class {

// }

// class declaration
class PersonCl {
  constructor(fullName, birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge(){
    // console.log(2037 - this.birthYear);
  }

  get age(){
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if(name.includes(' ')) this._fullName = name
    else alert(`${name} is not a fullname`)
  }

  get fullName(){
    return this._fullName
  }

  static hey(){
    console.log('Hey there')
    console.log(this)
  }
}

const jessica = new PersonCl('Jessica Davis', 1996)
// console.log(jessica)
jessica.calcAge() // 41
// console.log(jessica.age) // 41


// console.log(jessica.__proto__ === PersonCl.prototype) // true

PersonCl.prototype.greet = function(){
  // console.log(`Hey ${this.firstName}`)
}

// jessica.greet() // Hey Jessica

///////////////////////////////////////

// 8. Setters and Getters

const account = {
  owner: 'Octavio',
  movements: [ 200, 530, 120, 300],

  get latest(){
    return this.movements.slice(-1).pop()
  },

  set latest(mov) {
    this.movements.push(mov)
  }
}

// console.log(account.latest)

account.latest = 50
// console.log(account.movements)

///////////////////////////////////////

// 10. Static Methods

Person.hey = function () {
  console.log('Hey there 👋')
} 

Person.hey() // Hey there 👋
// jessica.hey() // Uncaught TypeError: jessica.hey is not a function

PersonCl.hey()

///////////////////////////////////////