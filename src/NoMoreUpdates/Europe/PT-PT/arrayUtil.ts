// arrayUtil.ts
export function mapear<T, U>(array: T[], fn: (elemento: T) => U): U[] {
    return array.map(fn);
}

export function filtrar<T>(array: T[], fn: (elemento: T) => boolean): T[] {
    return array.filter(fn);
}

export function reduzir<T, U>(array: T[], fn: (acumulador: U, elemento: T) => U, inicial: U): U {
    return array.reduce(fn, inicial);
}

export function encontrar<T>(array: T[], fn: (elemento: T) => boolean): T | undefined {
    return array.find(fn);
}

export function encontrarIndice<T>(array: T[], fn: (elemento: T) => boolean): number {
    return array.findIndex(fn);
}

export function incluir<T>(array: T[], elemento: T): boolean {
    return array.includes(elemento);
}

export function unir<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

export function dividir<T>(array: T[], tamanho: number): T[][] {
    const resultado: T[][] = [];
    for (let i = 0; i < array.length; i += tamanho) {
        resultado.push(array.slice(i, i + tamanho));
    }
    return resultado;
}

export function ordenar<T>(array: T[], comparador?: (a: T, b: T) => number): T[] {
    return array.slice().sort(comparador);
}

export function inverter<T>(array: T[]): T[] {
    return array.slice().reverse();
}

export function concatenar<T>(array: T[], ...elementos: T[]): T[] {
    return array.concat(...elementos);
}

export function empurrar<T>(array: T[], ...elementos: T[]): number {
    return array.push(...elementos);
}

export function eliminar<T>(array: T[], elemento: T): boolean {
    const indice = array.indexOf(elemento);
    if (indice !== -1) {
        array.splice(indice, 1);
        return true;
    }
    return false;
}

export function cortar<T>(array: T[], inicio: number, quantidade?: number): T[] {
    return array.slice(inicio, quantidade !== undefined ? inicio + quantidade : undefined);
}

export function paraCada<T>(array: T[], fn: (elemento: T) => void): void {
    array.forEach(fn);
}
