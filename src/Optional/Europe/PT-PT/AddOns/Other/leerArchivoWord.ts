import * as fs from 'fs';
import * as mammoth from 'mammoth';

export async function lerArquivoWord(caminhoArquivo: string): Promise<void> {
    try {
        const buffer = fs.readFileSync(caminhoArquivo);
        const resultado = await mammoth.extractRawText({ buffer });
        console.log(resultado.value);
    } catch (erro) {
        console.log(erro);
    }
}
