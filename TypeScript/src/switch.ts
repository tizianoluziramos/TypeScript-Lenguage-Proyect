export function caso(valor: any, ...opciones: { condicion: any, bloque: () => void }[]) {
    for (const { condicion, bloque } of opciones) {
        if (valor === condicion) {
            bloque();
            return;
        }
    }
}
