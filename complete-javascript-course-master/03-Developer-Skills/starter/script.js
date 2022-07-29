// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const arr = [17, 21, 23]
const arr2 = [12, 5, -5, 0, 4]
const printForecast = (arr) => {
  // [17, 21, 23]
  let result = ''
  for (let i = 0; i < arr.length; i++){
    result += `${arr[i]}ºC in ${i+1} days ... `
  }
  console.log('... ' + result)
}

printForecast(arr2)

// Steps to solve the problem:
// 1. Understanding the problem 
//   1.1. Array transformed to string, separated by ...
//   1.2. Calculate X days for each temperature

// 2. Braking up into sub-problems
//   2.1. Iterate over the array's temperatures
//   2.2. Transform array into string
//   2.3. Calculate X days for each temperature
//   2.4. Append the results in one variable
//   2.5. Log the results