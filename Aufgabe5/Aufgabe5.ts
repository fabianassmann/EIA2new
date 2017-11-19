namespace A5 {
    export let ski: CanvasRenderingContext2D;

    let skier: SkifahrerInfo[] = [];
    let sun: Sonne[] = [];
    let snow: Schnee[] = [];


    window.addEventListener("load", piste);


    let image: ImageData;

    function piste(): void {

        console.log(skier);


        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        ski = canvas.getContext("2d");
        console.log(ski);

        //Skifahrer
        for (let i: number = 0; i < 8; i++) {
            let skiX = 250 + Math.random() * 300;
            let skiY = 150 + Math.random() * 100;
            let skiDX = 250 + Math.random() * 300;
            let skiDY = 150 + Math.random() * 100;
            let skiColor = "hsl(" + Math.random() * 180 + ", 100%, 60%)";


            skier[i] = new SkifahrerInfo(skiX, skiY, skiDX, skiDY, skiColor);
        } 
     
        //Sonne
        for (let i: number = 0; i < 1; i++) {
            sun[i] = new Sonne(20, 20);
        }

        //Schnee
        for (let i: number = 0; i < 1000; i++) {
            let snowX = 0 + Math.random() * 800;
            let snowY = 0 + Math.random() * 600;

            snow[i] = new Schnee(snowX, snowY);
        }

        //blauer Himmel
        ski.fillStyle = "#A9D0F5";
        ski.fillRect(0, 0, 800, 200);


        //  Skipiste
        ski.fillStyle = "#FAFAFA";
        ski.fillRect(0, 100, 800, 600);

             //  Berge
        ski.beginPath();
        ski.moveTo(20, 250);
        ski.lineTo(150, 10);
        ski.lineTo(260, 250);
        ski.closePath();
        ski.strokeStyle = "grey";
        ski.stroke();
        ski.fillStyle = "grey";
        ski.fill();

        ski.beginPath();
        ski.moveTo(515, 135);
        ski.lineTo(615, 20);
        ski.lineTo(760, 137);
        ski.closePath();
        ski.strokeStyle = "lightgrey";
        ski.stroke();
        ski.fillStyle = "lightgrey";
        ski.fill();


        // Lift
        ski.beginPath();
        ski.moveTo(400, 120)
        ski.lineTo(400, 80);
        ski.strokeStyle = "black";
        ski.stroke();

        ski.beginPath();
        ski.moveTo(200, 550);
        ski.lineTo(200, 350);
        ski.stroke();

        ski.beginPath();
        ski.moveTo(400, 80);
        ski.lineTo(200, 350);
        ski.stroke();


        // Gondel   
        ski.beginPath();
        ski.moveTo(350, 215);
        ski.lineTo(320, 215);
        ski.lineTo(320, 195);
        ski.lineTo(350, 195);
        ski.closePath();
        ski.strokeStyle = "#FF0000";
        ski.stroke();
        ski.fillStyle = "#FF0000";
        ski.fill();

        ski.beginPath();
        ski.moveTo(335, 195);
        ski.lineTo(335, 168);
        ski.strokeStyle = "black";
        ski.stroke();

       //Bäume
        drawTree(20, 450);
        drawTree(80, 430);
        drawTree(630, 500);
        drawTree(660, 550);
        drawTree(700, 580);
        
        
        

        //----------------Schleifen----------------//         


      //Zufällige Bäume
        for (let i: number = 0; i < 15; i++) {
            let x: number = 550 + Math.random() * 200;
            let y: number = 250 + Math.random() * 100;
            drawRandom(x, y);
        }



        image = ski.getImageData(0, 0, 800, 600);

        animate();
    }

    //-------------Funktionen------------//

    //Bäume
    function drawTree(_x: number, _y: number): void {
        ski.beginPath();
        ski.moveTo(_x, _y);
        ski.lineTo(_x + 100, _y);
        ski.lineTo(_x + 50, _y - 150);
        ski.closePath();
        ski.strokeStyle = "#0B610B";
        ski.stroke();
        ski.fillStyle = "#0B610B";
        ski.fill();

    }

    //Zufällige Bäume
    
    function drawRandom(_x: number, _y: number): void {
        ski.beginPath();
        ski.moveTo(_x, _y);
        ski.lineTo(_x + 30, _y);
        ski.lineTo(_x + 15, _y - 70);
        ski.closePath();
        ski.strokeStyle = "#0B610B";
        ski.stroke();
        ski.fillStyle = "#0B610B";
        ski.fill();
    }


    //ANIMATION
    
    
    function animate(): void {
       
        ski.putImageData(image, 0, 0);


        //Schneeflocken
        for (let i: number = 0; i < snow.length; i++) {
            snow[i].updateSnow();
        }


        //Skifahrer

        for (let i: number = 0; i < skier.length; i++) {
            skier[i].update();
        }


        //Sonne
        for (let i: number = 0; i < sun.length; i++) {
            sun[i].updateSun();
        } 



        window.setTimeout(animate, 20);
    }
}