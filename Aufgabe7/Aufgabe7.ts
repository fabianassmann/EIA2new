namespace A7 {
    interface StudentData {
        matrikelnummer: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen (a) oder Programm beenden (s) \nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=weiblich oder 1=männlich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let DatenArray: string[] = _input.split(","); 
        let studentData: StudentData = {  
            matrikelnummer: parseInt(DatenArray[0]),   
            name: DatenArray[1],
            vorname: DatenArray[2],
            alter: parseInt(DatenArray[3]),
            geschlecht: parseInt(DatenArray[4]) == 0,   
            kommentar: DatenArray[5],
        };
        
        if (Number.isNaN(studentData.matrikelnummer)) {   
             return "Matrikelnummer ist keine Nummer";
        }

        students.push(studentData);

        let geschlecht: string; 
        if (parseInt(DatenArray[4]) == 0) {  
            geschlecht = "weiblich";
        }

        else {                             
            geschlecht = "männlich";
        }

        return "Die eingegeben Daten sind:\n" + "\nMatrikelnummer: " + studentData.matrikelnummer + "\nName: " + studentData.name + "\nVorname: " + studentData.vorname + "\nAlter: " + studentData.alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + studentData.kommentar;

    }



    function queryData(_matrikelnummer: number): string {

        for (let i: number = 0; i < students.length; i++) {

            if (students[i].matrikelnummer == _matrikelnummer) {  
                let geschlecht: string = students[i].geschlecht ? "weiblich" : "männlich";      
                return "Daten zur eingegebenen Matrikelnummer: " + students[i].matrikelnummer + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }

            else {          
                continue; 
            }
        }
        return "Die eingegebene Matrikelnummer wurde nicht gefunden";  
        
    }
}