namespace A5 {

    export class SkifahrerInfo {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        constructor(_x: number, _y: number, _dx: number, _dy: number, _color: string) {

            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }


        move(): void {


            this.x += 1; 
            this.y += 5;

            if (this.x > 800) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }


        draw(): void {
            //Körper
            ski.beginPath();
            ski.fillStyle = this.color;
            ski.fillRect(this.x, this.y, 2, -15);

            //Kopf
            ski.beginPath();
            ski.arc(this.x + 1, this.y - 20, 5, 0, 3 * Math.PI);
            ski.fillStyle = this.color;
            ski.fill();

            //Skier
            ski.stroke();
            ski.moveTo(this.x + 20, this.y - 10);
            ski.lineTo(this.x - 15, this.y + 10);
            ski.strokeStyle = this.color;
            ski.stroke();
        }
        

        update(): void {
            this.move();
            this.draw();
        }


    }
}