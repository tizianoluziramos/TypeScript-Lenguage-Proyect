import fs from 'fs';
import pdfParse from 'pdf-parse';

export async function lesePDF(dateiPfad: string): Promise<void> {
  try {
    const datenPuffer = fs.readFileSync(dateiPfad);
    const daten = await pdfParse(datenPuffer);
    console.log(daten.text);
  } catch (fehler) {
    console.error("Fehler beim Lesen der PDF-Datei:", fehler);
  }
}
