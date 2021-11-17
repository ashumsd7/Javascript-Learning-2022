"use strict";

// console.log("object");
// let interface= 'ashu'

//---FUNCTIONS----

// declarations

// function logger(){
//     console.log(" I ma learning JS");
// }
// logger();

// expression

// const myFunction= function logger2(){
//     console.log("please log this");
// }

// Arrow Functions ⇒------

// const calcAge= birthYear=> 2037- birthYear

// console.log(calcAge(1994));

// const yearsUntilRetirement= birthyear=> {
//     const age= 2037- birthyear;
//     const retirement= 65- age;
//     return retirement;
// }

// // console.log(yearsUntilRetirement(2000));
// console.log(`You will retire in ${yearsUntilRetirement(2000)} years`);

// Arrays : Data Structure

// const friends=['jam', 'sam' , 'lloom', 'boom']
// console.log( friends);

// const years = new Array('2000', '2021', '2048')
// console.log(years);

// years=[]

// Array methods-

// const friends=['jam', 'sam' , 'loom', 'boom']
//adds in last
// let pushReturns= friends.push('mohan')
// console.log("push returns", pushReturns);
// console.log(friends);

//adds in starting
// let unshiftReturns= friends.unshift('Dev')
// console.log("unshiftReturns returns", unshiftReturns);
// console.log(friends);

//remove in last

// let popReturns= friends.pop()
// console.log("popReturns returns", popReturns);
// console.log(friends);

//removes firsd element

// let shiftReturns= friends.shift()
// console.log("shiftReturns returns", shiftReturns);
// console.log(friends);

// const friends=['jam', 'sam' , 'loom', 'boom']
// console.log(friends.indexOf('sdam'));

// console.log(friends.includes('loom'));
// console.log(friends.includes('loommy'));

//OBJECTS --------

//  const personDetail={
//      firstName: 'Dev',
//      lastName: 'Mehta',
//      birthYear:1990,

//      job: 'teacher',
//      friends:['jam', 'sam' , 'loom', 'boom'],
//      hadLicense:true,
//  calcAge: function(birthYear){
//      return 2040- birthYear
//  }

//  calcAge: function(){
//      console.log(this);
//     return 2040- this.birthYear
// }

//     calcAge: function(){
//         // console.log(this);
//         this.age= 2040- this.birthYear
//        return this.age;
//    }
//  }

//  console.log(personDetail);

//  console.log(personDetail.lastName);
//  console.log(personDetail['lastName']);

//  const nameKey='Name'
//  console.log(personDetail['first'+nameKey]);

// console.log(personDetail['calcAge']());
// console.log(personDetail.calcAge());

// console.log(personDetail.age);
// console.log(personDetail.age);

// -LOOP-----
let i = 1;

while (i !== 10) {
  console.log(i++);
}
