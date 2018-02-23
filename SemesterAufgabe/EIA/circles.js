var catchIt;
(function (catchIt) {
    var Circles = (function () {
        //Position und Größe der Kreise festlegen
        function Circles() {
            this.setRandomPosition();
            this.radius = 20;
            this.x = (Math.random() * (800) + 50);
            this.y = (Math.random() * (600) + 50);
        }
        Circles.prototype.update = function () {
            this.draw();
            this.move();
        };
        Circles.prototype.draw = function () {
        };
        Circles.prototype.move = function () {
        };
        Circles.prototype.setRandomPosition = function () {
        };
        return Circles;
    }());
    catchIt.Circles = Circles;
})(catchIt || (catchIt = {}));
//# sourceMappingURL=circles.js.map