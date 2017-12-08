namespace A8 {

    window.addEventListener("load", Abfrage);

    function Abfrage(): void {

        let Anzahl: string = prompt("Bitte geben Sie eine Zahl zwischen 10 und 100 ein")        
        if (isNaN(parseInt(Anzahl)) || parseInt(Anzahl) < 10 || parseInt(Anzahl) > 100) {        
            alert("Die Eingabe ist nicht korrekt, versuche es noch einmal.");   
            Abfrage();    
        }
        else {            
            for (let i: number = 0; i < parseInt(Anzahl); i++) {
                Boxes(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 360);  
            }
        }
    }

    function Boxes(_x: number, _y: number, _color: number): void {

        let box: HTMLDivElement = document.createElement("div");     
        box.style.backgroundColor = "hsl(" + _color + ",80%, 50%)";
        box.style.width = "50px";
        box.style.height = "50px";
        box.style.left = _x + "px";         
        box.style.top = _y + "px";


        document.body.appendChild(box);     
    }
}