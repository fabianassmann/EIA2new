namespace Aufgabe02 {

window.addEventListener("load", piste);

function piste(): void {
    var canvas: HTMLCanvasElement = document.getElementsByTagName("canvas") [0];
    console.log(canvas);
    
    var ski: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(ski);
    
  
    //Himmel
    ski.fillStyle="#A9D0F5";
    ski.fillRect(0,0,800,200);
   
    
    //Skipiste
    ski.fillStyle = "#FAFAFA";
    ski.fillRect(0,100,800,600);
    
 
    //Berge
    
    ski.beginPath();
    ski.moveTo(20,250);
    ski.lineTo(150,10);
    ski.lineTo(260,250);
    ski.closePath();
    ski.strokeStyle="E6E6E6";
    ski.stroke();
    ski.fillStyle="E6E6E6";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(515,135);
    ski.lineTo(615,20);
    ski.lineTo(760,137);
    ski.closePath();
    ski.strokeStyle="E6E6E6";
    ski.stroke();
    ski.fillStyle="E6E6E6";
    ski.fill();

    
    
    //Lift
    
    ski.beginPath();
    ski.moveTo(400,120)
    ski.lineTo(400,80);
    ski.strokeStyle="black";
    ski.stroke();
    
    ski.beginPath();
    ski.moveTo(200,550);
    ski.lineTo(200,350);
    ski.stroke();
    
    ski.beginPath();
    ski.moveTo(400,80);
    ski.lineTo(200,350);
    ski.stroke();
    
    
    // Gondel 
    
    ski.beginPath();
    ski.moveTo(350,215);
    ski.lineTo(320,215);
    ski.lineTo(320,195);
    ski.lineTo(350,195);
    ski.closePath();
    ski.strokeStyle="#FF0000";
    ski.stroke();
    ski.fillStyle="#FF0000";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(335,195);
    ski.lineTo(335,168);
    ski.strokeStyle="black";
    ski.stroke();
    
          
    //Bäume
    drawTree(20,450);
    drawTree(80,430);
    drawTree(630,500);
    drawTree(660,550);
    drawTree(700,580);
    
    
    //Zufällige Schneeflocken
    
    for (let i: number= 0; i<200; i++) {
        let x: number= Math.random()*800;
        let y: number= Math.random()*100;
        drawSnow(x,y);
    }
    
    
     //Zufällige Bäume
    for (let i: number= 0; i<15; i++) {
        let x: number= 550+Math.random()*200;
        let y: number= 250+Math.random()*100;
        drawRandom(x,y);
  
    }
    
 
    // Sonne
    
    ski.beginPath();
    ski.arc(0, 0, 50, 0, 2 * Math.PI);
    ski.fillStyle = "#ffff00";
    ski.fill();
    
    
// Funktionen
    
    
     //Bäume
    function drawTree(_x: number, _y: number):void {
    ski.beginPath();
    ski.moveTo(_x,_y);
    ski.lineTo(_x + 100,_y);
    ski.lineTo(_x+50,_y-150);
    ski.closePath();
    ski.strokeStyle="#0B610B";
    ski.stroke();
    ski.fillStyle="#0B610B";
    ski.fill(); 
        
   }  
    
    //Schneeflocken
    
    function drawSnow(_x:number,_y:number):void {
    
    ski.beginPath();
    ski.arc(_x,_y,2,0,2*Math.PI);
    ski.strokeStyle="white";
    ski.stroke();
    ski.fillStyle="white";
    ski.fill();
    }
    
    //Zufällige Bäume
    function drawRandom(_x: number, _y: number):void {
    ski.beginPath();
    ski.moveTo(_x,_y);
    ski.lineTo(_x + 30,_y);
    ski.lineTo(_x+15,_y-70);
    ski.closePath();
    ski.strokeStyle="#0B6138";
    ski.stroke();
    ski.fillStyle="#0B6138";
    ski.fill(); 
        
   }  

    }
}