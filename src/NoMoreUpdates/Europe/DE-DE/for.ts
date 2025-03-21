// schleifen.ts
export function schleifen(start: number, bedingung: (i: number) => boolean, inkrement: (i: number) => number, block: (i: number) => void) {
    for (let i = start; bedingung(i); i = inkrement(i)) {
        block(i);
    }
}
