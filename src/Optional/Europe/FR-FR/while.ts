// bucles.ts
export function pendantque(condicion: () => boolean, bloque: () => void) {
    while (condicion()) {
        bloque();
    }
}
