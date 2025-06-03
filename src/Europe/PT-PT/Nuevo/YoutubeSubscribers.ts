import axios from 'axios';

// Interface para a resposta da API do CoinGecko
export interface YoutubeSubscribersResponse {
  items: Array<{
    statistics: {
      subscriberCount: string;
    };
  }>;
}

export async function obterSubscritoresPorId(canalID: string): Promise<number | null> {
  const apiKey = 'AIzaSyDpTRQ08lIOPoFBbSdGLLMtGfE7W-6mfCs';  // Substitui com a tua chave de API real
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${canalID}&key=${apiKey}`;

  try {
    const response = await axios.get<YoutubeSubscribersResponse>(url);
    if (!response.data.items || response.data.items.length === 0) {
      console.error("Nenhum canal encontrado com o ID fornecido.");
      return null;
    }
    const subscritores = response.data.items[0].statistics.subscriberCount;
    return parseInt(subscritores);
  } catch (error) {
    console.error("Erro ao obter os subscritores:", error);
    return null;
  }
}
