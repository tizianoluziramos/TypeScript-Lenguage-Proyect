export function 反转数组(数组: string[]): string[] {
    return 数组.map(元素 => 元素.split('').reverse().join(''));
}
