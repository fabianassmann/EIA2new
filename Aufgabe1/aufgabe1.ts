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
    
    ski.beginPath();
    ski.moveTo(655,550);
    ski.lineTo(755,550);
    ski.lineTo(705,380);
    ski.closePath();
    ski.strokeStyle="#36AA70";
    ski.stroke();
    ski.fillStyle="#36AA70";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(100,350);
    ski.lineTo(150,350);
    ski.lineTo(125,230);
    ski.closePath();
    ski.stroke();
    ski.fillStyle="#36AA70";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(50,400);
    ski.lineTo(100,400);
    ski.lineTo(75,240);
    ski.closePath();
    ski.stroke();
    ski.fillStyle="#36AA70";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(795,580);
    ski.lineTo(695,580);
    ski.lineTo(745,400);
    ski.closePath();
    ski.stroke();
    ski.fillStyle="#36AA70";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(715,150);
    ski.lineTo(745,150);
    ski.lineTo(730,100);
    ski.closePath();
    ski.stroke();
    ski.fillStyle="#36AA70";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(690,160);
    ski.lineTo(720,160);
    ski.lineTo(705,110);
    ski.closePath();
    ski.stroke();
    ski.fillStyle="#36AA70";
    ski.fill();
    
     ski.beginPath();
    ski.moveTo(705,350);
    ski.lineTo(755,350);
    ski.lineTo(730,250);
    ski.closePath();
    ski.stroke();
    ski.fillStyle="#36AA70";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(680,320);
    ski.lineTo(730,320);
    ski.lineTo(705,200);
    ski.closePath();
    ski.stroke();
    ski.fillStyle="#36AA70";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(740,320);
    ski.lineTo(790,320);
    ski.lineTo(765,190);
    ski.closePath();
    ski.stroke();
    ski.fillStyle="#36AA70";
    ski.fill();
    
    // Sonne
    
    //Sonne
    
    ski.beginPath();
    ski.arc(0, 0, 50, 0, 2 * Math.PI);
    ski.fillStyle = "#ffff00";
    ski.fill();
    
    }