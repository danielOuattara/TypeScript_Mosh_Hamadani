let drawPoint = (x, y, a, b, c, e) => {
  // to many param : not good
  // ....
};

// -----------------------------------------------------

let drawPoint2 = (point) => {
  // point is an object
};

drawPoint2({
  x: 1,
  y: 2,
  a: 3,
  // ...
});

// -----------------------------------------------------
// solution 1 inline annotation

let drawPoint3 = (point: { x: number; y: number; a: number }) => {
  // point is an object
};

drawPoint3({
  x: 1,
  y: 2,
  a: 3,
  // ...
});

// -----------------------------------------------------
// solution 2 interfaces

interface Point4 {
  x: number;
  y: number;
  a: number;
}

let drawPoint4 = (point: Point4) => {
  // point is an object
};

drawPoint4({
  x: 1,
  y: 2,
  a: 3,
  // ...
});

// -----------------------------------------------------
// solution 3 interfaces with cohesion --> change interface to class and add method signature

interface Point5 {
  x: number;
  y: number;
  a: number;
  drawPoint5: () => void;
}

let drawPoint5 = (point: Point5) => {
  // point is an object
};

drawPoint4({
  x: 1,
  y: 2,
  a: 3,
  // ...
});

//---------- becomes -->

class Point6 {
  x: number;
  y: number;
  a: number;
  drawPoint6() {
    console.log("X : " + this.x, ", Y : " + this.y);
  }

  getDistance(another: Point6) {
    // ... logic
  }
}

let point6 = new Point6();
point6.x = 1;
point6.y = 2;
point6.drawPoint6();
