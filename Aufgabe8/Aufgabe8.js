var A8;
(function (A8) {
    window.addEventListener("load", Abfrage);
    function Abfrage() {
        let Anzahl = prompt("Bitte geben Sie eine Zahl zwischen 10 und 100 ein");
        if (isNaN(parseInt(Anzahl)) || parseInt(Anzahl) < 10 || parseInt(Anzahl) > 100) {
            alert("Die Eingabe ist nicht korrekt, versuche es noch einmal.");
            Abfrage();
        }
        else {
            for (let i = 0; i < parseInt(Anzahl); i++) {
                Boxes(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 360);
            }
        }
    }
    function Boxes(_x, _y, _color) {
        let box = document.createElement("div");
        box.style.backgroundColor = "hsl(" + _color + ",80%, 50%)";
        box.style.width = "50px";
        box.style.height = "50px";
        box.style.left = _x + "px";
        box.style.top = _y + "px";
        document.body.appendChild(box);
    }
})(A8 || (A8 = {}));
//# sourceMappingURL=Aufgabe8.js.map