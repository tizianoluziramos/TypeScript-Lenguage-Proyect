import axios from 'axios';

export async function obtenerSuscriptoresPorId(canalID: string): Promise<number | null> {
  const apiKey = 'AIzaSyDpTRQ08lIOPoFBbSdGLLMtGfE7W-6mfCs';  // Reemplaza con tu clave de API real
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${canalID}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const suscriptores = response.data.items[0].statistics.subscriberCount;
    return parseInt(suscriptores);
  } catch (error) {
    console.error("Error al obtener los suscriptores:", error);
    return null;
  }
}

