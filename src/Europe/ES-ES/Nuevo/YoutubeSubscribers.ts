import axios from 'axios';

interface YouTubeStatisticsResponse {
  items: Array<{
    statistics: {
      subscriberCount: string;
    };
  }>;
}

export async function obtenerSuscriptoresPorId(canalID: string): Promise<number | null> {
  const apiKey: string = 'AIzaSyDpTRQ08lIOPoFBbSdGLLMtGfE7W-6mfCs';
  const url: string = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${canalID}&key=${apiKey}`;

  try {
    const response = await axios.get<YouTubeStatisticsResponse>(url);
    const suscriptores = response.data.items[0]?.statistics.subscriberCount;

    return suscriptores ? parseInt(suscriptores) : null;
  } catch (error) {
    console.error("Error al obtener los suscriptores:", error);
    return null;
  }
}
