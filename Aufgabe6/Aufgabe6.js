var A6;
(function (A6) {
    let objects = [];
    let nskier = 8;
    let nsun = 1;
    let nsnow = 450;
    window.addEventListener("load", piste);
    let image;
    function piste() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A6.ski = canvas.getContext("2d");
        console.log(A6.ski);
        //Skifahrer
        for (let i = 0; i < nskier; i++) {
            let skiX = 250 + Math.random() * 300;
            let skiY = 150 + Math.random() * 100;
            let skiDX = 250 + Math.random() * 300;
            let skiDY = 150 + Math.random() * 100;
            let skiColor = "hsl(" + Math.random() * 180 + ", 100%, 60%)";
            let s = new A6.SkifahrerInfo(skiX, skiY, skiDX, skiDY, skiColor);
            objects.push(s);
        }
        //Sonne
        for (let i = 0; i < nsun; i++) {
            let s = new A6.Sonne(20, 20);
            objects.push(s);
        }
        //Schnee
        for (let i = 0; i < nsnow; i++) {
            let snowX = 0 + Math.random() * 800;
            let snowY = 0 + Math.random() * 600;
            let s = new A6.Schnee(snowX, snowY);
            objects.push(s);
        }
        //blauer Himmel
        A6.ski.fillStyle = "#A9D0F5";
        A6.ski.fillRect(0, 0, 800, 200);
        //  Skipiste
        A6.ski.fillStyle = "#FAFAFA";
        A6.ski.fillRect(0, 100, 800, 600);
        //  Berge
        A6.ski.beginPath();
        A6.ski.moveTo(20, 250);
        A6.ski.lineTo(150, 10);
        A6.ski.lineTo(260, 250);
        A6.ski.closePath();
        A6.ski.strokeStyle = "grey";
        A6.ski.stroke();
        A6.ski.fillStyle = "grey";
        A6.ski.fill();
        A6.ski.beginPath();
        A6.ski.moveTo(515, 135);
        A6.ski.lineTo(615, 20);
        A6.ski.lineTo(760, 137);
        A6.ski.closePath();
        A6.ski.strokeStyle = "lightgrey";
        A6.ski.stroke();
        A6.ski.fillStyle = "lightgrey";
        A6.ski.fill();
        // Lift
        A6.ski.beginPath();
        A6.ski.moveTo(400, 120);
        A6.ski.lineTo(400, 80);
        A6.ski.strokeStyle = "black";
        A6.ski.stroke();
        A6.ski.beginPath();
        A6.ski.moveTo(200, 550);
        A6.ski.lineTo(200, 350);
        A6.ski.stroke();
        A6.ski.beginPath();
        A6.ski.moveTo(400, 80);
        A6.ski.lineTo(200, 350);
        A6.ski.stroke();
        // Gondel   
        A6.ski.beginPath();
        A6.ski.moveTo(350, 215);
        A6.ski.lineTo(320, 215);
        A6.ski.lineTo(320, 195);
        A6.ski.lineTo(350, 195);
        A6.ski.closePath();
        A6.ski.strokeStyle = "#FF0000";
        A6.ski.stroke();
        A6.ski.fillStyle = "#FF0000";
        A6.ski.fill();
        A6.ski.beginPath();
        A6.ski.moveTo(335, 195);
        A6.ski.lineTo(335, 168);
        A6.ski.strokeStyle = "black";
        A6.ski.stroke();
        //Bäume
        drawTree(20, 450);
        drawTree(80, 430);
        drawTree(630, 500);
        drawTree(660, 550);
        drawTree(700, 580);
        //----------------Schleifen----------------//         
        //Zufällige Bäume
        for (let i = 0; i < 13; i++) {
            let x = 550 + Math.random() * 200;
            let y = 250 + Math.random() * 100;
            drawRandom(x, y);
        }
        image = A6.ski.getImageData(0, 0, 800, 600);
        animate();
    }
    //-------------Funktionen------------//
    //Bäume
    function drawTree(_x, _y) {
        A6.ski.beginPath();
        A6.ski.moveTo(_x, _y);
        A6.ski.lineTo(_x + 100, _y);
        A6.ski.lineTo(_x + 50, _y - 150);
        A6.ski.closePath();
        A6.ski.strokeStyle = "#0B610B";
        A6.ski.stroke();
        A6.ski.fillStyle = "#0B610B";
        A6.ski.fill();
    }
    //Zufällige Bäume
    function drawRandom(_x, _y) {
        A6.ski.beginPath();
        A6.ski.moveTo(_x, _y);
        A6.ski.lineTo(_x + 30, _y);
        A6.ski.lineTo(_x + 15, _y - 70);
        A6.ski.closePath();
        A6.ski.strokeStyle = "#0B610B";
        A6.ski.stroke();
        A6.ski.fillStyle = "#0B610B";
        A6.ski.fill();
    }
    //ANIMATION
    function animate() {
        A6.ski.putImageData(image, 0, 0);
        for (let i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(A6 || (A6 = {}));
//# sourceMappingURL=Aufgabe6.js.map