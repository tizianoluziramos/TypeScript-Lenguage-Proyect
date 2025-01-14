export function invertirArray(array: string[]): string[] {
    return array.map(elemento => elemento.split('').reverse().join(''));
}