//Importing Modules

console.log('Importing Modules');
// import {addToCart,totalPrice,totalQuanity} from './shoppingCart.js'
// import * as ShoppingCart from './shoppingCart.js'
import add from './shoppingCart.js'
// add('banana',44)


// addToCart('apple',5)
// console.log(totalPrice,totalQuanity);
// console.log(ShoppingCart.totalQuanity);
 
(function(){
    alert('ddd')
})();


function fun1(){
    let a=1;
    let b=2;
    return function(){
        let c=2;
        return`I am ${a} and ${b} of ${c}`
    }


   
}
console.log( fun1()());





 