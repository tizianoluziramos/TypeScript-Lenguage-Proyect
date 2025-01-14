// bucles.ts
export function mientras(condicion: () => boolean, bloque: () => void) {
    while (condicion()) {
        bloque();
    }
}
