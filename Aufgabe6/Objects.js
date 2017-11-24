var A6;
(function (A6) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() { }
        move() { }
    }
    A6.MovingObjects = MovingObjects;
})(A6 || (A6 = {}));
//# sourceMappingURL=Objects.js.map