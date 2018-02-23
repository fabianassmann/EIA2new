var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var catchIt;
(function (catchIt) {
    var GreenCircle = (function (_super) {
        __extends(GreenCircle, _super);
        function GreenCircle() {
            _super.call(this);
            this.vx = 3;
            this.vy = -3;
        }
        //grüner Kreis wird gezeichnet
        GreenCircle.prototype.draw = function () {
            catchIt.crc2.beginPath();
            catchIt.crc2.fillStyle = "lightgreen";
            catchIt.crc2.strokeStyle = "lightgreen";
            catchIt.crc2.moveTo(this.x, this.y);
            catchIt.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            catchIt.crc2.closePath();
            catchIt.crc2.fill();
            catchIt.crc2.stroke();
        };
        GreenCircle.prototype.move = function () {
            var newX = this.x + this.vx;
            //linker oder rechter Rand erreicht
            if (newX > catchIt.crc2.canvas.width - this.radius || newX < this.radius) {
                this.vx = -this.vx;
            }
            //oberer Rand erreicht
            if (this.y + this.vy < this.radius || this.y + this.vy >= catchIt.crc2.canvas.height - this.radius) {
                this.vy = -this.vy; //nach unten bewegen --> Vorzeichen von vy zu +
            }
            //neue Position
            this.x += this.vx; //+2
            this.y += this.vy; //-2
        };
        GreenCircle.prototype.setRandomPosition = function () {
            this.x = (Math.random() * (600) + 50); // 2. Attribut von Flower
            this.y = (Math.random() * (600) + 50); // 3. Attribut von Flower
        };
        return GreenCircle;
    }(catchIt.Circles));
    catchIt.GreenCircle = GreenCircle;
})(catchIt || (catchIt = {}));
//# sourceMappingURL=greencircle.js.map