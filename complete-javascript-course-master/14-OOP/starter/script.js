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

// Person.hey() // Hey there 👋
// jessica.hey() // Uncaught TypeError: jessica.hey is not a function

// PersonCl.hey()

///////////////////////////////////////

// 11. Object.create

// const PersonProto = {
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   }
// }

// We are implementing Prototype inheritance in a different way
// const steven = Object.create(PersonProto)
// steven.name = 'Steven'
// steven.birthYear = 2002
// steven.calcAge() // 35

// console.log(steven.__proto__ === PersonProto) // true


// A better way of setting properties
// const sarah = Object.create(PersonProto)

// const PersonProto = {
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear){
//     this.firstName = firstName
//     this.birthYear = birthYear
//   }
// }

// sarah.init('Sarah', 1979)
// sarah.calcAge() // 58

///////////////////////////////////////

// 12. Coding Challenge 2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/


/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed){
    this.make = make
    this.speed = speed;
  }

  accelerate(){
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h`)
  }

  brake(){
    this.speed -= 5
    console.log(this.speed)
  }

  get speedUS() 
  {
    return this.speed / 1.6
  }

  set speedUS(speed){
    this.speed = speed * 1.6
  }
}

const ford = new CarCl('Ford', 120)
// console.log(ford.speedUS) // 75
ford.accelerate() // Ford is going at 130 km/h
ford.brake()
ford.speedUS = 50
// console.log(ford) // CarCl {make: 'Ford', speed: 80}

///////////////////////////////////////

// 13. Inheritance Between “Classes”: Constructor Functions

const Person2 = function(firstName, birthYear){
  this.firstName = firstName
  this.birthYear = birthYear
}

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
  Person.call(this, firstName, birthYear) // Call the constructor function of the parent class and specify the this keyword
  this.course = course
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype) // Link the prototype of the Student class to the Person class
// At this point Student.protype is empty

// Student.prototype = Person.prototype // Wrong way of doing it

// Adding a method
Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science')
// console.log(mike)
mike.introduce() // My name is Mike and I study Computer Science
mike.calcAge() // 17

// console.log(mike instanceof Student) // true
// console.log(mike instanceof Person) // true

///////////////////////////////////////

// Coding Challenge 3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
const ev = function(make, speed, charge) {
  Car.call(this, make, speed)
  this.charge = charge
}


// Linking prototypes
ev.prototype = Object.create(Car.prototype)

ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo
}

ev.prototype.accelerate = function() {
  this.speed += 20
  this.charge--
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}
const tesla = new ev('Tesla', 120, 23)
tesla.chargeBattery(90)
tesla.brake()
// console.log(tesla)
// tesla.accelerate()
// tesla.accelerate()

///////////////////////////////////////

// 15. Inheritance Between “Classes”: ES6 Classes

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course){
   // Always needs to happen first!
    super(fullName, birthYear)
    this.course = course
  }

  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')
console.log(martha) // StudentCl {_fullName: 'Martha Jones', birthYear: 2012, course: 'Computer Science'}

// martha.introduce() // My name is Martha Jones and I study Computer Science
// martha.calcAge() // 9

///////////////////////////////////////

// 16. Inheritance Between “Classes”: Object.create

const PersonProto = {
  calcAge(){
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
  }
}

const steven = Object.create(PersonProto) // Create a new object based on the PersonProto object

const StudentProto = Object.create(PersonProto) // Create a new object based on the PersonProto object

// Add a new method to the StudentProto object
StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course
}

// Add a new method to the StudentProto object
StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto) // Create a new object based on the StudentProto object
// jay.init('Jay', 2010, 'Computer Science') // Initialize the object
// jay.introduce() // My name is Jay and I study Computer Science
// jay.calcAge() // 27

///////////////////////////////////////

// Another Class Example

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;
  
  // 2) Private fields (instances)
  #movements = [];
  #pin;


  constructor(owner, currency, pin){
    this.owner = owner
    this.currency = currency
    
    // Protected property
    this.#pin = pin
    // this._movements = []
    // this.locale = navigator.language

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  // Public Interface

  getMovements() {
    return this.#movements
  }

  deposit(val) {
    this.#movements.push(val)
    return this
  }

  // Calling the deposit method inside the withdraw method
  withdraw(val) {
    this.deposit(-val)
    return this
  }

  requestLoan(val) {
    if(this._approveLoan(val)){
      this.deposit(val)
      console.log('Loan approved');
      return this
    }
  }

  // 4) Private methods

  // #approveLoan(val) {
  _approveLoan(val) {

    return true
  }
}

const acc1 = new Account('octavio', 'EUR', 1111)

// acc1.movements.push(250)
// acc1.movements.push(-140)
// acc1.deposit(250)
// acc1.withdraw(140)
// acc1.requestLoan(1000)
// acc1.approveLoan(1000)
console.log(acc1)
// console.log(acc1.#movements)

///////////////////////////////////////

// 18. Encapsulation: Protected Properties and Methods
// console.log(acc1.getMovements())

///////////////////////////////////////

// 19. Encapsulation: Private Class Fields and Methods

// Public fields
// Private fields
// Public methods
// Private methods

///////////////////////////////////////

// 20. Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
// console.log(acc1.getMovements())

///////////////////////////////////////

// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarClass {
  constructor(make, speed){
    this.make = make
    this.speed = speed;
  }

  accelerate(){
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h`)
  }

  brake(){
    this.speed -= 5
    console.log(this.speed)
    return this
  }

  get speedUS() 
  {
    return this.speed / 1.6
  }

  set speedUS(speed){
    this.speed = speed * 1.6
  }
}

class EVCl extends CarClass {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed)
    this.#charge = charge
  }


  chargeBattery(chargeTo) {
    this.#charge = chargeTo
    return this
  }

  accelerate(){
    this.speed += 20
    this.#charge--
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this
  }
}

const rivian = new EVCl('Rivian', 120, 23)
// console.log('Chaining', rivian.accelerate()
// .accelerate()
// .accelerate()
// .brake()
// .chargeBattery(50)
// .accelerate())

// console.log('rivian.speedUS',rivian.speedUS)

///////////////////////////////////////