import fs from 'fs';
import pdfParse from 'pdf-parse';

export async function lirePDF(rutaArchivo: string): Promise<void> {
  try {
    const dataBuffer = fs.readFileSync(rutaArchivo);
    const data = await pdfParse(dataBuffer);
    console.log(data.text);
  } catch (error) {
    console.error("Erreur lors de la lecture du fichier PDF :", error);
  }
}
