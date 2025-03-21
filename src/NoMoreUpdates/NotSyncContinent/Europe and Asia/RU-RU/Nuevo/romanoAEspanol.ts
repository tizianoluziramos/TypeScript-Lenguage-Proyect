export function римскиеВСплан(римский: string): number {
    const значенияРимских: { [key: string]: number } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    return римский
        .toUpperCase()
        .split('')
        .reduceRight((итог, текущий, i, arr) => {
            const значение = значенияРимских[текущий];
            if (!значение) throw new Error(`Неверный символ: ${текущий}`);
            return значение < значенияРимских[arr[i + 1] || ''] ? итог - значение : итог + значение;
        }, 0);
}
