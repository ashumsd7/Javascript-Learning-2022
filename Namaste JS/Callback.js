const cart = ["shoes", "pants", "chair"];


// Call back hell example
api.createOrder(cart, function () {
  console.log("Creating order");
  api.proceedToPayment();
});




// inversion of control

// giving function control to other funtion




