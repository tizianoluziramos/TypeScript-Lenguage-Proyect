export function factorielle(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * factorielle(n - 1);
}
