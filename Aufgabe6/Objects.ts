namespace A6 {
    export class MovingObjects {
        x: number;
        y: number;
        
        constructor (_x: number, _y:number) {
            this.x= _x;
            this.y=_y;
            }
        
        update(): void {
            this.move();
            this.draw();
            }
        
        draw(): void {}
        
        move(): void {}
        
        }
    }
    