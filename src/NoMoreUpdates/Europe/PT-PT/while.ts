// ciclos.ts
export function enquanto(condição: () => boolean, bloco: () => void) {
    while (condição()) {
        bloco();
    }
}
