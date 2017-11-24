var A6;
(function (A6) {
    class Sonne extends A6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        drawSun() {
            A6.ski.beginPath();
            A6.ski.arc(this.x, this.y, 30, 0, 5 * Math.PI);
            A6.ski.fillStyle = "yellow";
            A6.ski.fill();
            A6.ski.strokeStyle = "yellow";
            A6.ski.stroke();
        }
        moveSun() {
            if (this.x > 800) {
                this.x = 30;
            }
            this.x += 1;
            this.y += 0;
        }
    }
    A6.Sonne = Sonne;
})(A6 || (A6 = {}));
//# sourceMappingURL=Sonne.js.map