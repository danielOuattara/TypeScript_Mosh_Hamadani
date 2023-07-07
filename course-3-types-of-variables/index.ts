let count = 5;
//count = 'A'; // --> alert

let aaa; // --> type any
aaa = 1;
aaa = true;
aaa = "Hello";

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "a", false];

// -----  enum

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// solution

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
  Purple = 3,
}

let backgroundColor = Color.Red;
console.log(Color.Purple);
