export {};

class Point {
  x: number;
  private y: number;
  protected a: number;

  constructor(a: number, x: number, y: number) {
    this.a = a;
    this.x = x;
    this.y = y;
  }

  drawPoint() {
    console.log("X : " + this.x, ", Y : " + this.y);
  }
}

let point = new Point(1, 2, 3);
point.x; //  accessible and modifiable

// point.y; // Incorrect: Property 'y' is private and only accessible within class 'Point'.ts(2341)
// point.a; // Incorrect: Property 'a' is protected and only accessible within class 'Point' and its subclasses.ts(2445)

point.drawPoint(); // Only method is accessible in this after instantiation

// IMPORTANT: We can NOR access private & protected fields NEITHER modify them

//---------------------------------------------------------------------------------

// Access modifiers & simplification of class declaration
// CAUTION: You MUST specify the access modifiers for each variables inside the constructor

class Point2 {
  constructor(public a: number, private x?: number, protected y?: number) {}

  drawPoint() {
    console.log(" X : " + this.x, ", Y : " + this.y);
  }
}

let point2_1 = new Point2(1);
point2_1.a;
point2_1.drawPoint();

// point2.x; // Incorrect: Property 'x' is private and only accessible within class 'Point'.ts(2341)
// point2.y; // Incorrect: Property 'y' is protected and only accessible within class 'Point' and its subclasses.ts(2445)

// IMPORTANT: We can NOR access private & protected fields NEITHER modify them
