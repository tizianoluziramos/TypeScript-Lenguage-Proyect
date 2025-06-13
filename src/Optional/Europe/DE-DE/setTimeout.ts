// timer.ts
export function timeoutDefinieren(ms: number, block: () => void) {
    setTimeout(block, ms);
}
