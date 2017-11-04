/*
Aufgabe: Aufgabe 3
Name: Fabian Assmann
Matrikel: 256334
Datum: 04.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe3;
(function (Aufgabe3) {
    window.addEventListener("load", piste);
    var ski;
    let arrayX = [];
    let arrayY = [];
    let skiX = [];
    let skiY = [];
    let skiOrigX = [];
    let skiOrigY = [];
    let sunX = [];
    let sunY = [];
    let image;
    function piste() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        ski = canvas.getContext("2d");
        console.log(ski);
        //  blauer Himmel
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
        ski.moveTo(400, 120);
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
        // SCHLEIFEN        
        //Zufällige Bäume
        for (let i = 0; i < 15; i++) {
            let x = 550 + Math.random() * 200;
            let y = 250 + Math.random() * 100;
            drawRandom(x, y);
        }
        //Schneeflocken
        for (let i = 0; i < 1000; i++) {
            arrayX[i] = 0 + Math.random() * 800;
            arrayY[i] = 0 + Math.random() * 600;
        }
        //Skifahrer
        for (let i = 0; i < 6; i++) {
            skiX[i] = 450 + Math.random() * 100;
            skiY[i] = 130 + Math.random() * 300;
            skiOrigX[i] = skiX[i];
            skiOrigY[i] = skiY[i];
        }
        //Sonne
        for (let i = 0; i < 1; i++) {
            sunX[i] = 20;
            sunY[i] = 20;
        }
        image = ski.getImageData(0, 0, 800, 600);
        animate();
    }
    // FUNKTIONEN
    //Bäume
    function drawTree(_x, _y) {
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
    function drawRandom(_x, _y) {
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
    //Sonne
    function sonne(_x, _y) {
        ski.beginPath();
        ski.arc(_x, _y, 30, 1, 6 * Math.PI);
        ski.fillStyle = "yellow";
        ski.fill();
        ski.strokeStyle = "yellow";
        ski.stroke();
    }
    //Skifahrer
    function skifahrer(_x, _y) {
        //Körper
        ski.beginPath();
        ski.fillStyle = "blue";
        ski.fillRect(_x, _y, 2, -15);
        //Kopf
        ski.beginPath();
        ski.arc(_x + 1, _y - 20, 5, 0, 3 * Math.PI);
        ski.fillStyle = "black";
        ski.fill();
        //Skier
        ski.stroke();
        ski.moveTo(_x + 20, _y - 10);
        ski.lineTo(_x - 15, _y + 14);
        ski.strokeStyle = "blue";
        ski.stroke();
    }
    // ANIMATION
    function animate() {
        //ski.clearRect(0,0,800,600);
        ski.putImageData(image, 0, 0);
        //Schneeflocken move!
        for (let i = 0; i < arrayX.length; i++) {
            if (arrayY[i] > 600) {
                arrayY[i] = 1;
            }
            if (arrayX[i] > 800) {
                arrayX[i] = 1;
            }
            arrayX[i] += Math.random();
            arrayY[i] += Math.random();
            ski.beginPath();
            ski.arc(arrayX[i], arrayY[i], 1.5, 0, 2 * Math.PI);
            ski.strokeStyle = "white";
            ski.stroke();
            ski.fillStyle = "white";
            ski.fill();
        }
        //Skifahrer  move!
        for (let i = 0; i < skiX.length; i++) {
            skiX[i] += -1;
            skiY[i] += 1;
            skifahrer(skiX[i], skiY[i]);
            if (skiX[i] < 200) {
                skiY[i] = skiOrigY[i];
                skiX[i] = skiOrigX[i];
            }
        }
        //Sonne  move!
        for (let i = 0; i < sunX.length; i++) {
            if (sunX[i] > 800) {
                sunX[i] = 5;
            }
            sunX[i] += 0.1;
            sunY[i] += 0;
            sonne(sunX[i], sunY[i]);
        }
        window.setTimeout(animate, 10);
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=aufgabe3.js.map