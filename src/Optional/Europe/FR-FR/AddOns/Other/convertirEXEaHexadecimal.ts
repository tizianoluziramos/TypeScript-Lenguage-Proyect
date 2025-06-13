import * as fs from 'fs';

export function convertirEXEaHexadecimal(rutaArchivo: string, limiteBytes: number, allowTXTFile: boolean): void {
  try {
    const dataBuffer = fs.readFileSync(rutaArchivo);
    const premiersOctets = dataBuffer.subarray(0, limiteBytes);
    const contenuHex = premiersOctets.toString('hex').match(/.{1,2}/g)?.join(' ');

    if (allowTXTFile) {
      fs.writeFileSync('output.txt', contenuHex || '');
      console.log("Le contenu a été sauvegardé dans 'output.txt'.");
    } else {
      console.log(contenuHex);
    }
  } catch (error) {
    console.error("Erreur lors de la lecture du fichier .exe:", error);
  }
}
