export function 罗马数字转西班牙语(罗马数字: string): number {
    const 罗马数字值: { [key: string]: number } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    return 罗马数字
        .toUpperCase()
        .split('')
        .reduceRight((总数, 当前字符, i, arr) => {
            const 值 = 罗马数字值[当前字符];
            if (!值) throw new Error(`无效字符: ${当前字符}`);
            return 值 < 罗马数字值[arr[i + 1] || ''] ? 总数 - 值 : 总数 + 值;
        }, 0);
}
