import axios from 'axios';

export async function obtenirAbonnésParId(canalID: string): Promise<number | null> {
  const apiKey = 'AIzaSyDpTRQ08lIOPoFBbSdGLLMtGfE7W-6mfCs';  // Remplacez par votre clé API réelle
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${canalID}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const abonnés = response.data.items[0].statistics.subscriberCount;
    return parseInt(abonnés);
  } catch (error) {
    console.error("Erreur lors de l'obtention des abonnés :", error);
    return null;
  }
}
