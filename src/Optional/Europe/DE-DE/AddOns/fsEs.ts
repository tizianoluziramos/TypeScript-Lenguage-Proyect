import fs from 'fs/promises';
import { Stats } from 'fs';
import iconv from 'iconv-lite'; // Modul zum Codieren importieren

// Definieren des Typs für die Optionen
interface Optionen {
    encoding?: string; // Encoding optional machen
}

export const fsDe = {
    async dateiSchreiben(pfad: string, inhalt: string, optionen: Optionen = {}): Promise<void> {
        try {
            const encoding = optionen.encoding || 'utf-8';
            const buffer = iconv.encode(inhalt, encoding); // Inhalt in den gewünschten Kodierungsbuffer umwandeln
            await fs.writeFile(pfad, buffer);
            console.log('Datei erfolgreich geschrieben.');
        } catch (error) {
            console.error('Fehler beim Schreiben der Datei:', error);
        }
    },

    async dateiAktualisieren(pfad: string, inhalt: string): Promise<void> {
        try {
              await fs.appendFile(pfad, "\n" + inhalt, "utf-8");
              console.log("Datei erfolgreich aktualisiert");
            } catch (error) {
             console.log("Prozess fehlgeschlagen mit Fehler:", error);
        }
    },

    async dateiLesen(dateiName: string): Promise<void> {
        try {
          const daten: string = await fs.readFile(dateiName, "utf-8");
          console.log(daten);
        } catch (error) {
          console.error("Es gab einen Fehler:", error);
        }
      },

    async dateiLöschen(pfad: string): Promise<void> {
        try {
            await fs.unlink(pfad);
            console.log('Datei erfolgreich gelöscht.');
        } catch (error) {
            console.error('Fehler beim Löschen der Datei:', error);
        }
    },

    async dateiUmbenennen(pfadAlt: string, pfadNeu: string): Promise<void> {
        try {
            await fs.rename(pfadAlt, pfadNeu);
            console.log('Datei erfolgreich umbenannt.');
        } catch (error) {
            console.error('Fehler beim Umbenennen der Datei:', error);
        }
    },

    async verzeichnisErstellen(pfad: string, optionen: { recursive?: boolean } = { recursive: false }): Promise<void> {
        try {
            await fs.mkdir(pfad, optionen);
            console.log('Verzeichnis erfolgreich erstellt.');
        } catch (error) {
            console.error('Fehler beim Erstellen des Verzeichnisses:', error);
        }
    },

    async verzeichnisAuflisten(pfad: string) {
      try {
        const elemente = await fs.readdir(pfad, { withFileTypes: true });
        elemente.forEach(element => {
          if (element.isDirectory()) {
            console.log(`📁 Verzeichnis: ${element.name}`);
          } else {
            console.log(`📄 Datei: ${element.name}`);
          }
        });
      } catch (error) {
        console.error('Fehler beim Lesen des Verzeichnisses:', error);
      }
    },

    async dateiKopieren(pfadQuelle: string, pfadZiel: string): Promise<void> {
        try {
            await fs.copyFile(pfadQuelle, pfadZiel);
            console.log('Datei erfolgreich kopiert.');
        } catch (error) {
            console.error('Fehler beim Kopieren der Datei:', error);
        }
    },

    async dateiStatistikErhalten(pfadDatei: string) {
      try {
        const statistik = await fs.stat(pfadDatei);
        
        console.log(`📄 Datei: ${pfadDatei}`);
        console.log(`- Größe: ${statistik.size} Bytes`);
        console.log(`- Erstellungsdatum: ${statistik.birthtime}`);
        console.log(`- Letzte Änderung: ${statistik.mtime}`);
        console.log(`- Ist Datei: ${statistik.isFile()}`);
        console.log(`- Ist Verzeichnis: ${statistik.isDirectory()}`);
      } catch (error) {
        console.error('Fehler beim Abrufen der Dateistatistik:', error);
      }
    },  
};
