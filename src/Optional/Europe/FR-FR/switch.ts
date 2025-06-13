export function cas(valeur: any, ...options: { condition: any, bloc: () => void }[]) {
    for (const { condition, bloc } of options) {
        if (valeur === condition) {
            bloc();
            return;
        }
    }
}
