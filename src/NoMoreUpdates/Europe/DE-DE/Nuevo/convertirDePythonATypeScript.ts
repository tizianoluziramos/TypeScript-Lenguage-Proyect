import axios from 'axios';

// Schnittstelle für die Struktur der Antwortdaten
interface AntwortKonvertierung {
    output: string; // Passe dies an die erwartete Struktur der Antwort an
}

export async function pythonZuTypeScriptKonvertieren(data: string): Promise<string> {
    // Den Benutzer auffordern, den Python-Code einzugeben
    const pythonCode = data;

    const url = 'https://magicloops.dev/api/loop/5ea8675e-346a-4c19-a3e8-203f01598fe7/run';
    const kodierterPayload = encodeURIComponent(pythonCode); // Den Inhalt codieren

    try {
        const response = await axios.post<AntwortKonvertierung>(url, { input: kodierterPayload });
        return response.data.output; // Gibt das erwartete Feld der Antwort zurück
    } catch (error) {
        console.error('Fehler:', error);
        return 'Fehler bei der Konvertierung des Codes';
    }
}