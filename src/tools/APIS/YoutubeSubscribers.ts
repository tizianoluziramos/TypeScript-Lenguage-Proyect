import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

interface YouTubeStatisticsResponse {
  items: Array<{
    statistics: {
      subscriberCount: string;
    };
  }>;
}

export async function obtenerSuscriptoresPorId(canalID: string): Promise<number | null> {
  const apiKey: string | undefined = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    console.error("No se encontró la API key de YouTube en el .env");
    return null;
  }
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