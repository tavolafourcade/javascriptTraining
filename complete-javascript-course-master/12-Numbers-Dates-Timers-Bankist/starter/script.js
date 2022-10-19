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
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
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

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? account.movements.slice().sort((a, b) => a - b) : account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[i]);

    const day = `${date.getDate()}`.padStart(2,0)
    const month = `${date.getMonth() + 1}`.padStart(2,0)
    const year = date.getFullYear()

    const displayDate = `${day}/${month}/${year}`

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed()}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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

///////////////////////////////////////
// Event handlers
let currentAccount;

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

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

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
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
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

const future = new Date(2037, 10, 19, 15, 23) // Thu Nov 19 2037 15:23:00 GMT-0500 (hora estándar de Perú)

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
future.setFullYear(2040)

///////////////////////////////////////

// 7. Adding Dates to "Bankist" App

// Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// Create current date
const now = new Date()
const day = `${now.getDate()}`.padStart(2,0)
const month = `${now.getMonth() + 1}`.padStart(2,0)
const year = now.getFullYear()

const hour = `${now.getHours() + 1}`.padStart(2,0)
const minutes = `${now.getMinutes() + 1}`.padStart(2,0)

// day/month/year
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`
