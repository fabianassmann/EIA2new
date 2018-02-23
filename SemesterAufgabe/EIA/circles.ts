namespace catchIt {
    export class Circles {
        x: number;
        y: number;
        vx: number;
        vy: number;
        color: string;
        radius: number;

//Position und Größe der Kreise festlegen
        
        constructor() {
            this.setRandomPosition();
            this.radius = 20;
            this.x = (Math.random() * (800) + 50);
            this.y = (Math.random() * (600) + 50);
        }

        update(): void {
            this.draw();
            this.move();
        }

        draw(): void {
           
        }

        move(): void {
           
        }

        setRandomPosition(): void {
          
            
        }
    }
}