export function romanoZuDeutsch(romano: string): number {
    const römischeWerte: { [key: string]: number } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    return romano
        .toUpperCase()
        .split('')
        .reduceRight((gesamt, aktuell, i, arr) => {
            const wert = römischeWerte[aktuell];
            if (!wert) throw new Error(`Ungültiges Zeichen: ${aktuell}`);
            return wert < römischeWerte[arr[i + 1] || ''] ? gesamt - wert : gesamt + wert;
        }, 0);
}
