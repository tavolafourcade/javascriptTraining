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

const calcAverage = (a, b, c) => (a + b + c) / 3

const avgDolhins = calcAverage(44, 23, 71)
const avgKoalas = calcAverage(65, 54, 49)

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolhins} vs. ${avgKoalas})`
  } else if (avgKoalas >= 2 * avgDolhins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolhins})`
  } else {
    return `Draw (${avgDolhins} vs. ${avgKoalas})`
  }
}

console.log(checkWinner(avgDolhins, avgKoalas))
