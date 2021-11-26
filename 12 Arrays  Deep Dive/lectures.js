/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e']

//slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// let arr2 = arr.slice();
// console.log(arr2 === arr);
// let arr3= [...arr]
// console.log(arr3 === arr);

//SPLICE
// console.log(arr);
// console.log(arr.splice(1,0,'ashu'));
// console.log(arr);

//Reverse
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['s', 'a', 'f', 'p']
// console.log(arr2.reverse());
// console.log(arr2);

//Concat
// const letters = arr.concat(arr2)
// console.log(letters);

//JOIN

// console.log(letters.join('-'));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const mnovement of movements) {
//   if (mnovement > 0) {
//     console.log(`You deposited ${mnovement}`);
//   } else {
//     console.log(`You withdrew ${mnovement}`);
//   }
// }

// movements.forEach((movement,idx) => {
//    console.log(idx);
//   if (movement > 0) {
//       console.log(`You deposited ${movement}`);
//     } else {
//       console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // map
// currencies.forEach((val, idx) => {
//   console.log(idx + ' =>> ' + val);
// });

//set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'INR', 'EUR']);

// currenciesUnique.forEach((val, idx) => {
//   console.log(idx + ' =>> ' + val);
// });

// console.log("hello");

//MAP METHOD OF AN ARRAY

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// const eurToUsd = 1.1;


// const movementsUSD = movements.map(function (mov) {
//   return Math.ceil(mov * eurToUsd);
// });

// console.log(movementsUSD);


// const movementsUSDfor=[]
// for (const mov of movements) {
//   movementsUSDfor.push(Math.ceil(mov * eurToUsd));
  
// }

// console.log(movementsUSDfor);





const user = 'Steven Thomas Williams';

const username = user.toLowerCase().split(' ')

console.log(username);





