export function romainAFrançais(romain: string): number {
    const valeursRomaines: { [key: string]: number } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    return romain
        .toUpperCase()
        .split('')
        .reduceRight((total, actuel, i, arr) => {
            const valeur = valeursRomaines[actuel];
            if (!valeur) throw new Error(`Caractère invalide : ${actuel}`);
            return valeur < valeursRomaines[arr[i + 1] || ''] ? total - valeur : total + valeur;
        }, 0);
}
