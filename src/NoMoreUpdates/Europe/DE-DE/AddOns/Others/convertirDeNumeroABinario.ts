export function inBinärUmwandeln(text: string): string {
    return text
        .split('') // Teilt den Text in einzelne Zeichen auf
        .map((zeichen) => {
            const binär = zeichen.charCodeAt(0).toString(2); // Holt den ASCII-Code in Binär
            return binär.padStart(8, '0'); // Stellt sicher, dass jedes Binär 8 Bits hat
        })
        .join(' '); // Verbindet alle Binärzahlen, getrennt durch ein Leerzeichen
}
