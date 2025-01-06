import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

export async function descargarArchivo(url: string, rutaDestino: string) {
    try {
        const respuesta = await axios.get(url, { responseType: 'stream' });

        const rutaCompleta = path.resolve(rutaDestino);
        const writer = fs.createWriteStream(rutaCompleta);

        respuesta.data.pipe(writer);

        writer.on('finish', () => {
            console.log(`Archivo descargado en: ${rutaCompleta}`);
        });

        writer.on('error', (error) => {
            console.error('Error al guardar el archivo:', error);
        });
    } catch (error) {
        console.error('Error al descargar el archivo:', error);
    }
}