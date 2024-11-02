import * as fs from 'fs';

export function convertirEXEaHexadecimal(rutaArchivo: string, limiteBytes: number, allowTXTFile: boolean): void {
  try {
    const dataBuffer = fs.readFileSync(rutaArchivo);
    const primerosBytes = dataBuffer.subarray(0, limiteBytes);
    const contenidoHex = primerosBytes.toString('hex').match(/.{1,2}/g)?.join(' ');

    if (allowTXTFile) {
      fs.writeFileSync('output.txt', contenidoHex || '');
      console.log("El contenido se ha guardado en 'output.txt'.");
    } else {
      console.log(contenidoHex);
    }
  } catch (error) {
    console.error("Error al leer el archivo .exe:", error);
  }
}