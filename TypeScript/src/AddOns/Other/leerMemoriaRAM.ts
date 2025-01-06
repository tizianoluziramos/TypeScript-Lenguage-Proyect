import * as fs from 'fs';
import { exec } from 'child_process';

export function leerProcesoEnLaMemoria(pid: number, limiteBytesDeMemoria: number, allowTXTFile: boolean): void {
  exec(`cat /proc/${pid}/mem`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al leer la memoria del proceso: ${stderr}`);
      return;
    }

    const contenido = stdout.slice(0, limiteBytesDeMemoria);
    const contenidoHex = Buffer.from(contenido).toString('hex').match(/.{1,2}/g)?.join(' ');

    if (allowTXTFile) {
      fs.writeFileSync('memoria_proceso.txt', contenidoHex || '');
      console.log("La información de la memoria del proceso se ha guardado en 'memoria_proceso.txt'.");
    } else {
      console.log(contenidoHex);
    }
  });
}
