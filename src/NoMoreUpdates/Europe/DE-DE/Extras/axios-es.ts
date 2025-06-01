// axios-de.ts
import axios from 'axios';

// Interfaz für die Struktur der Antwortdaten
interface AntwortData {
    [key: string]: any; // Passe dies an die erwartete Struktur der Daten an
}

interface AxiosDe {
    abrufen(url: string): Promise<AntwortData>;
    senden(url: string, daten: any): Promise<AntwortData>;
    aktualisieren(url: string, daten: any): Promise<AntwortData>;
    loeschen(url: string): Promise<AntwortData>;
}

const axiosDe: AxiosDe = {
    // Funktion zum Abrufen von Daten von einer URL
    abrufen: async (url: string): Promise<AntwortData> => {
        try {
            const antwort = await axios.get<AntwortData>(url);
            return antwort.data;
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
            throw error;
        }
    },

    // Funktion zum Senden von Daten an eine URL
    senden: async (url: string, daten: any): Promise<AntwortData> => {
        try {
            const antwort = await axios.post<AntwortData>(url, daten);
            return antwort.data;
        } catch (error) {
            console.error('Fehler beim Senden der Daten:', error);
            throw error;
        }
    },

    // Funktion zum Aktualisieren von Daten an einer URL
    aktualisieren: async (url: string, daten: any): Promise<AntwortData> => {
        try {
            const antwort = await axios.put<AntwortData>(url, daten);
            return antwort.data;
        } catch (error) {
            console.error('Fehler beim Aktualisieren der Daten:', error);
            throw error;
        }
    },

    // Funktion zum Löschen von Daten an einer URL
    loeschen: async (url: string): Promise<AntwortData> => {
        try {
            const antwort = await axios.delete<AntwortData>(url);
            return antwort.data;
        } catch (error) {
            console.error('Fehler beim Löschen der Daten:', error);
            throw error;
        }
    }
};

export default axiosDe;