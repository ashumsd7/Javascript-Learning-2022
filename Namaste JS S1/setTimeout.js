function x() {
  var i = 1;

  for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("firstName");
}

x();
