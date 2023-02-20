// using var
function doSomething1() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Finally : " + i);
}

doSomething1();

//----------------------------------

// using let

function doSomething2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Finally : " + i);
}

doSomething2();
