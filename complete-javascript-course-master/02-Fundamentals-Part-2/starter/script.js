'use strict' // activate strict mode for the whole script

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log('You are allowed to drive');


////////////////////////////////////////////////////////////////////////////////

//Function declaration
function calcAge1(birthYear){
	return 2037 - birthYear
}

const age1 = calcAge1(1991)


//Function expression
const calcAge2 = function (birthYear){
	return 2037 - birthYear
}

const age2 = calcAge2(1991)

console.log(age1, age2)


//Arrow function
const calcAge3 = birthYear => 2037 - birthYear

const age3 = calcAge3(1991)

console.log(age1, age2, age3)


const yearsUntilRetirement = (firstName, birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} have ${retirement} years until retirement.`
  } else {
    return `${firstName} is already retired.`
  }
}

console.log(yearsUntilRetirement('Octavio', 1991))