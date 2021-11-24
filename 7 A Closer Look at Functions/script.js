// "use strict";
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split("");
//   return [first.toUpperCase(), ...other].join("");
// };

// console.log(upperFirstWord("ashu"));
// //higher Order Function
// const transformer = function (str, fn) {
//   console.log(`original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed By: ${fn.name}`);
// };

// // transformer("kava is the best ", upperFirstWord);
// // transformer("I am monk", oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// console.log(greet("hey")('ashu'));

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${flightNum} ${this.iataCode}  `
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}  `, name });
  },
};

// lufthansa.book(237, 'Ashutosh')
// lufthansa.book(157, 'Himanshu')

// console.log(lufthansa);

const eurowings = {
  airline: "Euro",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'lovely')  // werror
// book.call(eurowings, 23, 'Vivek')
// console.log(eurowings);
// book.call(lufthansa,111,'Garima')
// console.log(lufthansa);

const swiss = {
  airline: "Vistar",
  iataCode: "VIS",
  bookings: [],
};

// book.call(swiss, 501, "Lopu");
// console.log(swiss);

// book.apply(swiss, [501, "Gopu"]);

// book.call(swiss, ...arrayName)

// /bind----------/

// const bookEW = book.bind(eurowings);
// bookEW(456, 'Madvin')

// console.log(swiss);
// console.log(eurowings);
// console.log(lufthansa);

lufthansa.planes = 200;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();
// document
//   .querySelector(".buy")
//     .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// console.log(whatIsThis());

// const secureBooking = function () {
//     let passengerCount = 0;
//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passenegers`);
//     }
// }

// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

//ex 1

// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a*2);
//     }
// }

// const h = function () {
//     const b = 777;
//     f = function () {
//       console.log(b * 2);
//     };
// }
// g()
// f();
// h();
// f();

//ex 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(() => {
    console.log(`We r now boarding all ${n} passengers`);
    console.log(`there are 3 goups each with ${perGroup}`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};


boardPassengers(180,3)