export {};

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  drawPoint() {
    console.log("X : " + this.x, ", Y : " + this.y);
  }
}

let point = new Point(1, 2);
point.drawPoint();

// --------------------------------------------

/* 
How to create a point object with optionally setting 
its values in the constructor: set constructor parameter 
optional */

class Point2 {
  x?: number;
  y?: number;
  a: number;

  constructor(a: number, x?: number, y?: number) {
    this.a = a;
    this.x = x;
    this.y = y;
  }

  drawPoint2() {
    console.log("X : " + this.x, ", Y : " + this.y);
  }
}

let point2 = new Point2(1, 2, 3);

let point2_2 = new Point2(1); // create a point without optional values doesn't raise error
point2_2.drawPoint2();

// STOP --> 36:33

//----------------------------- 3

// STOP --> 36:33
