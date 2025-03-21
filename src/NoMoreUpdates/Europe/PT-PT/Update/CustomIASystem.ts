import fs from 'fs';

interface PerguntaResposta {
  input: string;
  output: string;
}

export function normalizarTexto(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, ' ')
    .trim();
}

export function treinarRede(perguntasRespostas: PerguntaResposta[]): { input: string; output: string }[] {
  const treinamento = perguntasRespostas.map(item => ({
    input: normalizarTexto(item.input),
    output: item.output
  }));

  return treinamento;
}

export function perguntarRede(inputTexto: string, caminhoArquivo: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
      if (err) {
        reject(`Erro ao ler o arquivo ${caminhoArquivo}: ${err}`);
        return;
      }

      const perguntasRespostas: PerguntaResposta[] = JSON.parse(data);

      const rede = treinarRede(perguntasRespostas);

      console.log("Rede neural treinada.");

      const textoNormalizado = normalizarTexto(inputTexto);

      const resposta = rede.find(item => item.input === textoNormalizado);

      if (resposta) {
        resolve(resposta.output);
      } else {
        resolve("Desculpe, não entendo essa pergunta.");
      }
    });
  });
}

export async function perguntarAGPT(textoDeEntrada: string, caminhoDoArquivo: string): Promise<string> {
  try {
    const resposta = await perguntarRede(textoDeEntrada, caminhoDoArquivo);
    return resposta;
  } catch (err) {
    return (err as string);  // Garantimos que o erro seja uma string
  }
}
