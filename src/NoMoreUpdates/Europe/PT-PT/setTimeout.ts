// temporizador.ts
export function definirTempo(ms: number, bloco: () => void) {
    setTimeout(bloco, ms);
}
