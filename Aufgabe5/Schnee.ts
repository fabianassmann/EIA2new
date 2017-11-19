namespace A5 {

    export class Schnee {
        x: number;
        y: number;


        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;

        }

        drawSnow(): void {
            ski.beginPath();
            ski.arc(this.x, this.y, 2, 0, 4 * Math.PI);
            ski.strokeStyle = "white";
            ski.stroke();
            ski.fillStyle = "white";
            ski.fill();
        }

        moveSnow(): void {
            if (this.y > 600) {
                this.y = 0;
            }

            if (this.x > 800) {
                this.x = 0;
            }

            this.x += Math.random();
            this.y += Math.random();
        }

        updateSnow(): void {
            this.drawSnow();
            this.moveSnow();
        }

    }
}