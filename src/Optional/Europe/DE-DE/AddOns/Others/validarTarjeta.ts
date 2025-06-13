export function validiereKreditkarte(karteNummer: string | number | (string | number)[]): boolean {
    if (typeof karteNummer === 'string' || typeof karteNummer === 'number') {
        karteNummer = [karteNummer];
    }

    for (const karte of karteNummer) {
        const karteOhneLeerzeichen = String(karte).replace(/\s|-/g, '');

        if (!/^\d+$/.test(karteOhneLeerzeichen)) {
            return false;
        }

        let summe = 0;
        let abwechseln = false;

        for (let i = karteOhneLeerzeichen.length - 1; i >= 0; i--) {
            let ziffer = parseInt(karteOhneLeerzeichen.charAt(i), 10);

            if (abwechseln) {
                ziffer *= 2;
                if (ziffer > 9) {
                    ziffer -= 9;
                }
            }

            summe += ziffer; 
            abwechseln = !abwechseln;
        }

        if (summe % 10 !== 0) {
            return false;
        }
    }

    return true;
}
