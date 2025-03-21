export function গুণফল(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * গুণফল(n - 1);
}
