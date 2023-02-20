var drawPoint = function (x, y, a, b, c, e) {
    // to many param : not good
    // ....
};
// -----------------------------------------------------
var drawPoint2 = function (point) {
    // point is an object
};
drawPoint2({
    x: 1,
    y: 2,
    a: 3
});
// -----------------------------------------------------
// solution 1 inline annotation
var drawPoint3 = function (point) {
    // point is an object
};
drawPoint3({
    x: 1,
    y: 2,
    a: 3
});
var drawPoint4 = function (point) {
    // point is an object
};
drawPoint4({
    x: 1,
    y: 2,
    a: 3
});
var drawPoint5 = function (point) {
    // point is an object
};
drawPoint4({
    x: 1,
    y: 2,
    a: 3
});
//---------- becomes -->
var Point6 = /** @class */ (function () {
    function Point6() {
    }
    Point6.prototype.drawPoint6 = function () {
        console.log("X : " + this.x, ", Y : " + this.y);
    };
    Point6.prototype.getDistance = function (another) {
        // ... logic
    };
    return Point6;
}());
var point6 = new Point6();
point6.x = 1;
point6.y = 2;
point6.drawPoint6();
