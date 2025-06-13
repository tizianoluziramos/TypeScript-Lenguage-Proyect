export function রোমানোথেকেবাংলায়(রোমান: string): number {
    const রোমানভ্যালু: { [key: string]: number } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    return রোমান
        .toUpperCase()
        .split('')
        .reduceRight((মোট, বর্তমান, i, arr) => {
            const মান = রোমানভ্যালু[বর্তমান];
            if (!মান) throw new Error(`অবৈধ অক্ষর: ${বর্তমান}`);
            return মান < রোমানভ্যালু[arr[i + 1] || ''] ? মোট - মান : মোট + মান;
        }, 0);
}
