'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // orderDelivery: function(obj){
  //   console.log(obj)
  // }

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },

  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
};


///////////////////////////////////////
// Destructuring Objects

// const { name, openingHours, categories } = restaurant;
// console.log('***Destructuring Objects***')
// console.log('NAME', name);
// console.log('OPENING HOURS', openingHours);
// console.log('CATEGORIES', categories);

// // What if we want the variable name to be different from the property name?

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
// } = restaurant;

// console.log('***What if we want the variable name to be different from the property name?***')
// console.log('RESTAURANT NAME', restaurantName);
// console.log('HOURS', hours);
// console.log('TAGS', tags);

// // Setting default values for variables that don't exist in the object

// const {
//   menu = [],
//   starterMenu: starters = []
// } = restaurant;

// console.log('***Setting default values for variables that dont exist in the object***')
// console.log('MENU', menu);
// console.log('STARTERS', starters);

// // Mutating variables while destructuring objects

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14};
// ({ a, b } = obj); // We need to wrap the destructuring in parenthesis because the curly braces are used for block statements

// console.log('***Mutating variables while destructuring objects***')
// console.log('A', a);
// console.log('B', b);

// // Nested objects

// const { sat } = openingHours;

// const { fri: { open: o, close: c } } = openingHours; // We can also destructure nested objects with even a different variable name

// console.log('***Nested objects***')
// console.log('SAT', sat);
// console.log('OPEN', open);
// console.log('CLOSE', close);

// // Destructuring in the arguments of a function

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// })

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1
// })

///////////////////////////////////////
// First exercise Destructuring

// Without destructuring:
// const arr = [2,3,4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// With destructuring:
// const [x,y,z] = arr
// console.log('x',x) // 2
// console.log('y',y) // 3
// console.log('z',z) // 4

// Second exercise Destructuring
// const [ first, second ] = restaurant.starterMenu
// console.log('first',first) // 'Focaccia'
// console.log('second',second) // 'Bruschetta'

// const [ first, ,second ] = restaurant.starterMenu
// console.log('first',first) // 'Focaccia'
// console.log('second',second) // 'Garlic Bread'

// Third exercise Destructuring
// Let's say we want to switch of the main menu and the secondary menu
// let [ main, ,secondary ] = restaurant.starterMenu;

// Without destructuring:
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary) // 'Garlic Bread' 'Focaccia'

// With destructuring:
// [ main, secondary ] = [secondary, main]
// console.log(main, secondary) // 'Focaccia' 'Garlic Bread'

// Fourth exercise Destructuring
// console.log(restaurant.order(2,0)) // ['Garlic Bread', 'Pizza']

// Receive 2 return values from a function
// const [ starter, main ] = restaurant.order(2,0)
// console.log(starter, main) // 'Garlic Bread' 'Pizza'

// Fifth exercise
// What happens if we have a nested array?

// const nested = [2,4,[5,6]]

// // const [i,,j] = nested
// // console.log(i,j) // 2, [5, 6]

// const [i,,[j,k]] = nested
// console.log(i,j,k) // 2, 5, 6

// Sixth exercise
// We can also set default values for the variables when we are extracting them. This is useful in the case when we don’t know the length of the array.

// const [p, q, r] = [8, 9]
// console.log(p, q, r) // 8 9 undefined

// So we can set default values
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r) // 8 9 1

///////////////////////////////////////
// The Spread Operator

// const arr = [7,8,9]

// // If we want to create a new array with the previous elements
// const badArray = [1,2,arr[0],arr[1],arr[2]]
// console.log('badArray',badArray) // [1, 2, 7, 8, 9]

// // We can use the spread operator to create a new array with the elements of the old array
// const goodArray = [1,2,...arr]
// console.log('goodArray',goodArray) // [1, 2, 7, 8, 9]

// // This is also useful when we pass arguments into functions.
// console.log(...goodArray) // 1 2 7 8 9

// // Another example
// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log('newMenu',newMenu) // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// // Use cases for the spread operator
// // 1. Copying arrays
// const mainMenuCopy = [...restaurant.mainMenu] // This is a shallow copy, so if we change the original array, the copy will also change

// // 2. Joining arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log('menu',menu) // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Pizza', 'Pasta', 'Risotto']

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Octavio'
// const letters = [...str, ' ', 'Lafourcade']
// console.log('letters',letters) // ['O', 'c', 't', 'a', 'v', 'i', 'o', ' ', 'Lafourcade']
// console.log(...str) // O c t a v i o

// If we try to use spread operator with literals it will not work because is not a place that expects multiple values separated by commas
// console.log(`${...str} Lafourcade`) // SyntaxError: Unexpected token '...'

// Real world example with iterable
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?')
// ]

// console.log('ingredients',ingredients)

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients) 

// Example with Objects (Since ES18)
// const newRestaurant = {...restaurant, founder: 'Guiseppe', foundedIn: 1998} // The order of the properties doesn't matter in objects
// console.log('newRestaurant',newRestaurant)

// // We can also use the spread operator for making a copy of object
// const restaurantCopy = {...restaurant} 
// restaurantCopy.name = 'Ristorante Roma'
// console.log('restaurantCopy1',restaurantCopy.name) // Ristorante Roma
// console.log('restaurant1',restaurant.name) // Classico Italiano

// restaurant.name = 'La Arequipeña'
// console.log('restaurantCopy2',restaurantCopy.name) // Ristorante Roma
// console.log('restaurant2',restaurant.name) // La Arequipeña

///////////////////////////////////////
// Rest Pattern and Parameters

// 1. Destructuring

// Spread operator, because on the right side of =
// const arr = [1,2,...[3,4]] // [1, 2, 3, 4]

// Rest operator, because on the left side of =
// const [a, b, ...others] = [1,2,3,4,5] // a = 1, b = 2, others = [3,4,5]

// const [pizza,, rissoto, ...others] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, rissoto, others) // Pizza Risotto (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Rest Pattern with Objects
// const {sat, ...weekdays} = restaurant.openingHours
// console.log(sat, weekdays) // {open: 11, close: 23} {thu: {…}, fri: {…}}

// 2. Functions
// const add = function(...numbers) {
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i]
//   console.log(sum)
// }

// add(2,3) // 5
// add(5,3,7,2) // 17
// add(8,2,5,3,2,1,4) // 25

// const x = [23,5,7]
// add(...x) // 35

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach') // mushrooms (3) ['onion', 'olives', 'spinach']
// restaurant.orderPizza('mushrooms') // mushrooms (0) []

///////////////////////////////////////
// Short Circuiting (&& and ||)

// OR operator
// console.log('-----OR-----')
// console.log(3 || 'Octavio') // 3
// console.log('' || 'Octavio') // Octavio
// console.log(true || 0) // true
// console.log(undefined || null) // null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null) // Hello

// restaurant.numGuests = 23
// // Since restaurant.numGuests doesn't exist (undefined)
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
// console.log(guests1) // 10

// const guess2 = restaurant.numGuests || 10
// console.log(guess2) // 10

// // AND operator
// console.log('-----AND-----')
// console.log(0 && 'Octavio') // 0
// console.log(7 && 'Octavio') // Octavio

// console.log('Hello' && 23 && null && 'Octavio') // null

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach') // mushrooms (1) ['spinach']
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach') // mushrooms (1) ['spinach']

// console.log(undefined || null || 'Hello' || '') // Hello

// console.log('hello' && 5 && 'AND') // AND

///////////////////////////////////////
// The Nullish Coalescing Operator (??)

// restaurant.numGuests = 0
// const guests = restaurant.numGuests || 10
// console.log(guests) // 10

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10
// console.log(guestCorrect) // 0

///////////////////////////////////////
// Logical Assignment Operators

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// }

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni',
// }

// rest1.numGuests = rest1.numGuests || 10 // 20
// rest2.numGuests = rest2.numGuests || 10 // 10

// console.log(rest1)
// console.log(rest2)

// // OR Assignment Operator
// rest1.numGuests ||= 10 // 20
// rest2.numGuests ||= 10 // 10

// // Nullish Assignment Operator
// rest1.numGuests ??= 10 // 20
// rest2.numGuests ??= 10 // 10

// // AND Assignment Operator

// // rest2.owner = rest2.owner && 'Anonymous'
// // console.log(rest2)

// rest2.owner &&= 'Anonymous'
// console.log(rest2)


// // rest1.owner = rest1.owner && 'Anonymous'
// // console.log(rest1) // {name: "Capri", numGuests: 20, owner: undefined}

// rest1.owner &&= 'Anonymous'
// console.log(rest1) // {name: 'Capri', numGuests: 20}


///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const [ players1, players2 ] = game.players
// console.log(players1, players2)

// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // const gk = game.players[0][0]
// // const fieldPlayers = [, ...game.players[0].slice(1)] // [ 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski' ]
// const [gk, ...fieldPlayers] = players1
// console.log(gk, fieldPlayers)

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// // const allPlayers = [...game.players[0],...game.players[1]] // [ 'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze' ]
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers)

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'] // [ 'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Thiago', 'Coutinho', 'Perisic' ]

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // const { team1, x: draw, team2 } = game.odds // 1.33 3.25 6.5
// const {odds:{team1, x: draw, team2}} = game
// console.log(team1) // 1.33
// console.log(draw) // 3.25

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// const printGoals = function(...names){
//   console.log(...names)
//   console.log(`${names.length} goals were scored`)
// }
// printGoals(...game.scored) // Octavio Laura

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// team1 < team2 && console.log('Team 1 is more likely to win')
// team1 > team2 && console.log('Team 2 is more likely to win')

///////////////////////////////////////
// The for-of Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for (const item of menu) console.log(item)

// // Getting the index of the item
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`)
// }

// for (const [i, item] of menu.entries()) {
//   console.log(`${i + 1}: ${item}`)
// }

// console.log([...menu.entries()])

///////////////////////////////////////
// Enhanced Object Literals

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[3]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day - ${2 + 4}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// }

// const restaurant2 = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours
// }

// console.log(restaurant2)


///////////////////////////////////////
// Optional Chaining (?.)

// if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// What if we don't know if openingHours exists?
// if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// With optional chaining
// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);

// Another example with the Nullish operator
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // Loop over days and log to the console whether the restaurant is open or closed on each of the days

// for (const day of days) {
//   // restaurant.openingHours[day]?.open && console.log(`${day}: Open`)
  
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`On day ${day}, we open at: ${open}`)
// }

// Working with methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist')

// console.log(restaurant.orderRissoto?.(0,1) ?? 'Method does not exist')

// // Working with Arrays
// const users = [{name: 'Octavio', email: 'hello@gmail.com'}]

// // Getting the name of the first element of the array
// console.log(users[0]?.name ?? 'User array empty')

// // Regular way without optional chaining
// if (users.length > 0) console.log(users[0].name)
// else console.log('User array empty')

///////////////////////////////////////

// Looping Objects: Object Keys, Values and Entries

// for (const day of Object.keys(restaurant.openingHours)){
//   console.log(day)
// }

// Property names
// const properties = Object.keys(restaurant.openingHours)
// let openStr = `We are open on ${properties.length} days: `


// for (const day of properties){
//   openStr += `${day}, `
// }

// console.log(openStr)

// Property values

// const values = Object.values(restaurant.openingHours)
// console.log(values)

// Entries object

// const entries = Object.entries(restaurant.openingHours)
// // console.log(entries)

// for (const [key,{open, close}] of entries){
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// }

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };


// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const player of game.scored){
//   console.log(`Goal ${game.scored.indexOf(player) + 1}: ${player}`)
// }

// // Official Solution
// for (const [i,player] of game.scored.entries()){
//   console.log(`Goal ${i + 1}: ${player}`)
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// const values = Object.values(game.odds)
// console.log(values)
// let sum = 0

// for (const value of values){
//   sum += value
// }

// const avg = sum /values.length
// console.log('AVG', avg)

// // Official Solution
// const odds = Object.values(game.odds)
// let average = 0
// for (const odd of odds) average += odd

// average /= odds.length
// console.log('AVERAGE', average)

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// console.log('ODDS',values)

// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`)
// console.log(`Odd of draw: ${game.odds.x}`)
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`)

// // Official Solution
// for (const [team, odd] of Object.entries(game.odds)){
//   const teamStr = team === 'x' ? 'draw' : game[team]
//   console.log(`Odd of victory ${teamStr}: ${odd}`)
// }

// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

// // {
// //   Gnarby: 1,
// //   Hummels: 1,
// //   Lewandowski: 2
// // }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log('scorers',scorers)


///////////////////////////////////////
// Sets

// Set is a collection of unique values
// const ordersSet = new Set(['pasta','pizza','pizza','rissoto','pasta'])
// console.log(ordersSet) // Set { 'pasta', 'pizza', 'rissoto' }

// // Get the length of the set
// console.log(ordersSet.length) // undefined
// console.log(ordersSet.size)  // 3

// // Check if a value is in the set
// console.log(ordersSet.has('pasta')) // true
// console.log(ordersSet.has('bread')) // false

// // Add new elements to a set
// ordersSet.add('bread')
// ordersSet.add('bread')
// console.log(ordersSet) // Set { 'pasta', 'pizza', 'rissoto', 'bread' }

// // Delete elements from a set
// ordersSet.delete('pasta')
// console.log(ordersSet) // Set { 'pizza', 'rissoto', 'bread' }

// Delete all the elements from a set
// ordersSet.clear()
// console.log(ordersSet) // Set {}

// Loop over a Set

// for (const order of ordersSet)  console.log(order) // pasta pizza rissoto

// USE CASES
// Example 1
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Chef', 'Waiter']

// const staffUnique = [...new Set(staff)]
// console.log(staffUnique) // [ 'Waiter', 'Chef', 'Manager' ]

// console.log((new Set(staff)).size) // 3

///////////////////////////////////////
// 15. Maps: Fundamentals

// const rest = new Map()

// rest.set('name', 'Classico Italiano')
// rest.set(1, 'Firenze, Italy')
// console.log(rest.set(2, 'Lisbon, Portugal'))

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed')

// console.log(rest)

// // REading data from a map
// console.log(rest.get('name')) // Classico Italian

// // Example 1: Compare the open and close time with the current time
// const time = 21

// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))) // We are open

// // Check if a map contains a certain key
// console.log(rest.has('categories')) // true

// // Delete an element from a map
// rest.delete(2)

// console.log(rest)


// // Getting the size of a map
// console.log(rest.size) // 7

// // Delete all the elements from a map
// // rest.clear()
// console.log(rest)

// // Use array and objects as map keys
// rest.set([1,2], 'Test')
// console.log(rest)
// console.log(rest.size)

// console.log(rest.get([1,2])) // undefined

// // In order to not get undefined
// const arr = [1,2,3]
// rest.set(arr, 'Test2')
// console.log(rest.get(arr)) // Test2

// // Select an h1 element from the document
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest)

///////////////////////////////////////
// 16. Maps: Iteration

// const question = new Map([
//   ['question', 'What is the best programming language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again']
// ])

// console.log(question)

// // Convert Object to Map
// console.log(Object.entries(restaurant.openingHours))

// const hoursMap = new Map(Object.entries(restaurant.openingHours))

// console.log(hoursMap)

// // Loop over a Map
// // Quiz App
// console.log(question.get('question'))
// for (const [key, value] of question){
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)
// }

// const answer = Number(prompt('Your answer'))
// console.log(answer === question.get('correct') ? question.get('correct') : question.get('try again'))

// // Convert map to array
// console.log([...question])
// console.log('entries', [...question.entries()])
// console.log('keys',[...question.keys()])
// console.log('values',[...question.values()])


///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// const events = [...new Set(gameEvents.values())]
// console.log('EVENTS',events)

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// gameEvents.delete(64)
// console.log('gameEvents',gameEvents)

// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(gameEvents.size)
// const time = [...gameEvents.keys()].pop()
// const eventsAvg = time / gameEvents.size
// console.log(`An event happened, on average, every ${eventsAvg} minutes`)

// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //      [FIRST HALF] 17: ⚽️ GOAL

// for (const [key, value] of gameEvents) {
//   const term = key < 45 ? '[FIRST HALF]' : '[SECOND HALF]'
//   console.log(`${term} ${key}: ${value}`)
// }

///////////////////////////////////////

// 19. Working with Strings - Part 1

// const airline = 'TAP Air Portugal'
// const plane = 'A320'

// console.log(plane[0]) // A
// console.log(plane[1]) // 3
// console.log('B737'[0]) // B

// console.log(airline.length) // 16

// // indexOf()
// console.log(airline.indexOf('r')) // 6
// console.log(airline.indexOf('Portugal')) // 8

// // lastIndexOf()
// console.log(airline.lastIndexOf('r')) // 10

// // slice()
// console.log(airline.slice(4)) // Air Portugal
// console.log(airline.slice(4, 7)) // Air

// // Get the first word
// console.log(airline.slice(0, airline.indexOf(' '))) // TAP

// // Get the last word
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// // We can start from the end of the string
// console.log(airline.slice(-2)) // al

// console.log(airline.slice(1, -1)) // AP Air Portuga

// // Example 1: Writes a function that receives an airplane seat and logs to the console whether is a middle seat or not.
// const checkMiddleSeat = (seat) => {
//   // B and E are the middle seats
//   const s = seat.slice(-1)
//   if (s === 'B' || s === 'E') console.log('Middle seat')
//   else console.log('You got lucky')
// }

// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')

// // Boxing
// console.log(new String('Octavio'))
// console.log(typeof new String('Octavio')) // object
// console.log(typeof new String('Laura').slice(1)) // string

///////////////////////////////////////

// 20. Working with Strings - Part 2

// const airline = 'TAP Air Portugal'
// console.log(airline.toLowerCase()) // tap air portugal
// console.log(airline.toUpperCase()) // TAP AIR PORTUGAL

// // Fix capitalization in name
// const passenger = 'oCTaVio'
// const passengerLower = passenger.toLowerCase()
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
// console.log(passengerCorrect)

// // Comparing email
// const email = 'octavio@gmail.com'
// const loginEmail = '  OCTAVIO@gmail.Com \n'

// const lowerEmail = loginEmail.toLowerCase() 
// const trimmedEmail = lowerEmail.trim()
// console.log(trimmedEmail)

// const normalizedEmail = loginEmail.toLowerCase().trim()
// console.log(normalizedEmail)
// console.log(email === normalizedEmail) // true

// // Replacing parts of a string
// const priceGB = '288,97£'
// const priceUS = priceGB.replace(',','.').replace('£','$')
// console.log(priceUS)

// // Replacing entire words
// const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
// console.log(announcement.replace('door','gate')) // All passengers come to boarding gate 23. Boarding door 23!
// console.log(announcement.replaceAll('door','gate')) // All passengers come to boarding gate 23. Boarding gate 23!

// // We can also user regular expressions
// console.log(announcement.replaceAll(/door/g,'gate')) // All passengers come to boarding gate 23. Boarding gate 23!


// // Booleans - includes(), startsWith(), endsWith()
// const plane = 'A320neo'
// console.log(plane.includes('A320')) // true
// console.log(plane.includes('Boeing')) // false

// console.log(plane.startsWith('A320')) // true
// console.log(plane.startsWith('Boeing')) // false

// const plane2 = 'Airbus A320neo'
// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')){
//   console.log('Part of the NEW Airbus family')
// }

// // Practice exercise
// const checkBaggage = function(items){
//   const baggage = items.toLowerCase()
//   if (baggage.includes('knife') || baggage.includes('gun')){
//     console.log('You are NOT allowed on board')
//   } else {
//     console.log('Welcome aboard!')
//   }
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife')
// checkBaggage('Socks and camera')
// checkBaggage('Got some snacks and a gun for protection')

///////////////////////////////////////

// 21. Working with Strings - Part 3

// Split
// console.log('a+very+nice+string'.split('+')) // ['a', 'very', 'nice', 'string']
// console.log('Octavio Lima'.split(' ')) // ['Octavio', 'Lima']

// const [firstName, lastName] = 'Octavio Lafourcade'.split(' ')

// // Join
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
// console.log(newName) // Mr. Octavio LAFOURCADE

// // We can use it for capitalize a name

// const capitalizeName = function(name){
//   const names = name.split(' ')
//   const namesUpper = []

//   for(const word of names) {
//     namesUpper.push(word[0].toUpperCase() + word.slice(1))
//   }
//   console.log(namesUpper.join(' '))
// }

// capitalizeName('jessica ann smith davis') // Jessica Ann Smith Davis

// // Alternative:

// const capitalizeName2 = function(name){
//   const names = name.split(' ')
//   const namesUpper = []

//   for(const word of names) {
//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()))
//   }
//   console.log(namesUpper.join(' '))
// }

// capitalizeName2('jessica ann smith davis') // Jessica Ann Smith Davis


// // Padding a string
// const  message = 'Go to gate 23!'
// console.log(message.padStart(25, '+')) // +++++++++++Go to gate 23!
// console.log('Octavio'.padStart(10, '+')) // +++Octavio

// console.log('Octavio'.padEnd(10, '+')) // Octavio+++

// console.log(message.padStart(25, '+').padEnd(35, '+')) // +++++++++++Go to gate 23!++++++++++++

// // Example 1 with padding

// const maskCreditCard = function(number){
//   const str = number + '' // convert to string
//   const last = str.slice(-4)
  
//   return last.padStart(16, '*')
// }

// console.log(maskCreditCard(1234567890123456)) // ************3456


// // Repeat
// const message2 = 'Bad weather... All Departures Delayed... ' 
// console.log(message2.repeat(2)) // Bad weather... All Departures Delayed... Bad weather... All Departures Delayed...

// const planesInLine = function(n){
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`)
// }

// planesInLine(5) // There are 5 planes in line ✈✈✈✈✈

///////////////////////////////////////

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', ()=>{
//   const text = document.querySelector('textarea').value; // get the text from the textarea
//   // 1. Split the text considering _
//   // 2. Convert the first letter of the second word to uppercase
//   // 3. Join the words
//   // 4. Log the result
//   const rows = text.split('\n')
//   const rowsTrimmed = rows.map(row => {
//     return row.trim()
//   })

//   rowsTrimmed.forEach((row, index) => {
//     let [first, second] =row.toLowerCase().split('_')
//     second = second.replace(second[0], second[0].toUpperCase())

//     const rowCamelCase = first + second
//     const output = rowCamelCase.padEnd(20, ' ') + '✅'.repeat((index + 1))
//     console.log(output)
//   })
// })

// Official solution
document.querySelector('button').addEventListener('click', ()=>{
  const text = document.querySelector('textarea').value; // get the text from the textarea
  const rows = text.split('\n')
  
  for(const row of rows){
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log('second', second)
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    console.log(output.padEnd(20) + '✅'.repeat(rows.indexOf(row) + 1))
  }
  })