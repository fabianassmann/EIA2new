var A5;
(function (A5) {
    class Schnee {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        drawSnow() {
            A5.ski.beginPath();
            A5.ski.arc(this.x, this.y, 2, 0, 4 * Math.PI);
            A5.ski.strokeStyle = "white";
            A5.ski.stroke();
            A5.ski.fillStyle = "white";
            A5.ski.fill();
        }
        moveSnow() {
            if (this.y > 600) {
                this.y = 0;
            }
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += Math.random();
            this.y += Math.random();
        }
        updateSnow() {
            this.drawSnow();
            this.moveSnow();
        }
    }
    A5.Schnee = Schnee;
})(A5 || (A5 = {}));
//# sourceMappingURL=Schnee.js.map