function x() {
  var y = 1;

  for (var i = 0; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("firstName");
}

x();
