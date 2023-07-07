// using var
function doSomething1() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Finally : " + i); // because of "var" i is defined here: OK
}

doSomething1();

//----------------------------------

// using let

function doSomething2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Finally : " + i); // because of "let" i is not defined here:  ERROR
}

doSomething2();
