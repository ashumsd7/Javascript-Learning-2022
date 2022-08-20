const cart = ["shoes", "pants", "chair"];


// Call back hell example
api.createOrder(cart, function () {
  console.log("Creating order");
  api.proceedToPayment(function () {
    console.log("Doing Payment");
    api.showOrderSummary(function () {
        console.log("Printing  Summary");
      api.updateProfile();
    });
  });
});
