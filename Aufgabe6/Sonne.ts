namespace A6 {

    export class Sonne extends MovingObjects{
        x: number;
        y: number;


        constructor(_x: number, _y: number) {
            super (_x,_y);
        }

        drawSun(): void {

            ski.beginPath();
            ski.arc(this.x, this.y, 30, 0, 5 * Math.PI);
            ski.fillStyle = "yellow";
            ski.fill();
            ski.strokeStyle = "yellow";
            ski.stroke();
        }

        moveSun(): void {

            if (this.x > 800) {
                this.x = 30;
            }
            this.x += 1;
            this.y += 0;

        }

    }
}