export default class Point_Two {
  constructor(public a: number, private x?: number, protected y?: number) {}

  drawPoint = () =>
    console.log("A: ", this.a + ", x: " + this.x, ", Y: " + this.y);
}
