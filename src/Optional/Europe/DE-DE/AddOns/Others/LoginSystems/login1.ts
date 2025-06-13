import { v4 as uuidv4 } from 'uuid';

export class SchlüsselVerwalter {
    private static zeichen: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    private schlüssel: { schlüssel: string; uuid: string }[] = []; // Speichert Schlüssel und ihre UUIDs

    // Generiert einen Produktschlüssel
    static generiereSchlüssel(): string {
        let schlüssel: string = '';

        for (let i = 0; i < 5; i++) {
            if (i > 0) {
                schlüssel += '-'; // Fügt Bindestriche zwischen den Zeichengruppen hinzu
            }
            for (let j = 0; j < 5; j++) {
                const zufälligerIndex = Math.floor(Math.random() * this.zeichen.length);
                schlüssel += this.zeichen[zufälligerIndex]; // Wählt ein zufälliges Zeichen aus
            }
        }

        return schlüssel;
    }

    // Fügt einen Schlüssel und seine UUID zum Array hinzu
    fügeSchlüsselHinzu(schlüssel: string): void {
        const neueUUID = uuidv4(); // Generiert eine neue UUID
        this.schlüssel.push({ schlüssel, uuid: neueUUID });
    }

    // Überprüft, ob der Schlüssel im Array existiert und mit der UUID übereinstimmt
    validiereSchlüssel(schlüssel: string, uuid: string): boolean {
        return this.schlüssel.some(item => item.schlüssel === schlüssel && item.uuid === uuid);
    }

    // Generiert und fügt einen neuen Schlüssel zum Array hinzu
    erstelleUndFügeSchlüsselHinzu(): void {
        const neuerSchlüssel = SchlüsselVerwalter.generiereSchlüssel();
        this.fügeSchlüsselHinzu(neuerSchlüssel);
        console.log(`Schlüssel generiert und hinzugefügt: ${neuerSchlüssel}`);
    }

    // Zeigt alle gespeicherten Schlüssel an
    zeigeSchlüssel(): void {
        console.log("Gespeicherte Schlüssel:", this.schlüssel);
    }
}

// Anmeldefunktion
export function anmelden(angegebenerSchlüssel: string, eingegebeneUUID: string, key: any): void {
    if (key.validiereSchlüssel(angegebenerSchlüssel, eingegebeneUUID)) {
        console.log("Erfolgreiche Anmeldung.");
    } else {
        console.log("Falscher Schlüssel oder UUID. Bitte versuche es erneut.");
    }
}
