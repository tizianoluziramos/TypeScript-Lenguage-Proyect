// bucles.ts
export function bucles(inicio: number, condicion: (i: number) => boolean, incremento: (i: number) => number, bloque: (i: number) => void) {
    for (let i = inicio; condicion(i); i = incremento(i)) {
        bloque(i);
    }
}
