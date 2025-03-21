import * as fs from 'fs';

export function konvertierenEXZaHexadezimal(rutaArchivo: string, limiteBytes: number, allowTXTFile: boolean): void {
  try {
    const dataBuffer = fs.readFileSync(rutaArchivo);
    const primerosBytes = dataBuffer.subarray(0, limiteBytes);
    const contenidoHex = primerosBytes.toString('hex').match(/.{1,2}/g)?.join(' ');

    if (allowTXTFile) {
      fs.writeFileSync('output.txt', contenidoHex || '');
      console.log("Der Inhalt wurde in 'output.txt' gespeichert.");
    } else {
      console.log(contenidoHex);
    }
  } catch (error) {
    console.error("Fehler beim Lesen der .exe-Datei:", error);
  }
}
