export function inverterArray(array: string[]): string[] {
    return array.map(elemento => elemento.split('').reverse().join(''));
}
