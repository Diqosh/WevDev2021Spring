var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, 'asf', true];
var PointClass = /** @class */ (function () {
    function PointClass(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    PointClass.prototype.draw = function () {
        console.log(this);
    };
    return PointClass;
}());
var point = new PointClass(1);
point.draw();
