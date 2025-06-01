import axios from 'axios';

interface RespostaConversao {
  data: string; // Ajusta conforme a estrutura esperada da resposta
}

export async function converterPascalParaTypeScript(dados: string): Promise<string> {
  // Solicitar ao usuário para inserir o código Pascal
  const codigoPascal = dados

  const url = 'https://magicloops.dev/api/loop/e27f4c9c-9df3-42d3-be5d-259f9942b92b/run';
  const payloadCodificado = encodeURIComponent(codigoPascal); // Codificar o conteúdo

  try {
    const resposta: RespostaConversao = await axios.post(url, { input: payloadCodificado });
    return resposta.data;
  } catch (erro) {
    console.error('Erro:', erro);
    return 'Erro ao converter o código';
  }
}
