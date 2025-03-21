export function инвертироватьМассив(массив: string[]): string[] {
    return массив.map(элемент => элемент.split('').reverse().join(''));
}
