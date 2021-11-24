'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
//     console.log(time);
//     console.log(address);
//     console.log(starterIndex);
//     console.log(mainIndex);
//   },
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Tos mos kos',
//   mainIndex:2,
//   starterIndex:4

// })

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

// const {
//   name,
//   openingHours,
//   categories

// } = restaurant

// console.log(name);
// console.log(openingHours);
// console.log(categories);

// const {
//   name: restaurentName,
//   openingHours: hours,
//   categories: tags,
//   menu=['a','b','c']
// } = restaurant

// console.log(restaurentName,hours,tags,menu);

// let a=111;
// let b=222;

// const obj={
//   a:22, b:44,c:88
// };

// ({a,b}= obj)

// console.log(a,b);

// //nested
// const { fri: {open,close}}= openingHours
// // console.log(fri);
// console.log(open,close);

// const { fri: {open:o,close:c}}= openingHours
// // console.log(fri);
// console.log(o,c);

//Spread Operators

// console.log(object);

// const arr= [7,8,9]

// console.log([1,2, ...arr]);
// console.log([1,2,arr]);

// const newMenu= [...restaurant.mainMenu, 'Gnocci','Paneer' ]
// console.log(newMenu);

// /USE CASES UF SPREAD

// const mainMenuCopy= [...restaurant.mainMenu];

// const str= 'ashutosh'
// const letters= [...str, ' ', 'S. ']
// console.log(letters);

//REST Pattern and spread parameters

// const arr2 = [1,2 , ...[3,4,5]]
// console.log(arr2);

// const [a,b,...others]= [1,2,3,4,5,6]
// console.log(others);

// const [pizza, , risotto, ...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza);
// console.log(risotto);
// console.log(otherFood);

// let val1=0;
// console.log(val1 || 3);
// console.log(val1 ?? 3);

// const arr3= [1,2,3,43,45,5,6]

// for( let item of arr3)
// console.log(item);

// const myFoods= ['pizza', 'mango', 'rice', 'apple']
// // for (let food of myFoods.entries())
// // console.log(food);

// console.log( [...myFoods.entries()]);

// let obj={
//   myName:'ashu',
//   isAvaiable:false,
//   job:{
//     at:'Kanpur',
//   }

// }

// console.log(obj.job.hours?.isOpen || 'closed ');

// console.log(restaurant.anyFunction?.(1,2) ?? 'method does not exist ');

// const users=[
//   {name:'ashu', emial:'ashu.io'}
// ]

// console.log(users[0]?.name ?? 'user is empty');
// console.log(users[0]?.lastName ?? 'user is empty');

// const newObj = {
//   name: 'ashu',
//   age: 23,
//   location: 'ayodhya',
//   pin: 224203,
// };

// for(const item of newObj)
// console.log(item);

// console.log(Object.keys(newObj));
// console.log(Object.values(newObj));
// console.log(Object.entries(newObj));

// const entries = Object.entries(restaurant.openingHours)
// console.log(entries);

// for(const [key,{open, close}] of entries){
//   console.log(key, open, close);
// }

// const orderSet = new Set(['pasta', 'pizza', 'lozito', 'pizza']);

// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('apple'));
// console.log(orderSet.has('pasta'));
// console.log(orderSet.add('maggi'));
// console.log(orderSet.delete('maggi'));

// // console.log(new Set('ashutosh'));



// const rest = new Map()

// rest.set('name', 'Ashu Restaurent')
// rest.set(1, 'Ayodhya')
// rest.set(2, 'Bengluru')
// rest.set(true, 'Yes')
// rest.set(true, 'Yeaa')

// console.log(rest);

// console.log(rest.get(true));

// const newMap= new Map([['ashu','charawan', '224203'],[1,'c'],['vill','charaw']])

// console.log(newMap);
 

// /./WORKING ON STRINGS

const airline= 'TAP Air Portugal'
const plane = 'A320'

