import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

interface RespostaStream {
    data: NodeJS.ReadableStream;
}

export async function baixarArquivo(url: string, caminhoDestino: string) {
    try {
        const resposta: RespostaStream = await axios.get(url, { responseType: 'stream' });

        const caminhoCompleto = path.resolve(caminhoDestino);
        const escritor = fs.createWriteStream(caminhoCompleto);

        resposta.data.pipe(escritor);

        escritor.on('finish', () => {
            console.log(`Arquivo baixado em: ${caminhoCompleto}`);
        });

        escritor.on('error', (erro) => {
            console.error('Erro ao salvar o arquivo:', erro);
        });
    } catch (erro) {
        console.error('Erro ao baixar o arquivo:', erro);
    }
}
