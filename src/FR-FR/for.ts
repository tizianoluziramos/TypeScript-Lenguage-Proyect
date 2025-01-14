// boucles.ts
export function boucles(debut: number, condition: (i: number) => boolean, incrementer: (i: number) => number, bloc: (i: number) => void) {
    for (let i = debut; condition(i); i = incrementer(i)) {
        bloc(i);
    }
}
