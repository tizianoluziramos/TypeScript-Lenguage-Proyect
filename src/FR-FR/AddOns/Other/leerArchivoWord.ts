import * as fs from 'fs';
import * as mammoth from 'mammoth';

export async function lireFichierWord(rutaArchivo: string): Promise<void> {
    try {
        const buffer = fs.readFileSync(rutaArchivo);
        const result = await mammoth.extractRawText({ buffer });
        console.log(result.value);
    } catch (error) {
        console.log(error);
    }
}
