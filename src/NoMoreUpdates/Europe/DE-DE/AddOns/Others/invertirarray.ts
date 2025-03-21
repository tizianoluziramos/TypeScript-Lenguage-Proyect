export function umkehrenArray(array: string[]): string[] {
    return array.map(elemento => elemento.split('').reverse().join(''));
}
