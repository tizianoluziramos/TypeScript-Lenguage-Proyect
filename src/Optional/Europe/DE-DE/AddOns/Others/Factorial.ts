export function fakultaet(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * fakultaet(n - 1);
}
