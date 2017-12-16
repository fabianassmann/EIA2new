/*
Aufgabe: Aufgabe 9
Name: Fabian Assmann
Matrikel: 256334
Datum: 15.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace A9 {

    window.addEventListener("load", init);
    
    let currentLetter: string;


    function init(): void {

        let buchstaben: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        let anzahl: number = buchstaben.length;

        if (anzahl == buchstaben.length) {
            for (let i: number = 0; i < buchstaben.length; i++) {
                drawBox(buchstaben[i]);
            }
        }
        
        drawLetter();
    }
    
 
    function handleMouseClick(_event: MouseEvent): void {

            let klicken: HTMLDivElement = <HTMLDivElement>_event.target;
            klicken.style.color = "white";

            currentLetter = klicken.id;

            let divList: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letters");

            for (let i: number = 0; i < divList.length; i++) {
                if (currentLetter != divList[i].id) {
                    divList[i].style.color = "black";
                }
            }
        }


    function drawBox(_buchstaben: string): void {

        let div: HTMLDivElement = document.createElement("div");

        div.innerText = _buchstaben;
        div.style.backgroundColor = "grey";
        div.style.width = "35px";
        div.style.height = "35px";
        div.style.marginLeft = "2px";
        div.style.marginRight = "2px";
        div.style.fontSize = "30px";
        div.style.textAlign = "center";
        div.id = _buchstaben;  
        div.className = "letters";

        div.addEventListener("click", handleMouseClick);
        document.body.appendChild(div);

    }

    
       function drawLetter(): void {


        let letter: HTMLDivElement = document.createElement("div");

        letter.style.backgroundColor = "lightgrey";
        letter.style.width = "800px";
        letter.style.height = "300px";
        letter.style.marginTop = "10px";
        letter.style.marginRight = "2px";

       
        letter.addEventListener("click", setLetter);
        document.body.appendChild(letter);

    }

    
  
    function setLetter(_event: MouseEvent): void {

        let box: HTMLDivElement = document.createElement("div");
        
        box.innerText =currentLetter;
        box.style.backgroundColor = "none";
        box.style.width = "30px";
        box.style.height = "30px";
        box.style.marginLeft = "3px";
        box.style.marginRight = "3px";
        box.style.fontSize = "30px";
        box.style.textAlign = "center";
        box.style.position="absolute";
        box.style.left = _event.pageX + "px";
        box.style.top= _event.pageY + "px";
        
        box.addEventListener("click", setLetter);
        document.body.appendChild(box);
        
          let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
    }

}