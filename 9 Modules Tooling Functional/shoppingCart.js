//Exporting Modules
console.log('//Exporting Modules');

const shippingCost=10;
const cart=[];

//creating named export
export default  function(product,quantity){
    cart.push({product,quantity})
    console.log(`${quantity} ${product} added tp cart`);
}


const totalPrice=234;
const totalQuanity= 23;

export { totalPrice,totalQuanity}





