// schleifen.ts
export function solange(bedingung: () => boolean, block: () => void) {
    while (bedingung()) {
        block();
    }
}
