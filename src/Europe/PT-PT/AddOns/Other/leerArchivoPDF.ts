import fs from 'fs';
import pdfParse from 'pdf-parse';

export async function lerPDF(caminhoArquivo: string): Promise<void> {
  try {
    const dataBuffer = fs.readFileSync(caminhoArquivo);
    const data = await pdfParse(dataBuffer);
    console.log(data.text);
  } catch (erro) {
    console.error("Erro ao ler o arquivo PDF:", erro);
  }
}
