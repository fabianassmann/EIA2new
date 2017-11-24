var A6;
(function (A6) {
    class SkifahrerInfo extends A6.MovingObjects {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y);
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        move() {
            this.x += 1;
            this.y += 5;
            if (this.x > 800) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }
        draw() {
            //Skier
            A6.ski.stroke();
            A6.ski.moveTo(this.x + 20, this.y - 10);
            A6.ski.lineTo(this.x - 15, this.y + 10);
            A6.ski.strokeStyle = this.color;
            A6.ski.stroke();
            //Körper
            A6.ski.beginPath();
            A6.ski.fillStyle = this.color;
            A6.ski.fillRect(this.x, this.y, 2, -15);
            //Kopf
            A6.ski.beginPath();
            A6.ski.arc(this.x + 1, this.y - 20, 5, 0, 3 * Math.PI);
            A6.ski.fillStyle = this.color;
            A6.ski.fill();
        }
    }
    A6.SkifahrerInfo = SkifahrerInfo;
})(A6 || (A6 = {}));
//# sourceMappingURL=SkifahrerInfo.js.map