var catchIt;
(function (catchIt) {
    // Variable für beide Kreise
    var circles = [];
    var c;
    //Variablen für die blaue Kreise
    var x;
    var y;
    var blueCircle = [];
    var bc;
    var b = 10;
    //Variablen für den grünen Kreis
    var greenCircle = [];
    var clickedCircle = [];
    var rc;
    var r = 1;
    var level = 0;
    var imgData;
    var miss = 0;
    //HTML Elemente
    var start;
    var intro;
    var displaylevel = document.getElementById("level");
    var displayMiss;
    var resetButton;
    window.addEventListener("load", init);
    function init(_event) {
        catchIt.canvas = document.getElementsByTagName("canvas")[0];
        catchIt.crc2 = catchIt.canvas.getContext("2d");
        //HTML Elemente
        start = document.getElementById("startButton");
        intro = document.getElementById("introducing");
        displayMiss = document.getElementById("misses");
        resetButton = document.getElementById("resetButton");
        //Klick-Events
        start.addEventListener("click", startGame); // START
        start.addEventListener("touchstart", startGame);
        catchIt.canvas.addEventListener("click", clickCanvas); // CATCH
        catchIt.canvas.addEventListener("touchstart", clickCanvas);
        resetButton.addEventListener("click", resetGame); // RESET
        resetButton.addEventListener("touchstart", resetGame);
        imgData = catchIt.crc2.getImageData(0, 0, catchIt.canvas.width, catchIt.canvas.height);
    }
    //Spiel wird gestartet
    function startGame(_event) {
        intro.style.display = "none";
        drawGreenCircle();
        drawBlueCircles();
        window.setTimeout(animate, 20);
        //        start.disabled =  true;
    }
    function animate() {
        catchIt.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < b; i++) {
            c = circles[i];
            c.update();
        }
        rc.update();
        window.setTimeout(animate, 20);
    }
    function drawGreenCircle() {
        //grüner Kreis
        for (var i = 0; i < r; i++) {
            rc = new catchIt.GreenCircle();
            circles[i] = rc;
            console.log("create new green circle");
            rc.setRandomPosition();
        }
    }
    function drawBlueCircles() {
        for (var i = 0; i < b; i++) {
            bc = new catchIt.BlueCircles();
            circles[i] = bc;
            console.log("create new circle");
            bc.setRandomPosition();
        }
    }
    function clickCanvas(_event) {
        var diffX = rc.x - _event.offsetX;
        var diffY = rc.y - _event.offsetY;
        if (Math.abs(diffX) < rc.radius && Math.abs(diffY) < rc.radius) {
            console.log("getroffen");
            clickGreenCircle();
        }
        else {
            console.log("daneben");
            failedClick();
        }
    }
    function clickGreenCircle() {
        //Runden werden hochgezählt
        level++;
        document.getElementById("level").innerHTML = "Level:" + level;
        //wird der grüne Kreis getroffen --> in Array
        clickedCircle.push(("greencircle" + level));
        console.log(clickedCircle);
        //wird der grüne Kreis angeklickt bewegt er sich schneller
        rc.vx *= 1.5;
        //ist das Level 4 erfolgreich geschafft --> gewonnen
        if (level == 5) {
            document.getElementById("gameWon").style.display = "inline";
        }
        b = b + 20;
        drawBlueCircles();
    }
    //Fehlversuche --> beim 5. Spiel verloren
    function failedClick() {
        console.log("failedClick");
        miss += 1;
        console.log(miss);
        displayMiss.innerHTML = "Fail:" + miss;
        if (miss == 5) {
            console.log("gameover");
            document.getElementById("gameOver").style.display = "inline";
        }
    }
    function resetGame(_event) {
        document.location.reload();
    }
})(catchIt || (catchIt = {}));
//# sourceMappingURL=main.js.map