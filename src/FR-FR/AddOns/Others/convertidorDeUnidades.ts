import * as readline from 'readline';

// Fonctions de conversion
export const conversions = {
    // Longueur
    metresACentimetres: (metres: number) => metres * 100,
    centimetresAMetres: (centimetres: number) => centimetres / 100,

    // Poids
    kilosALivres: (kilos: number) => kilos * 2.20462,
    livresAKilos: (livres: number) => livres / 2.20462,

    // Température
    celsiusAFahrenheit: (celsius: number) => (celsius * 9/5) + 32,
    fahrenheitACelsius: (fahrenheit: number) => (fahrenheit - 32) * 5/9
};

// Interface en ligne de commande
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function afficherMenu(): void {
    console.log('Sélectionnez une option de conversion :');
    console.log('1. Mètres en Centimètres');
    console.log('2. Centimètres en Mètres');
    console.log('3. Kilos en Livres');
    console.log('4. Livres en Kilos');
    console.log('5. Celsius en Fahrenheit');
    console.log('6. Fahrenheit en Celsius');
    rl.question('Sélectionnez une option (1-6) : ', (option) => {
        rl.question('Entrez la valeur à convertir : ', (valeurStr) => {
            const valeur = parseFloat(valeurStr);
            effectuerConversion(parseInt(option), valeur);
            rl.close();
        });
    });
}

export function effectuerConversion(option: number, valeur: number): void {
    let resultat: number;

    switch (option) {
        case 1:
            resultat = conversions.metresACentimetres(valeur);
            console.log(`${valeur} mètres sont ${resultat} centimètres`);
            break;
        case 2:
            resultat = conversions.centimetresAMetres(valeur);
            console.log(`${valeur} centimètres sont ${resultat} mètres`);
            break;
        case 3:
            resultat = conversions.kilosALivres(valeur);
            console.log(`${valeur} kilos sont ${resultat} livres`);
            break;
        case 4:
            resultat = conversions.livresAKilos(valeur);
            console.log(`${valeur} livres sont ${resultat} kilos`);
            break;
        case 5:
            resultat = conversions.celsiusAFahrenheit(valeur);
            console.log(`${valeur} degrés Celsius sont ${resultat} degrés Fahrenheit`);
            break;
        case 6:
            resultat = conversions.fahrenheitACelsius(valeur);
            console.log(`${valeur} degrés Fahrenheit sont ${resultat} degrés Celsius`);
            break;
        default:
            console.log('Option non valide');
            break;
    }
}
