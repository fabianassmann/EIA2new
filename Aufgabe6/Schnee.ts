namespace A6 {

    export class Schnee extends MovingObjects {



        constructor(_x: number, _y: number) {

           super (_x,_y);

        }

        draw(): void {
            ski.beginPath();
            ski.arc(this.x, this.y, 2, 0, 4 * Math.PI);
            ski.strokeStyle = "white";
            ski.stroke();
            ski.fillStyle = "white";
            ski.fill();
        }

        move(): void {
            if (this.y > 600) {
                this.y = 0;
            }

            if (this.x > 800) {
                this.x = 0;
            }

            this.x += Math.random();
            this.y += Math.random();
        }

    }
}