var A5;
(function (A5) {
    let skier = [];
    let sun = [];
    let snow = [];
    window.addEventListener("load", piste);
    let image;
    function piste() {
        console.log(skier);
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A5.ski = canvas.getContext("2d");
        console.log(A5.ski);
        //Skifahrer
        for (let i = 0; i < 8; i++) {
            let skiX = 250 + Math.random() * 300;
            let skiY = 150 + Math.random() * 100;
            let skiDX = 250 + Math.random() * 300;
            let skiDY = 150 + Math.random() * 100;
            let skiColor = "hsl(" + Math.random() * 180 + ", 100%, 60%)";
            skier[i] = new A5.SkifahrerInfo(skiX, skiY, skiDX, skiDY, skiColor);
        }
        //Sonne
        for (let i = 0; i < 1; i++) {
            sun[i] = new A5.Sonne(20, 20);
        }
        //Schnee
        for (let i = 0; i < 1000; i++) {
            let snowX = 0 + Math.random() * 800;
            let snowY = 0 + Math.random() * 600;
            snow[i] = new A5.Schnee(snowX, snowY);
        }
        //blauer Himmel
        A5.ski.fillStyle = "#A9D0F5";
        A5.ski.fillRect(0, 0, 800, 200);
        //  Skipiste
        A5.ski.fillStyle = "#FAFAFA";
        A5.ski.fillRect(0, 100, 800, 600);
        //  Berge
        A5.ski.beginPath();
        A5.ski.moveTo(20, 250);
        A5.ski.lineTo(150, 10);
        A5.ski.lineTo(260, 250);
        A5.ski.closePath();
        A5.ski.strokeStyle = "grey";
        A5.ski.stroke();
        A5.ski.fillStyle = "grey";
        A5.ski.fill();
        A5.ski.beginPath();
        A5.ski.moveTo(515, 135);
        A5.ski.lineTo(615, 20);
        A5.ski.lineTo(760, 137);
        A5.ski.closePath();
        A5.ski.strokeStyle = "lightgrey";
        A5.ski.stroke();
        A5.ski.fillStyle = "lightgrey";
        A5.ski.fill();
        // Lift
        A5.ski.beginPath();
        A5.ski.moveTo(400, 120);
        A5.ski.lineTo(400, 80);
        A5.ski.strokeStyle = "black";
        A5.ski.stroke();
        A5.ski.beginPath();
        A5.ski.moveTo(200, 550);
        A5.ski.lineTo(200, 350);
        A5.ski.stroke();
        A5.ski.beginPath();
        A5.ski.moveTo(400, 80);
        A5.ski.lineTo(200, 350);
        A5.ski.stroke();
        // Gondel   
        A5.ski.beginPath();
        A5.ski.moveTo(350, 215);
        A5.ski.lineTo(320, 215);
        A5.ski.lineTo(320, 195);
        A5.ski.lineTo(350, 195);
        A5.ski.closePath();
        A5.ski.strokeStyle = "#FF0000";
        A5.ski.stroke();
        A5.ski.fillStyle = "#FF0000";
        A5.ski.fill();
        A5.ski.beginPath();
        A5.ski.moveTo(335, 195);
        A5.ski.lineTo(335, 168);
        A5.ski.strokeStyle = "black";
        A5.ski.stroke();
        //Bäume
        drawTree(20, 450);
        drawTree(80, 430);
        drawTree(630, 500);
        drawTree(660, 550);
        drawTree(700, 580);
        //----------------Schleifen----------------//         
        //Zufällige Bäume
        for (let i = 0; i < 15; i++) {
            let x = 550 + Math.random() * 200;
            let y = 250 + Math.random() * 100;
            drawRandom(x, y);
        }
        image = A5.ski.getImageData(0, 0, 800, 600);
        animate();
    }
    //-------------Funktionen------------//
    //Bäume
    function drawTree(_x, _y) {
        A5.ski.beginPath();
        A5.ski.moveTo(_x, _y);
        A5.ski.lineTo(_x + 100, _y);
        A5.ski.lineTo(_x + 50, _y - 150);
        A5.ski.closePath();
        A5.ski.strokeStyle = "#0B610B";
        A5.ski.stroke();
        A5.ski.fillStyle = "#0B610B";
        A5.ski.fill();
    }
    //Zufällige Bäume
    function drawRandom(_x, _y) {
        A5.ski.beginPath();
        A5.ski.moveTo(_x, _y);
        A5.ski.lineTo(_x + 30, _y);
        A5.ski.lineTo(_x + 15, _y - 70);
        A5.ski.closePath();
        A5.ski.strokeStyle = "#0B610B";
        A5.ski.stroke();
        A5.ski.fillStyle = "#0B610B";
        A5.ski.fill();
    }
    //ANIMATION
    function animate() {
        A5.ski.putImageData(image, 0, 0);
        //Schneeflocken
        for (let i = 0; i < snow.length; i++) {
            snow[i].updateSnow();
        }
        //Skifahrer
        for (let i = 0; i < skier.length; i++) {
            skier[i].update();
        }
        //Sonne
        for (let i = 0; i < sun.length; i++) {
            sun[i].updateSun();
        }
        window.setTimeout(animate, 20);
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=Aufgabe5.js.map