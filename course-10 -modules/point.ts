export class Point {
  constructor(public a: number, private x?: number, protected y?: number) {}

  drawPoint = () =>
    console.log("A: ", this.a + ", x: " + this.x, ", Y: " + this.y);
}

let point = new Point(1, 2, 3);
point.drawPoint();
