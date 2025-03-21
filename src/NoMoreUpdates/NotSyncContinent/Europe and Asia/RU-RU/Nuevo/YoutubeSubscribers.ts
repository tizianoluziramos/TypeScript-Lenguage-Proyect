import axios from 'axios';

export async function получитьПодписчиковПоId(каналID: string): Promise<number | null> {
  const apiKey = 'AIzaSyDpTRQ08lIOPoFBbSdGLLMtGfE7W-6mfCs';  // Замените на ваш реальный ключ API
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${каналID}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const подписчики = response.data.items[0].statistics.subscriberCount;
    return parseInt(подписчики);
  } catch (error) {
    console.error("Ошибка при получении подписчиков:", error);
    return null;
  }
}
