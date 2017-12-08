var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen (a) oder Programm beenden (s) \nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=weiblich oder 1=männlich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let DatenArray = _input.split(",");
        let studentData = {
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
        let geschlecht;
        if (parseInt(DatenArray[4]) == 0) {
            geschlecht = "weiblich";
        }
        else {
            geschlecht = "männlich";
        }
        return "Die eingegeben Daten sind:\n" + "\nMatrikelnummer: " + studentData.matrikelnummer + "\nName: " + studentData.name + "\nVorname: " + studentData.vorname + "\nAlter: " + studentData.alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + studentData.kommentar;
    }
    function queryData(_matrikelnummer) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikelnummer) {
                let geschlecht = students[i].geschlecht ? "weiblich" : "männlich";
                return "Daten zur eingegebenen Matrikelnummer: " + students[i].matrikelnummer + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }
            else {
                continue;
            }
        }
        return "Die eingegebene Matrikelnummer wurde nicht gefunden";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Aufgabe7.js.map