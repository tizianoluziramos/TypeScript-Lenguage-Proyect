// ciclos.ts
export function ciclos(início: number, condição: (i: number) => boolean, incremento: (i: number) => number, bloco: (i: number) => void) {
    for (let i = início; condição(i); i = incremento(i)) {
        bloco(i);
    }
}
