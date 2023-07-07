var Point7 = /** @class */ (function () {
    function Point7() {
    }
    // method
    Point7.prototype.drawPoint7 = function () {
        console.log("X : " + this.x, ", Y : " + this.y);
    };
    // method
    Point7.prototype.getDistance = function (another) {
        // ... logic
    };
    return Point7;
}());
var point7 = new Point7();
point7.x = 1;
point7.y = 2;
point7.drawPoint7();
