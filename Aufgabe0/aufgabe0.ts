function dialogFeld(): void {
    let eingabe: string = prompt("Bitte geben Sie Ihren Namen ein.", "");
    if (eingabe != null) {
        document.getElementById("hi").innerHTML =
            "Hallo " + eingabe + "! Willkommen auf meiner Website...";
    }
}