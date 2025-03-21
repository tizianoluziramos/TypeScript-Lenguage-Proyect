// temporizador.ts
export function definirTimeout(ms: number, bloque: () => void) {
    setTimeout(bloque, ms);
}
