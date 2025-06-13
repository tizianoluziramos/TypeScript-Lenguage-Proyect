export function validerCarte(numeroCarte: string | number | (string | number)[]): boolean {
    if (typeof numeroCarte === 'string' || typeof numeroCarte === 'number') {
        numeroCarte = [numeroCarte];
    }

    for (const carte of numeroCarte) {
        const carteSansEspaces = String(carte).replace(/\s|-/g, '');

        if (!/^\d+$/.test(carteSansEspaces)) {
            return false;
        }

        let somme = 0;
        let alterner = false;

        for (let i = carteSansEspaces.length - 1; i >= 0; i--) {
            let chiffre = parseInt(carteSansEspaces.charAt(i), 10);

            if (alterner) {
                chiffre *= 2;
                if (chiffre > 9) {
                    chiffre -= 9;
                }
            }

            somme += chiffre;
            alterner = !alterner;
        }

        if (somme % 10 !== 0) {
            return false;
        }
    }

    return true;
}
