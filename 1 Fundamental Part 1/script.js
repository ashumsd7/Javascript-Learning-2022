// let js= "amazing";
// if(js==='amazing')
//  console.log('Javascript is easy')



// let firstName= "Lovely"
//varibale names can't start with numbers
// it can start with $ or _  or letters \ no numbers are allowed
// let 4var= 'ashu'


//some reserved keywords are also not allowed
// let new = 34;


// let $function = 34;


// let PI= 3.14;

// ----------------DATA TYPES----------------

// Object / primitive datatypes


// console.log(typeof undefined);



// let age= 30;
// age= 32;

// const birthDate= 1990;
// birthDate= 1999;

// const job;


// myName= 'ashu';

// console.log(myName);

// --------OPERATORS

// let x= 100;
// console.log(--x);

// console.log(2**2**5);

// let x,y;
// x=y=25-10-5;
// console.log(x,y);


//EXCERCISE

// let markMass= 78;
// let johnMass= 92;
// let markHeight= 1.69;
// let johnHeight= 1.95;

// let markBMI= markMass/(markHeight**2)
// let johnBMI= johnMass/(johnHeight**2)

// console.log(markBMI,johnBMI);

// -----String and Template Literals-------
// const firstName= 'Jonas'
// const job= 'engineer'
// const birthDate='1999'
// const year =2037;


// const jonas= "I am " + firstName + " a " + (year- birthDate) + " years old " + job + " !"
// console.log(jonas);

// //using template literals
// const jonasNew= `I am ${firstName} , a ${year-birthDate} years old ${job} !`
// console.log(jonasNew);

// console.log(`hi my 
// name 
// is 
// ashutosh
// `);

// Type Conversion and Coercion ----

// let inputYear ='1991';
// console.log(inputYear + 12)  
// console.log(Number(inputYear) + 12)  
 // we are converting string into number using Number function

// console.log(Number('1234'));

// console.log(String(222));

// console.log(' I am ' + 23 + ' years old.');


// console.log('1'+2);

// console.log('3'-'3');

// console.log('3' * '3');

// console.log('3' /'3');

// console.log('23'>'33');


// ## Truthy and Falsy Values---------------

// in JS there are 5 falsy values

// 0

// ''   ( empty string)

// undefined

// null

// NaN



// console.log(Boolean(0));
// console.log(Boolean({}));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(12));
// console.log(Boolean('ashu'));
// console.log(Boolean(undefined));

// if(0)
// console.log("yes");

// console.log(18=='18');
// console.log(18==='18');

// const favrt= prompt('what is your favrt number')
// console.log(favrt);

// Switch Statements-

// const day= 'friday'

// switch(day){
//     case 'monday' : // day === 'monday'
//         console.log("Plan course structure!!");
//          console.log("its monday, a new day");
//     break;

//     case 'tuesday':
//         console.log("Prepare for gym");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples');
//         break;
//     case 'friday':
//         console.log("record Videos");
//         // break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Enjoy your day weekend its holidays");
//         break;
//     default:
//         console.log("Its default");
    

// }
  

// Conditional Operator Ternary Operator---


// 22<=23 ? console.log('its true') : console.log("its false");

let enteredPin= 224203
let checkPIN = enteredPin===224203 ? "its from UP" :' Its from other city'

console.log(checkPIN);









