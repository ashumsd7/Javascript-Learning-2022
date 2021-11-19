'use strict';

// function calcAge(birthYear){
//     const age= 2037- birthYear;
//     console.log(firstName);
//     function printAge(){
//         const output= `You are ${firstName} and Your age is  ${age} born in ${birthYear}`
//         console.log(output);
//     }
//     printAge()
//     return age;
// }


// const firstName= 'Ashu'
// calcAge(1991)

// {

//     function printName(){
//         console.log("my name is printed");
//     }

    
// }

// printName()


//HOISTING

// let a;
// console.log(a);
// a=10

// //>> Starting of TDZ for let and const 
// console.log(me);  
// //undefined
// console.log(job);  
// //Cannot access 'job' before initialization
// console.log(birthYear); 
// //Cannot access 'birthYear' before initialization

// var me = "ashu";
// //>> Ending of TDZ for let and const 
// let job =" coder"
// const birthYear= "1999"



// console.log(addDecl(1,2));
// console.log(addExpr(1,3));
// console.log(addArrpow);

// function addDecl(a,b){
//     return a+b;
// }

// var  addExpr= function(a,b){
//     return a+b;
// }

// var  addArrpow= (a,b) => a+b;


// var a;
// let b=2;
// const c=3;

// console.log(window);
// console.log(a=== window.x);
// console.log(b=== window.b);
// console.log(c=== window.c);

// This keyword


// function checkThis(){
//     console.log(this);
// }


// checkThis();


// function arrowThis(){
//     console.log(this);
// }

// arrowThis()


// How this keyword work : Practise

// console.log(this);



// const obj={
//     name: 'ashu',

// }

// obj.myMath=window.Math.random

// console.log(obj.myMath());

//THIS keyword recap

// console.log(this);


// const calcAge= (birthYear)=>{
//     console.log(2037-birthYear);
    
//     console.log(this);
// }
// calcAge(1997)

// const jonas={
//     year:1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037-this.year);
//     }
// }




// const matilda={
//     year:2017
// }

// matilda.calcAge= jonas.calcAge;
// matilda.calcAge(1991)
// // jonas.calcAge(1991)


// const f= jonas.calcAge;

// f();



// ### Regular Function vs Arrow ⇒ Functions========

// console.log(this.myName);

// const jonas={
//     year:1991,
//     firstName:'Jonas',
//     calcAge: function(){
//         // console.log(this);
//         // console.log(2037-this.year);
//         // const self= this;
//         // console.log(self);
//         // const isMillenial= function(){
//         //     console.log(self);
//         //     console.log(self.year>= 1981 && self.year <= 1986);
//         // }



//         const isMillenial= ()=>{
//             console.log(this);
//             console.log(this.year>= 1981 && this.year <= 1986);
//         }


//         isMillenial()
//     },
//     greet:()=> console.log(`hey ${this.firstName}`)
// }


// jonas.greet();
// jonas.calcAge();


// /ar
// var  addExpr= function(a,b){
//     console.log(arguments);
//     return a+b;
// }

// var  addArrpow= (a,b) => {
//     console.log(arguments);
//     return a+b
// };

// addArrpow(2,3)

// addExpr(1,2)
// addExpr(1,2,4,5,6,7,87)


























 



