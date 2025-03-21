import axios from 'axios';

export async function converterPythonParaTypeScript(dados: any): Promise<string> {
  // Solicitar ao usuário para inserir o código Python
  const codigoPython = dados

  const url = 'https://magicloops.dev/api/loop/5ea8675e-346a-4c19-a3e8-203f01598fe7/run';
  const payloadCodificado = encodeURIComponent(codigoPython); // Codificar o conteúdo

  try {
    const resposta = await axios.post(url, { input: payloadCodificado });
    return resposta.data;
  } catch (erro) {
    console.error('Erro:', erro);
    return 'Erro ao converter o código';
  }
}
