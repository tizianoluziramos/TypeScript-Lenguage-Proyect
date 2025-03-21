// axios-de.ts
import axios, { AxiosResponse } from 'axios';

interface AxiosDe {
    abrufen(url: string): Promise<any>;
    senden(url: string, daten: any): Promise<any>;
    aktualisieren(url: string, daten: any): Promise<any>;
    loeschen(url: string): Promise<any>;
}

const axiosDe: AxiosDe = {
    // Funktion zum Abrufen von Daten von einer URL
    abrufen: async (url: string): Promise<any> => {
        try {
            const antwort: AxiosResponse = await axios.get(url);
            return antwort.data;
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
            throw error;
        }
    },

    // Funktion zum Senden von Daten an eine URL
    senden: async (url: string, daten: any): Promise<any> => {
        try {
            const antwort: AxiosResponse = await axios.post(url, daten);
            return antwort.data;
        } catch (error) {
            console.error('Fehler beim Senden der Daten:', error);
            throw error;
        }
    },

    // Funktion zum Aktualisieren von Daten an einer URL
    aktualisieren: async (url: string, daten: any): Promise<any> => {
        try {
            const antwort: AxiosResponse = await axios.put(url, daten);
            return antwort.data;
        } catch (error) {
            console.error('Fehler beim Aktualisieren der Daten:', error);
            throw error;
        }
    },

    // Funktion zum Löschen von Daten an einer URL
    loeschen: async (url: string): Promise<any> => {
        try {
            const antwort: AxiosResponse = await axios.delete(url);
            return antwort.data;
        } catch (error) {
            console.error('Fehler beim Löschen der Daten:', error);
            throw error;
        }
    }
};

export default axiosDe;
