class Point7 {
  x: number; // fields
  y: number; // fields
  a: number; // fields

  // method
  drawPoint7() {
    console.log("X : " + this.x, ", Y : " + this.y);
  }

  // method
  getDistance(another: Point7) {
    // ... logic
  }
}

let point7 = new Point7();
point7.x = 1;
point7.y = 2;
point7.drawPoint7();
