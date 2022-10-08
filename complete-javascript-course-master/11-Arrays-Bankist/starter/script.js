'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// 1. Simple Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2))
// console.log(arr.slice(2, 4))
// console.log(arr.slice(-2))
// console.log(arr.slice(1, -2))

// console.log(arr.slice()) // copy the array

// splice

// console.log(arr.splice(2)) // remove the element from the array
// console.log(arr)

// arr.splice(-1) // remove the last element from the array
// console.log(arr) // ['a']

// Reverse

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()) // ['f', 'g', 'h', 'i', 'j']
// console.log(arr2) // ['f', 'g', 'h', 'i', 'j']

// Concat
// const letters = arr.concat(arr2)
// console.log(letters) // ['a', 'b', 'c', 'd', 'e', 'j', 'i', 'h', 'g', 'f']
// Equivalent to:
// console.log([...arr, ...arr2]) // ['a', 'b', 'c', 'd', 'e', 'j', 'i', 'h', 'g', 'f']

// Join

// console.log(letters.join(' - ')) // a - b - c - d - e - j - i - h - g - f

///////////////////////////////////////

// 2. at method

// const arr = [1, 2, 3, 4, 5, 6, 7];

// // Before
// console.log(arr[0]) // 1

// // With the at() method
// console.log(arr.at(0)) // 1

// // Getting the last element of the array
// console.log(arr[arr.length - 1]) // 7
// console.log(arr.slice(-1)[0]) // 7
// console.log(arr.at(-1)) // 7

///////////////////////////////////////

// 3. Looping Arrays: forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
//   for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// // forEach
// console.log('---- FOR EACH ----');
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// })

///////////////////////////////////////

// 4. forEach with Maps and Sets

// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// console.log('currencies',currencies) // Map(3) {"USD" => "United States dollar", "EUR" => "Euro", "GBP" => "Pound sterling"}

// currencies.forEach((value, key, map)=>{
//   console.log(`${key}: ${value}`)
// })

// // Set
// console.log('---- SET ----');
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log('currenciesUnique Set',currenciesUnique) // Set(3) {"USD", "GBP", "EUR"}

// currenciesUnique.forEach((value, _, map)=>{
//   console.log(`${value}: ${value}`)
// })

///////////////////////////////////////

// 5. Project: Bankist App

/////////////////////////////////////////////////

// 6. Creating DOM elements
// const displayMovements = function(movements){

//   // Clear the movements container
//   containerMovements.innerHTML = ''

//   movements.forEach(function(mov, i){

//     const type = mov > 0 ? 'deposit' : 'withdrawal'
//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
//       <div class="movements__value">${mov}</div>
//     </div>`

//     containerMovements.insertAdjacentHTML('afterbegin', html)
//   })
// }

// displayMovements(account1.movements)

///////////////////////////////////////

// 7. Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = (dogsJulia, dogsKate) => {
//   const dogsJuliaCorrected = dogsJulia.slice() // shallow copy
//   dogsJuliaCorrected.splice(0,1)
//   dogsJuliaCorrected.splice(-2)
//   // dogsJulia.slice(1,3) // [5, 2] It gives the same result
//   console.log(dogsJulia)
//   console.log(dogsJuliaCorrected) // [5, 2]

//   const dogs = dogsJuliaCorrected.concat(dogsKate) // [5, 2, 4, 1, 15, 8, 3]

//   dogs.forEach((dog,i) => {
//     console.log(`Dog number ${i + 1} is ${dog<3 ? 'still a puppy 🐶' : `an adult, and is ${dog} years old`} `)
//   })
// }


// checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3])
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

///////////////////////////////////////

// 8. Data Transformations: map, filter, reduce

// Only theory


///////////////////////////////////////

// 9. The map Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map((el) => {
//   el * eurToUsd
// })

// console.log(movements) // [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movementsUSD) // [220, 495, -440, 3300, -715, -143, 77, 1430]

// const movementsUSDfor = []
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd)

// console.log(movementsUSDfor) // [220, 495, -440, 3300, -715, -143, 77, 1430]

// Second example

// let arr = ['a', 'b', 'c', 'd', 'e'];

// const movementsDescription = movements.map( (movement, i) => {
//   if (movement > 0) {
//     return `Movement ${i + 1}: You deposited ${movement}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`;
//   }
// })


// const movementsDescription = movements.map( (movement, i) => {
  
//     return `Movement ${i + 1}: You ${movement>0? 'deposited': 'withdrew'} ${movement}`
// })

// console.log(movementsDescription) // ["Movement 1: You deposited 200", "Movement 2: You deposited 450", "Movement 3: You withdrew 400", "Movement 4: You deposited 3000", "Movement 5: You withdrew 650", "Movement 6: You withdrew 130", "Movement 7: You deposited 70", "Movement 8: You deposited 1300"]

///////////////////////////////////////

// 10. Computing Usernames

// const user = 'Steven Thomas Williams';
// const username = user.toLowerCase().split(' ').map(name => name[0]).join(''); // stw
// console.log(username);

const createUsername = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join(''); // stw
  })
}
createUsername(accounts)
console.log(accounts)

///////////////////////////////////////

// 11. The filter Method

// const deposits = movements.filter(mov => mov > 0)
// console.log(movements) // [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(deposits) // [200, 450, 3000, 70, 1300]

// const depositsFor = []

// for(const mov of movements) {
//   if (mov > 0) depositsFor.push(mov)
// }

// console.log(depositsFor) // [200, 450, 3000, 70, 1300]

// const withdrawals = movements.filter(mov => mov < 0)
// console.log(withdrawals) // [-400, -650, -130]

///////////////////////////////////////

// 12. The reduce Method

// console.log(movements) // [200, 450, -400, 3000, -650, -130, 70, 1300]

// const balance = movements.reduce(function(acc, curr, i, arr){ // We need at least the accumulator and the current value
//   console.log(`Iteration ${i}: ${acc}`)
//   return acc + curr
// }, 0)

// console.log('BALANCE', balance) // BALANCE 3840


// Implementing a balance calculation for the application

const calcDisplayBalance = (movements) => {
  const balance = movements.reduce((acc, mov) => acc + mov,0)
  labelBalance.textContent = `${balance}€`
}

calcDisplayBalance(account1.movements)

// Maximum value

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc
  else return mov
}, movements[0])
console.log('MAX', max) // 3000

///////////////////////////////////////

// 13. Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = (ages) => {
//   const dogAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
//   // console.log('dogAge', dogAges)
//   const adultDogs = dogAges.filter(dog => dog >= 18)
//   console.log('adultDogs', adultDogs)
//   const avgAge = adultDogs.reduce((acc, age, i, arr)=> {
//     return (acc + age)/arr.length
//   })
//   return avgAge
// }

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
// console.log(avg1, avg2)

///////////////////////////////////////

// 14. The Magic of Chaining Methods

const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov*eurToUsd)
  .reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositsUSD) // 5522

const calcDisplaySummary = movements => {
  const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}€`

  const out = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * 1.2/100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0)
  labelSumInterest.textContent = `${interest}€`
}

calcDisplaySummary(account1.movements)