'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2022-10-10T18:49:59.371Z',
    '2022-10-20T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatMovementDate = (date, locale) => {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))

  const dayPassed = calcDaysPassed(new Date(), date)
  // console.log('dayPassed',dayPassed)

  if(dayPassed === 0) return 'Today'
  if(dayPassed === 1) return 'Yesterday'
  if(dayPassed <= 7) return `${dayPassed} days ago`
  
  // const day = `${date.getDate()}`.padStart(2,0)
  // const month = `${date.getMonth() + 1}`.padStart(2,0)
  // const year = date.getFullYear()
  
  // return `${day}/${month}/${year}`
  return new Intl.DateTimeFormat(locale).format(date)
  

}

const formatCurrency = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? account.movements.slice().sort((a, b) => a - b) : account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[i]);
    
    const displayDate = formatMovementDate(date, account.locale)

    
    const formattedMov = formatCurrency(mov, account.locale, account.currency)
    // console.log('formattedMov',formattedMov)
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  const formattedBalance = formatCurrency(acc.balance, acc.locale, acc.currency)

  labelBalance.textContent = `${formattedBalance}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const formattedIncome = formatCurrency(incomes, acc.locale, acc.currency)

  labelSumIn.textContent = `${formattedIncome}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const formattedOut = formatCurrency(Math.abs(out), acc.locale, acc.currency)


  labelSumOut.textContent = `${formattedOut}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  const formattedInterest = formatCurrency(interest, acc.locale, acc.currency)

  labelSumInterest.textContent = `${formattedInterest}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = () => {

  const tick = () => {
    const minutes = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${minutes}:${sec}`;
    
    // When 0 seconds, stop timer and log out user
    if(time === 0) {
      clearInterval(timer)

      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
  
    }

    // Decrease 1s
    time--
  }
  // Set time to 5 minutes
  let time = 120;
  // Call the timer every second
  tick()
  const timer = setInterval(tick, 1000)
  return timer
}

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// Experimenting with the API
const nowDate = new Date()

// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long', //numeric or 2-digit
//   year: 'numeric',
//   weekday: 'long' //short or narrow
// }

// const locale = navigator.language
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(nowDate) // This will create a formatting for english US language

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric', //long or 2-digit
  year: 'numeric',
  // weekday: 'long' //short or narrow
}

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    
    const now = new Date()
    // const options = {
    //   hour: 'numeric',
    //   minute: 'numeric',
    //   day: 'numeric',
    //   month: 'numeric', //long or 2-digit
    //   year: 'numeric',
    //   // weekday: 'long' //short or narrow
    // }
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now) // This will create a formatting for english US language
    

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer)

    timer = startLogOutTimer()

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());


    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer)
    timer = startLogOutTimer()
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {// Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);}, 3000)

    // Reset timer
    clearInterval(timer)
    timer = startLogOutTimer()

  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// 1. Converting and Checking Numbers

// console.log(23 === 23.0) // true

// console.log(0.1 + 0.2 === 0.3) // false - This is an error in JS that is not fixed yet

// // Converting strings to numbers
// console.log(Number('23')) // 23
// console.log(+'23') // 23 - This is a shortcut to convert a string to a number

// // Parsing
// console.log(Number.parseInt('30px')) // 30
// console.log(Number.parseInt('e23')) // NaN

// console.log(Number.parseInt('30px', 10)) // 30
// console.log(Number.parseInt('e23', 10)) // NaN

// console.log(Number.parseFloat('2.5rem')) // 2.5
// console.log(Number.parseInt('2.5rem')) // 2

// // Checking if value is NaN
// console.log(Number.isNaN(20)) // false
// console.log(Number.isNaN('20')) // false
// console.log(Number.isNaN(+'20X')) // true NaN
// console.log(Number.isNaN(23 / 0)) // false Infinity (not NaN)

// // Checking if value is a number
// console.log(Number.isFinite(20)) // true
// console.log(Number.isFinite('20')) // false
// console.log(Number.isFinite(+'20X')) // false it is NaN
// console.log(Number.isFinite(23 / 0)) // false Infinity (not a number)

// // Checking if value is an integer
// console.log(Number.isInteger(20)) // true
// console.log(Number.isInteger(20.0)) // true
// console.log(Number.isInteger(20.1)) // false
// console.log(Number.isInteger(23 / 0)) // false Infinity (not an integer)


///////////////////////////////////////

// 2. Math and Rounding

// Square root

// console.log(Math.sqrt(25)) // 5
// console.log(25 ** (1 / 2)) // 5

// console.log(Math.max(5, 18, 23, 11, 2)) // 23
// console.log(Math.max(5, 18, '23', 11, 2)) // 23
// console.log(Math.max(5, 18, '23px', 11, 2)) // NaN

// console.log(Math.min(5, 18, 23, 11, 2)) // 2

// console.log(Math.PI) // 3.141592653589793

// Calculate area of a circle

// console.log(Math.PI * Number.parseFloat('10px') ** 2) // 314.1592653589793

// Generate random number

// console.log(Math.random()) // 0.20843075451160953

// console.log(Math.trunc(Math.random() * 6) + 1) // 1-6

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min
// console.log(randomInt(10, 20)) // 10-20

// Rounding integers

// console.log(Math.trunc(23.8)) // 23

// console.log(Math.round(23.3)) // 23

// console.log(Math.ceil(23.3)) // 24

// console.log(Math.floor(23.9)) // 23
// console.log(Math.floor('23.9')) // 23

// console.log(Math.trunc(-23.30)) // -23
// console.log(Math.floor(-23.30)) // -24

// // Rounding decimals

// console.log((2.7).toFixed(0)) // 3
// console.log((2.7).toFixed(3)) // 2.700
// console.log((2.345).toFixed(2)) // 2.35
// console.log(+(2.345).toFixed(2)) // 2.35 as a number

///////////////////////////////////////

// 3. The Remainder Operator

// console.log(5 % 2) // 1

// console.log(5 / 2) // 2.5 => 5 = 2 * 2 + 1

// console.log(8 % 3) // 2

// console.log(8 / 3) // 2.6666666666666665 => 8 = 2 * 3 + 2


// const isEven = n => n % 2 === 0
// console.log(isEven(8)) // true
// console.log(isEven(23)) // false

// // Example with our application

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     // 0, 2, 4, 6
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     // 0, 3, 6, 9
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

///////////////////////////////////////

// 4. Numeric Separators

// 287,460,000,000

// const diameter = 287_460_000_000
// console.log(diameter) // 287,460,000,000

// const priceCents = 345_99
// console.log(priceCents) // 345,99

// const transferFee1 = 15_00
// console.log(transferFee1) // 15,00

// const transferFee2 = 1_500 // 1,500

// console.log(Number('230_000')) // NaN
// console.log(parseInt('230_000')) // 230


///////////////////////////////////////

// 5. BigInt

// console.log(2 ** 53 - 1) // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// Creating BigInt
// console.log(4384384838483843442343423464546456546546456546456546323132n) // Returns a BigInt

// console.log(BigInt(4384384838483843442343423464546456546546456546456546323132))

// Operations

// console.log(10000n + 10000n) // 20000n
// console.log(10000n * 10000n) // 100000000n

// Exceptions
// console.log(20n > 15) // true
// console.log(20n === 20) // false
// console.log(typeof 20n) // bigint
// console.log(20n == '20') // true

const huge = 4384384838483843442343423464546456546546456546456546323132n
// console.log(huge + ' is really big')

// Divisions

// console.log(10n / 3n) // 3n


///////////////////////////////////////

// 6. Creating Dates

// Create a date
// const now = new Date()
// console.log(now) // Mon Oct 17 2022 09:52:33 GMT-0500 (hora estándar de Perú)

// console.log(new Date('Dec 24, 2015')) // Thu Dec 24 2015 00:00:00 GMT-0500 (hora estándar de Perú)

// Working with the application project

// console.log(new Date(account1.movementsDates[0])) // Mon Nov 18 2019 16:31:17 GMT-0500 (hora estándar de Perú)

// console.log(new Date(2037, 10, 19, 15, 23, 5)) // Thu Nov 19 2037 15:23:05 GMT-0500 (hora estándar de Perú)

// Working with date methods

// const future = new Date(2037, 10, 19, 15, 23) // Thu Nov 19 2037 15:23:00 GMT-0500 (hora estándar de Perú)

// get methods
// console.log(future.getFullYear()) // 2037
// console.log(future.getMonth()) // 10
// console.log(future.getDate()) // 19
// console.log(future.getDay()) // 4 Day of the week
// console.log(future.getHours()) // 15
// console.log(future.getMinutes()) // 23
// console.log(future.getSeconds()) // 0

// console.log(future.toISOString()) // 2037-11-19T20:23:00.000Z International standard
// console.log(future.getTime()) // 2142274980000 Time stamp
// console.log(new Date(2142274980000)) // Thu Nov 19 2037 15:23:00 GMT-0500 (hora estándar de Perú)

// console.log(Date.now()) // 1634561000000 Time stamp of the current date

// set methods
// future.setFullYear(2040)

///////////////////////////////////////

// 7. Adding Dates to "Bankist" App

// Fake always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// Create current date
const now = new Date()

// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'numeric', //long or 2-digit
//   year: 'numeric',
//   // weekday: 'long' //short or narrow
// }
labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(nowDate) // This will create a formatting for english US language

const locale = navigator.language
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(nowDate) // This will create a formatting for english US language


// const day = `${now.getDate()}`.padStart(2,0)
// const month = `${now.getMonth() + 1}`.padStart(2,0)
// const year = now.getFullYear()

// const hour = `${now.getHours() + 1}`.padStart(2,0)
// const minutes = `${now.getMinutes() + 1}`.padStart(2,0)

// day/month/year
// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`

///////////////////////////////////////

const future = new Date(2037, 10, 19, 15, 23) // Thu Nov 19 2037 15:23:00 GMT-0500 (hora estándar de Perú)
// console.log(Number(future)) // 2142274980000
// console.log(+future) // 2142274980000

// Create a function that takes 2 dates and returns the difference in days
const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1)

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24)) // 10
// console.log(days1) // 864000000 miliseconds
// console.log(days1 / (1000*60*60*24)) // 10 days

// Working with our application

// If one movement happened today display "today" instead of the current date.
// This was done in the application function 

///////////////////////////////////////

// 8. Operations with Dates
// Developed along the code

// 9. Internationalizing Dates (Intl)
// Developed along the code

// 10. Internationalizing Numbers (Intl)

const num = 3884764.23

const options2 = {
  style: 'unit', // percent, currency
  unit: 'mile-per-hour', // celsius
  currency: 'EUR',
  // useGrouping: false 
}
// console.log('US: ', new Intl.NumberFormat('en-US',options2).format(num)) // 3,884,764.23 mph
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options2).format(num)) // 3.884.764,23 mi/h
// console.log('Syria: ', new Intl.NumberFormat('ar-SY', options2).format(num)) // ٣٬٨٨٤٬٧٦٤٫٢٣
// console.log('Navigator: ', new Intl.NumberFormat(navigator.language, options2).format(num)) // 3,884,764.23 mi/h

///////////////////////////////////////

// 11. Timers: setTimeout and setInterval

// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients) // This will execute the function after 3 seconds
console.log('Waiting...')

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer) // This will stop the timer

// setInterval
setInterval(() => {
  const now = new Date()
  console.log(now)
}, 1000)