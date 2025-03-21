import * as readline from 'readline';

// Funktionen für die Umrechnung
export const umrechnungen = {
    // Länge
    meterZuZentimeter: (meter: number) => meter * 100,
    zentimeterZuMeter: (zentimeter: number) => zentimeter / 100,

    // Gewicht
    kiloZuPfund: (kilo: number) => kilo * 2.20462,
    pfundZuKilo: (pfund: number) => pfund / 2.20462,

    // Temperatur
    celsiusZuFahrenheit: (celsius: number) => (celsius * 9/5) + 32,
    fahrenheitZuCelsius: (fahrenheit: number) => (fahrenheit - 32) * 5/9
};

// Kommandozeilen-Schnittstelle
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function zeigeMenü(): void {
    console.log('Wählen Sie eine Umrechnungsoption:');
    console.log('1. Meter zu Zentimeter');
    console.log('2. Zentimeter zu Meter');
    console.log('3. Kilo zu Pfund');
    console.log('4. Pfund zu Kilo');
    console.log('5. Celsius zu Fahrenheit');
    console.log('6. Fahrenheit zu Celsius');
    rl.question('Wählen Sie eine Option (1-6): ', (option) => {
        rl.question('Geben Sie den zu konvertierenden Wert ein: ', (wertStr) => {
            const wert = parseFloat(wertStr);
            führeUmrechnungDurch(parseInt(option), wert);
            rl.close();
        });
    });    
}

export function führeUmrechnungDurch(option: number, wert: number): void {
    let ergebnis: number;

    switch (option) {
        case 1:
            ergebnis = umrechnungen.meterZuZentimeter(wert);
            console.log(`${wert} Meter sind ${ergebnis} Zentimeter`);
            break;
        case 2:
            ergebnis = umrechnungen.zentimeterZuMeter(wert);
            console.log(`${wert} Zentimeter sind ${ergebnis} Meter`);
            break;
        case 3:
            ergebnis = umrechnungen.kiloZuPfund(wert);
            console.log(`${wert} Kilo sind ${ergebnis} Pfund`);
            break;
        case 4:
            ergebnis = umrechnungen.pfundZuKilo(wert);
            console.log(`${wert} Pfund sind ${ergebnis} Kilo`);
            break;
        case 5:
            ergebnis = umrechnungen.celsiusZuFahrenheit(wert);
            console.log(`${wert} Grad Celsius sind ${ergebnis} Grad Fahrenheit`);
            break;
        case 6:
            ergebnis = umrechnungen.fahrenheitZuCelsius(wert);
            console.log(`${wert} Grad Fahrenheit sind ${ergebnis} Grad Celsius`);
            break;
        default:
            console.log('Ungültige Option');
            break;
    }
}
