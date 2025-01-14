export function romanoAEspanol(romano: string): number {
    const valoresRomanos: { [key: string]: number } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    return romano
        .toUpperCase()
        .split('')
        .reduceRight((total, actual, i, arr) => {
            const valor = valoresRomanos[actual];
            if (!valor) throw new Error(`Carácter inválido: ${actual}`);
            return valor < valoresRomanos[arr[i + 1] || ''] ? total - valor : total + valor;
        }, 0);
}