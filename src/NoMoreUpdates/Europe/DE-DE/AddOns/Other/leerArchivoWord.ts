import * as fs from 'fs';
import * as mammoth from 'mammoth';

export async function leseWordDatei(dateiPfad: string): Promise<void> {
    try {
        const buffer = fs.readFileSync(dateiPfad);
        const ergebnis = await mammoth.extractRawText({ buffer });
        console.log(ergebnis.value);
    } catch (fehler) {
        console.log(fehler);
    }
}
