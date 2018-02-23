namespace catchIt {
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

// Variable für beide Kreise
    let circles: Circles[] = [];
    let c: Circles;

//Variablen für die blaue Kreise
    let x: number;
    let y: number;
    let blueCircle: BlueCircles[] = [];
    let bc: BlueCircles;
    let b: number = 10;

//Variablen für den grünen Kreis
    let greenCircle: GreenCircle[] = [];
    let clickedCircle: string[] = [];
    let rc: GreenCircle;
    let r: number = 1;
    let level: number = 0;

    let imgData: ImageData;     
    let miss: number = 0;

//HTML Elemente
    let start: HTMLElement;
    let intro: HTMLElement;
    let displaylevel: HTMLElement = document.getElementById("level");
    let displayMiss: HTMLElement;
    let resetButton: HTMLElement;


    window.addEventListener("load", init);


    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

//HTML Elemente
        start = document.getElementById("startButton");
        intro = document.getElementById("introducing");
        displayMiss = document.getElementById("misses");
        resetButton = document.getElementById("resetButton");

//Klick-Events
        start.addEventListener("click", startGame);     // START
        start.addEventListener("touchstart", startGame);
        canvas.addEventListener("click", clickCanvas);      // CATCH
        canvas.addEventListener("touchstart", clickCanvas);
        resetButton.addEventListener("click", resetGame);   // RESET
        resetButton.addEventListener("touchstart", resetGame);

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    
//Spiel wird gestartet
    function startGame(_event: Event): void {
        intro.style.display = "none";
        drawGreenCircle();
        drawBlueCircles();
        window.setTimeout(animate, 20);
        //        start.disabled =  true;
    }


    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < b; i++) {
            c = circles[i];
            c.update();

        }
        rc.update();

        window.setTimeout(animate, 20);

    }

    function drawGreenCircle(): void {
        
//grüner Kreis
        for (let i: number = 0; i < r; i++) {
            rc = new GreenCircle();
            circles[i] = rc;
            console.log("create new green circle");
            rc.setRandomPosition();

        }
    }

    function drawBlueCircles(): void {
        for (let i: number = 0; i < b; i++) {
            bc = new BlueCircles();
            circles[i] = bc;
            console.log("create new circle");
            bc.setRandomPosition();
        }
    }

    function clickCanvas(_event: MouseEvent): void {

        let diffX: number = rc.x - _event.offsetX;
        let diffY: number = rc.y - _event.offsetY;

        if (Math.abs(diffX) < rc.radius && Math.abs(diffY) < rc.radius) {
            console.log("getroffen");
            clickGreenCircle();
        }

        else {
            console.log("daneben");
            failedClick();
        }
    }

    function clickGreenCircle(): void {
        
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
    function failedClick(): void {
        console.log("failedClick");
        miss += 1;
        console.log(miss);
        displayMiss.innerHTML = "Fail:" + miss;
        if (miss == 5) {
            console.log("gameover");
            document.getElementById("gameOver").style.display = "inline";
        }

    }

    function resetGame(_event: Event): void {
        document.location.reload();
    }

}