import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

// Schnittstelle für die Struktur der Antwortdaten
export async function dateiHerunterladen(url: string, zielPfad: string) {
    try {
        const antwort = await axios.get(url, { responseType: 'stream' });

        const vollständigerPfad = path.resolve(zielPfad);
        const writer = fs.createWriteStream(vollständigerPfad);

        // Zugriff auf die `pipe`-Methode von `ReadableStream`
        (antwort.data as NodeJS.ReadableStream).pipe(writer);

        writer.on('finish', () => {
            console.log(`Datei heruntergeladen nach: ${vollständigerPfad}`);
        });

        writer.on('error', (error) => {
            console.error('Fehler beim Speichern der Datei:', error);
        });
    } catch (error) {
        console.error('Fehler beim Herunterladen der Datei:', error);
    }
}