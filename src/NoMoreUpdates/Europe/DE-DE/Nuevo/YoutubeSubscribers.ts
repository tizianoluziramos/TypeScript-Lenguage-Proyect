import axios from 'axios';

// Schnittstelle für die Struktur der Antwortdaten
interface YoutubeKanalStatistikAntwort {
    items: Array<{
        statistics: {
            subscriberCount: string;
        };
    }>;
}

export async function holeAbonnentenNachId(canalID: string): Promise<number | null> {
    const apiSchlüssel = 'AIzaSyDpTRQ08lIOPoFBbSdGLLMtGfE7W-6mfCs';  // Ersetze dies mit deinem echten API-Schlüssel
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${canalID}&key=${apiSchlüssel}`;

    try {
        const antwort = await axios.get<YoutubeKanalStatistikAntwort>(url);
        const abonnenten = antwort.data.items[0].statistics.subscriberCount;
        return parseInt(abonnenten);
    } catch (fehler) {
        console.error("Fehler beim Abrufen der Abonnenten:", fehler);
        return null;
    }
}