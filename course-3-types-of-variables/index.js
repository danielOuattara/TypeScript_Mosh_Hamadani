var count = 5;
//count = 'A'; // --> alert
var aaa; // --> type any
aaa = 1;
aaa = true;
aaa = "Hello";
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "a", false];
// -----  enum
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// solution
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backGroundColor = Color.Red;
console.log(Color.Purple);
