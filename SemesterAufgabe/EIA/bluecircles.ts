namespace catchIt {
    export class BlueCircles extends Circles {
        x: number;
        y: number;
        radius: number;
        vx: number;
        vy: number;

        constructor() {
            super();
            this.vx = (Math.random() * (2) + 0);
            this.vy = (Math.random() * (0) + -2);
        }

//Zeichnen der blauen Kreise

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "blue";
            crc2.strokeStyle = "blue";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

//Bewegung der blauen Kreise
        
        move(): void {

            if ((this.x + this.vx + this.radius > 0 + crc2.canvas.width) || (this.x - this.radius + this.vx < 0)) {
                this.vx = - this.vx;
            }
            if ((this.y + this.vy + this.radius > 0 + crc2.canvas.height) || (this.y - this.radius + this.vy < 0)) {
                this.vy = - this.vy;
            }
            this.x += this.vx;
            this.y += this.vy;
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (600) + 50);      // 2. Attribut von Flower
            this.y = (Math.random() * (600) + 50);      // 3. Attribut von Flower
        }

    }
}