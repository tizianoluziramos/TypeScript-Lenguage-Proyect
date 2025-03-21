export function caso(valor: any, ...opções: { condição: any, bloco: () => void }[]) {
    for (const { condição, bloco } of opções) {
        if (valor === condição) {
            bloco();
            return;
        }
    }
}
