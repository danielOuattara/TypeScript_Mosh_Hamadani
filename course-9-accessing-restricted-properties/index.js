var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.drawPoint = function () {
        console.log("X : " + this.x, ", Y : " + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
point.drawPoint();
// --------------------------------------------
/*
How to create a point object without setting its values
in the constructor: set constructor parameter optional */
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.drawPoint2 = function () {
        console.log("X : " + this.x, ", Y : " + this.y);
    };
    return Point2;
}());
var point2 = new Point2(); // create a point without initial values doesn't raise error
point2.drawPoint2();
// STOP --> 36:33
