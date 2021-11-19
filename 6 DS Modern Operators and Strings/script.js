'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex,mainIndex){
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

// console.log(restaurant.order(2,0)
// );

// const [ starter, mainCourse]= restaurant.order(2,0)
// console.log(starter,mainCourse);


// const nested= [2,4,[5,6]]
// const [i, ,j]= nested
// console.log(i,j);


// const nested= [2,4,[5,6]]
// const [ i, , [j,k ]] = nested
// console.log(i,j,k);

//Default Values

// const [a,b,c]=[8,9]
// console.log(a,b,c);

// const [a,b,c=2]=[8,9,11]
// console.log(a,b,c);

// De Structuring Objects --


const {
  name,
  openingHours,
  categories

} = restaurant

console.log(name);
console.log(openingHours);
console.log(categories);


const {
  name: restaurentName,
  openingHours: hours,
  categories: tags,
  menu=['a','b','c']
} = restaurant


console.log(restaurentName,hours,tags,menu);

