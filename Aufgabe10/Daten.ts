namespace A10 {
    export interface Bestellposten {
        art: string;
        name: string;
        preis: number;
    }

    export let posten: Bestellposten[] = [
        { art: "Baumart", name: "Nordmanntanne", preis: 25.99 },
        { art: "Baumart", name: "Blaufichte", preis: 39.99 },
        { art: "Baumart", name: "Rotfichte", preis: 48.99 },
        { art: "Halter", name: "Halterung aus Holz", preis: 21.99 },
        { art: "Halter", name: "Halterung aus Metall silber", preis: 29.99 },
        { art: "Halter", name: "Halterung aus Metall grün", preis: 33.99 },
        { art: "Beleuchtung", name: "Lichterkette classic", preis: 9.99 },
        { art: "Beleuchtung", name: "Lichterkette bunt", preis: 15.99 },
        { art: "Deko", name: "Christbaumkugel in Rot", preis: 1.19 },
        { art: "Deko", name: "Christbaumkugel in Silber", preis: 1.29 },
        { art: "Deko", name: "Christbaumkugel in Gold", preis: 1.29 },
        { art: "Deko", name: "Christbaumkugel in Blau", preis: 1.19 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.99 },
    ];
    
}