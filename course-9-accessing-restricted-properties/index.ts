export {};

// Access modifiers and simplification of class declaration
// CAUTION: You MUST specify the access modifiers for each variables inside the constructor

//

// Here: how to access restricted properties ? --> create getters / setters

class Point {
  constructor(public a: number, private x?: number, protected y?: number) {}

  drawPoint = () =>
    console.log("A: ", this.a + ", x: " + this.x, ", Y: " + this.y);

  getX() {
    // getter : property of the class
    return this.x;
  }

  setX(value: number) {
    //  setter: property of the class
    this.x = value;
  }
}

let point = new Point(1, 2, 3);
point.a; // accessible
point.drawPoint(); // accessible

//point.x; // Incorrect: not accessible outside the class --> private
//point.y; // Incorrect: not accessible outside the class or subclasses --> private

point.getX(); // -> 2;
point.setX(12);
point.getX(); // -> 12

//-----------------------------------------------------------------------

// Simplify Write for getter & setter

class Point2 {
  constructor(public a: number, private x?: number, protected y?: number) {}

  drawPoint = () =>
    console.log("A: ", this.a + ", x: " + this.x, ", Y: " + this.y);

  get X() {
    // getter : property of the class
    return this.x;
  }

  set X(value) {
    //  setter: property of the class
    this.x = value;
  }
}

let point2 = new Point2(1, 2, 3);
point2.a; // accessible
point2.drawPoint(); // accessible

//point2.x; // Incorrect: not accessible outside the class --> private
//point2.y; // Incorrect: not accessible outside the class or subclasses --> private

point2.X; // -> 2;
point2.X = 12;
point2.X; // -> 12

//-------------------------------------------------------------------------

// Naming convention

class Point3 {
  constructor(public _a: number, private _x?: number, protected _y?: number) {}

  drawPoint = () =>
    console.log("A: ", this._a + ", x: " + this._x, ", Y: " + this._y);

  get x() {
    // getter : property of the class
    return this._x;
  }

  set x(value) {
    //  setter: property of the class
    this._x = value;
  }
}

let point3 = new Point3(1, 2, 3);
point3._a; // accessible
point3.drawPoint(); // accessible

point3.x; // -> 2;
point3.x = 12;
point3.x; // -> 12

// SO: a property in a class looks like a field outside of the class,
// but internally it is a method for that class
