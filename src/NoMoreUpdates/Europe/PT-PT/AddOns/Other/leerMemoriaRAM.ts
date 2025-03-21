import * as fs from 'fs';
import { exec } from 'child_process';

export function lerProcessoNaMemoria(pid: number, limiteBytesDeMemoria: number, permitirArquivoTXT: boolean): void {
  exec(`cat /proc/${pid}/mem`, (erro, stdout, stderr) => {
    if (erro) {
      console.error(`Erro ao ler a memória do processo: ${stderr}`);
      return;
    }

    const conteudo = stdout.slice(0, limiteBytesDeMemoria);
    const conteudoHex = Buffer.from(conteudo).toString('hex').match(/.{1,2}/g)?.join(' ');

    if (permitirArquivoTXT) {
      fs.writeFileSync('memoria_processo.txt', conteudoHex || '');
      console.log("A informação da memória do processo foi salva em 'memoria_processo.txt'.");
    } else {
      console.log(conteudoHex);
    }
  });
}
