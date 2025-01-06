import fs from 'fs';
import pdfParse from 'pdf-parse';

export async function leerPDF(rutaArchivo: string): Promise<void> {
  try {
    const dataBuffer = fs.readFileSync(rutaArchivo);
    const data = await pdfParse(dataBuffer);
    console.log(data.text);
  } catch (error) {
    console.error("Error al leer el archivo PDF:", error);
  }
}
