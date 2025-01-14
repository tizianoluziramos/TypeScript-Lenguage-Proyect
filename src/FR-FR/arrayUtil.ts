// arrayUtil.ts
export function mapper<T, U>(tableau: T[], fn: (element: T) => U): U[] {
    return tableau.map(fn);
}

export function filtrer<T>(tableau: T[], fn: (element: T) => boolean): T[] {
    return tableau.filter(fn);
}

export function reduire<T, U>(tableau: T[], fn: (accumulateur: U, element: T) => U, initial: U): U {
    return tableau.reduce(fn, initial);
}

export function trouver<T>(tableau: T[], fn: (element: T) => boolean): T | undefined {
    return tableau.find(fn);
}

export function trouverIndice<T>(tableau: T[], fn: (element: T) => boolean): number {
    return tableau.findIndex(fn);
}

export function inclure<T>(tableau: T[], element: T): boolean {
    return tableau.includes(element);
}

export function unir<T>(...tableaux: T[][]): T[] {
    return tableaux.flat();
}

export function diviser<T>(tableau: T[], taille: number): T[][] {
    const resultat: T[][] = [];
    for (let i = 0; i < tableau.length; i += taille) {
        resultat.push(tableau.slice(i, i + taille));
    }
    return resultat;
}

export function trier<T>(tableau: T[], comparateur?: (a: T, b: T) => number): T[] {
    return tableau.slice().sort(comparateur);
}

export function inverser<T>(tableau: T[]): T[] {
    return tableau.slice().reverse();
}

export function concatenation<T>(tableau: T[], ...elements: T[]): T[] {
    return tableau.concat(...elements);
}

export function pousser<T>(tableau: T[], ...elements: T[]): number {
    return tableau.push(...elements);
}

export function supprimer<T>(tableau: T[], element: T): boolean {
    const indice = tableau.indexOf(element);
    if (indice !== -1) {
        tableau.splice(indice, 1);
        return true;
    }
    return false;
}

export function couper<T>(tableau: T[], debut: number, quantite?: number): T[] {
    return tableau.slice(debut, quantite !== undefined ? debut + quantite : undefined);
}

export function pourChaque<T>(tableau: T[], fn: (element: T) => void): void {
    tableau.forEach(fn);
}
