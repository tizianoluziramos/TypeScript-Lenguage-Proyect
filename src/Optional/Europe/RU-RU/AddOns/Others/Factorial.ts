export function факториал(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * факториал(n - 1);
}
