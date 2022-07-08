'use strict' // activate strict mode for the whole script

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log('You are allowed to drive');


////////////////////////////////////////////////////////////////////////////////

//Function declaration
// function calcAge1(birthYear){
// 	return 2037 - birthYear
// }

// const age1 = calcAge1(1991)


// //Function expression
// const calcAge2 = function (birthYear){
// 	return 2037 - birthYear
// }

// const age2 = calcAge2(1991)

// console.log(age1, age2)


// //Arrow function
// const calcAge3 = birthYear => 2037 - birthYear

// const age3 = calcAge3(1991)

// console.log(age1, age2, age3)


// const yearsUntilRetirement = (firstName, birthYear) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return `${firstName} have ${retirement} years until retirement.`
//   } else {
//     return `${firstName} is already retired.`
//   }
// }

// console.log(yearsUntilRetirement('Octavio', 1991))

////////////////////////////////////////////////////////////////////////////////

// function cutFruitPieces(fruit) {
// 	return fruit * 4
// }

// function fruitProcessor(apples, oranges){
// 	const applePieces = cutFruitPieces(apples)
// 	const orangePieces = cutFruitPieces(oranges)

// 	console.log(apples, oranges)
// 	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
// 	return juice
// }

// // We pass the arguments that are the actual values for the parameters
// fruitProcessor(5,0)

// const appleJuice = fruitProcessor(3,2)
// console.log(appleJuice)


////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3

// const avgDolhins = calcAverage(44, 23, 71)
// const avgKoalas = calcAverage(65, 54, 49)

// const checkWinner = (avgDolhins, avgKoalas) => {
//   if (avgDolhins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolhins} vs. ${avgKoalas})`
//   } else if (avgKoalas >= 2 * avgDolhins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolhins})`
//   } else {
//     return `Draw (${avgDolhins} vs. ${avgKoalas})`
//   }
// }

// console.log(checkWinner(avgDolhins, avgKoalas))


////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = (billValue) => {
//   const tipPercentage = (billValue >= 50 && billValue <= 300) ? 0.15 : 0.2
//   const tip = billValue * tipPercentage
//   return tip
// }

// const bills = [125, 555, 44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(tips, total);


////////////////////////////////////////////////////////////////////////////////


// const person = {
// 	firstName: 'Octavio',
// 	lastName: 'Lafourcade',
// 	age: 2037 - 1995,
// 	job: 'teacher',
// 	friends: ['Laura', 'Luis', 'Alex']
// }

// console.log(person.lastName) // Dot notation
// console.log(person['lastName']) // Bracket notation

// // Extra Challenge
// // Octavio has 3 friends, and his best friend is called Laura.
// console.log(`${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`)

////////////////////////////////////////////////////////////////////////////////

// Object Methods

//this: this is a reference to the object that is calling the method
// "Octavio is a 30-year old teacher and he has a driver's licence"

// const person = {
// 	firstName: 'Octavio',
// 	lastName: 'Lafourcade',
// 	birthYear: 1995,
// 	job: 'teacher',
// 	friends: ['Laura', 'Luis', 'Alex'],
// 	hasDriversLicense: true,
// 	calcAge: function(){
// 		this.age = 2037 - this.birthYear
// 		return this.age
// 	},
// 	getSummary: function(){
// 		return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's licence`
// 	}
// }

// console.log(person.getSummary())

////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// mark.calcBMI() // We call the method on the object to calculate the BMI
// john.calcBMI()

// console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);

////////////////////////////////////////////////////////////////////////////////

// Iteration: The for Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`loop number ${rep}`);
// }


////////////////////////////////////////////////////////////////////////////////

// Looping Arrays, Breaking and Continuing

// const types = []

// const person = ['John', 'Smith', 1990, 'teacher', false];

// for (let i = 0; i < person.length; i++) {
//   console.log(person[i], typeof person[i]);

//   //Fillig types array with the types of the elements in the array
// 	// types[i] = typeof person[i]
//   types.push(typeof person[i])
// } 
// console.log('types', types)

// // Second example
// const years = [1990, 1965, 1982, 1937];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2020 - years[i]);
// }
// console.log('ages',ages)

// // continue and break statements
// console.log('---- ONLY STRINGS ----')
// for (let i = 0; i < person.length; i++) {
//   if (typeof person[i] !== 'string') continue // only prints the strings, will skip the numbers such 1990
//   console.log(person[i], typeof person[i]);
// } 

// // break
// console.log('---- BREAK WITH NUMBER ----')
// for (let i = 0; i < person.length; i++) {
//   if (typeof person[i] === 'number') break // will break the loop when it finds a number
//   console.log(person[i], typeof person[i]); // after finding the number, it will not print the rest of the array
// } 

////////////////////////////////////////////////////////////////////////////////
// Looping Backwards and Loops in Loops
// Looping Backwards
// const person = ['John', 'Smith', 1990, 'teacher', ['Michael', 'Peter', 'Steven'], true];

// for (let i = person.length - 1; i >= 0; i--) {
//   console.log(person[i]);
// }

// // Looping in Loops
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------ Starting exercise number ${exercise} ------`);
  
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
//   }
// }

////////////////////////////////////////////////////////////////////////////////
// The While Loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10){
//   console.log(`WHILE Lifting weight repetition ${rep}`);
//   rep++;
// }