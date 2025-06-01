import axios from 'axios';

// Schnittstelle für die Struktur der Antwortdaten
interface AntwortKonvertierung {
    output: string; // Passe dies an die erwartete Struktur der Antwort an
}

export async function pascalZuTypeScriptKonvertieren(data: string): Promise<string> {
    // Den Benutzer auffordern, den Pascal-Code einzugeben
    const pascalCode = data;

    const url = 'https://magicloops.dev/api/loop/e27f4c9c-9df3-42d3-be5d-259f9942b92b/run';
    const kodierterPayload = encodeURIComponent(pascalCode); // Den Inhalt codieren

    try {
        const response = await axios.post<AntwortKonvertierung>(url, { input: kodierterPayload });
        return response.data.output; // Gibt das erwartete Feld der Antwort zurück
    } catch (error) {
        console.error('Fehler:', error);
        return 'Fehler bei der Konvertierung des Codes';
    }
}