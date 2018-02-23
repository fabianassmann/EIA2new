var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var catchIt;
(function (catchIt) {
    var BlueCircles = (function (_super) {
        __extends(BlueCircles, _super);
        function BlueCircles() {
            _super.call(this);
            this.vx = (Math.random() * (2) + 0);
            this.vy = (Math.random() * (0) + -2);
        }
        //Zeichnen der blauen Kreise
        BlueCircles.prototype.draw = function () {
            catchIt.crc2.beginPath();
            catchIt.crc2.fillStyle = "blue";
            catchIt.crc2.strokeStyle = "blue";
            catchIt.crc2.moveTo(this.x, this.y);
            catchIt.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            catchIt.crc2.closePath();
            catchIt.crc2.fill();
            catchIt.crc2.stroke();
        };
        //Bewegung der blauen Kreise
        BlueCircles.prototype.move = function () {
            if ((this.x + this.vx + this.radius > 0 + catchIt.crc2.canvas.width) || (this.x - this.radius + this.vx < 0)) {
                this.vx = -this.vx;
            }
            if ((this.y + this.vy + this.radius > 0 + catchIt.crc2.canvas.height) || (this.y - this.radius + this.vy < 0)) {
                this.vy = -this.vy;
            }
            this.x += this.vx;
            this.y += this.vy;
        };
        BlueCircles.prototype.setRandomPosition = function () {
            this.x = (Math.random() * (600) + 50); // 2. Attribut von Flower
            this.y = (Math.random() * (600) + 50); // 3. Attribut von Flower
        };
        return BlueCircles;
    }(catchIt.Circles));
    catchIt.BlueCircles = BlueCircles;
})(catchIt || (catchIt = {}));
//# sourceMappingURL=bluecircles.js.map