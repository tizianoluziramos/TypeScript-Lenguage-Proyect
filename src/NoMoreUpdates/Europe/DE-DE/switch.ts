export function fall(wert: any, ...optionen: { bedingung: any, block: () => void }[]) {
    for (const { bedingung, block } of optionen) {
        if (wert === bedingung) {
            block();
            return;
        }
    }
}
