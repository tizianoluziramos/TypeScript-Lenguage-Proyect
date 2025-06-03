export function 阶乘(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * 阶乘(n - 1);
}
