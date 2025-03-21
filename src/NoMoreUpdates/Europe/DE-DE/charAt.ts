// charAt.ts

// Erweitere das String-Prototyp, um die Funktion zeichenAn hinzuzufügen
declare global {
    interface String {
        zeichenAn(index: number): string;
    }
}

String.prototype.zeichenAn = function (index: number): string {
    const laenge = this.length;

    // Negative Indizes behandeln
    if (index < 0) {
        index = laenge + index;
    }

    // Überprüfen, ob der Index innerhalb der Grenzen liegt
    if (index < 0 || index >= laenge) {
        return ""; // Gibt einen leeren String zurück, wenn der Index außerhalb der Grenzen liegt
    }

    // Das Zeichen an der angegebenen Position zurückgeben
    return this.charAt(index);
};

// Exportiere die Funktion, um sie in anderen Dateien verwenden zu können
export const zeichenAn = function (this: string, index: number): string {
    return this.zeichenAn(index);
};
