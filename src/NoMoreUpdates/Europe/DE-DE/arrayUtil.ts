// arrayUtil.ts
export function abbilden<T, U>(array: T[], fn: (element: T) => U): U[] {
    return array.map(fn);
}

export function filtern<T>(array: T[], fn: (element: T) => boolean): T[] {
    return array.filter(fn);
}

export function reduzieren<T, U>(array: T[], fn: (akkumulator: U, element: T) => U, initial: U): U {
    return array.reduce(fn, initial);
}

export function finden<T>(array: T[], fn: (element: T) => boolean): T | undefined {
    return array.find(fn);
}

export function findenIndex<T>(array: T[], fn: (element: T) => boolean): number {
    return array.findIndex(fn);
}

export function einschließen<T>(array: T[], element: T): boolean {
    return array.includes(element);
}

export function verbinden<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

export function teilen<T>(array: T[], größe: number): T[][] {
    const ergebnis: T[][] = [];
    for (let i = 0; i < array.length; i += größe) {
        ergebnis.push(array.slice(i, i + größe));
    }
    return ergebnis;
}

export function sortieren<T>(array: T[], vergleich?: (a: T, b: T) => number): T[] {
    return array.slice().sort(vergleich);
}

export function umdrehen<T>(array: T[]): T[] {
    return array.slice().reverse();
}

export function verknüpfen<T>(array: T[], ...elemente: T[]): T[] {
    return array.concat(...elemente);
}

export function schieben<T>(array: T[], ...elemente: T[]): number {
    return array.push(...elemente);
}

export function entfernen<T>(array: T[], element: T): boolean {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
        return true;
    }
    return false;
}

export function schneiden<T>(array: T[], start: number, anzahl?: number): T[] {
    return array.slice(start, anzahl !== undefined ? start + anzahl : undefined);
}

export function fürJeden<T>(array: T[], fn: (element: T) => void): void {
    array.forEach(fn);
}
