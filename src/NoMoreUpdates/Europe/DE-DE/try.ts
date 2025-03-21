// fehlerbehandlung.ts
export function versuchenFangen(block: () => void, fangen: (fehler: any) => void) {
    try {
        block();
    } catch (fehler) {
        fangen(fehler);
    }
}
