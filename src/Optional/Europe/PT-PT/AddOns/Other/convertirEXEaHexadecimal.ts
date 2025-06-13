import * as fs from 'fs';

export function converterEXEaHexadecimal(caminhoArquivo: string, limiteBytes: number, permitirArquivoTXT: boolean): void {
  try {
    const dataBuffer = fs.readFileSync(caminhoArquivo);
    const primeirosBytes = dataBuffer.subarray(0, limiteBytes);
    const conteudoHex = primeirosBytes.toString('hex').match(/.{1,2}/g)?.join(' ');

    if (permitirArquivoTXT) {
      fs.writeFileSync('output.txt', conteudoHex || '');
      console.log("O conteúdo foi salvo em 'output.txt'.");
    } else {
      console.log(conteudoHex);
    }
  } catch (erro) {
    console.error("Erro ao ler o arquivo .exe:", erro);
  }
}
