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
};

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
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r) // 8 9 1