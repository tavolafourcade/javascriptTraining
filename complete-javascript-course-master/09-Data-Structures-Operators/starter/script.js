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

  order: function(starterIndex, mainIndex) {
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

  orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
  }
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

const arr = [7,8,9]

// If we want to create a new array with the previous elements
const badArray = [1,2,arr[0],arr[1],arr[2]]
console.log('badArray',badArray) // [1, 2, 7, 8, 9]

// We can use the spread operator to create a new array with the elements of the old array
const goodArray = [1,2,...arr]
console.log('goodArray',goodArray) // [1, 2, 7, 8, 9]

// This is also useful when we pass arguments into functions.
console.log(...goodArray) // 1 2 7 8 9

// Another example
const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log('newMenu',newMenu) // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Use cases for the spread operator
// 1. Copying arrays
const mainMenuCopy = [...restaurant.mainMenu] // This is a shallow copy, so if we change the original array, the copy will also change

// 2. Joining arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log('menu',menu) // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Pizza', 'Pasta', 'Risotto']

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Octavio'
const letters = [...str, ' ', 'Lafourcade']
console.log('letters',letters) // ['O', 'c', 't', 'a', 'v', 'i', 'o', ' ', 'Lafourcade']
console.log(...str) // O c t a v i o

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
const newRestaurant = {...restaurant, founder: 'Guiseppe', foundedIn: 1998} // The order of the properties doesn't matter in objects
console.log('newRestaurant',newRestaurant)

// We can also use the spread operator for making a copy of object
const restaurantCopy = {...restaurant} 
restaurantCopy.name = 'Ristorante Roma'
console.log('restaurantCopy1',restaurantCopy.name) // Ristorante Roma
console.log('restaurant1',restaurant.name) // Classico Italiano

restaurant.name = 'La Arequipeña'
console.log('restaurantCopy2',restaurantCopy.name) // Ristorante Roma
console.log('restaurant2',restaurant.name) // La Arequipeña