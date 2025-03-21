// stream-web-de.ts
import {
    Readable,
    Writable,
    Transform,
    Duplex,
    PassThrough,
    ReadableOptions,
    WritableOptions,
    TransformOptions,
    DuplexOptions
} from 'stream';

// Leseklasse
class Lesen extends Readable {
    constructor(optionen?: ReadableOptions) {
        super(optionen);
    }

    _read(größe: number): void {
        // Benutzerdefinierte Implementierung der _read-Methode
        this.push('Beispieldaten'); // Beispiel von Daten, die gesendet werden
        this.push(null); // Fluss beenden
    }

    static vonArray(arr: any[]): Lesen {
        const fluss = new Lesen();
        arr.forEach(daten => fluss.push(daten));
        fluss.push(null); // Fluss beenden
        return fluss;
    }
}

// Schreibklasse
class Schreiben extends Writable {
    private arr: any[] = []; // Speichern der Daten

    constructor(optionen?: WritableOptions) {
        super(optionen);
    }

    _write(daten: any, kodierung: string, callback: (fehler?: Error | null) => void): void {
        // Füge die Daten zum Array hinzu
        this.arr.push(daten);
        callback(); // Callback aufrufen, um anzuzeigen, dass die Daten verarbeitet wurden
    }

    _final(callback: (fehler?: Error | null) => void): void {
        // Abschluss und Ausgabe der gespeicherten Daten
        console.log('Geschriebene Daten:', this.arr);
        callback(); // Fluss beenden
    }

    getDaten(): any[] {
        return this.arr; // Methode zum Abrufen der gespeicherten Daten
    }
}

// Transformationsklasse
class Transformation extends Transform {
    constructor(optionen?: TransformOptions) {
        super(optionen);
    }

    _transform(daten: any, kodierung: string, callback: (fehler?: Error | null, ergebnis?: any) => void): void {
        // Transformiere die erhaltenen Daten (z.B. in Großbuchstaben umwandeln)
        const ergebnis = daten.toString().toUpperCase();
        callback(null, ergebnis); // Transformiertes Ergebnis zurückgeben
    }
}

// Duplex-Klasse (Lesen und Schreiben)
class Duplexe extends Duplex {
    constructor(optionen?: DuplexOptions) {
        super(optionen);
    }

    _read(größe: number): void {
        // Daten in den Fluss senden
        this.push('Daten vom Duplexfluss');
        this.push(null); // Keine weiteren Daten
    }

    _write(daten: any, kodierung: string, callback: (fehler?: Error | null) => void): void {
        // Empfangenes Datum verarbeiten
        console.log('Schreibe in Duplex:', daten);
        callback(); // Callback aufrufen, um anzuzeigen, dass die Daten verarbeitet wurden
    }
}

// PassThrough-Klasse
class Durchgang extends PassThrough {
    constructor(optionen?: DuplexOptions) {
        super(optionen);
    }
}

// Klassen exportieren
const streamInDeutsch = {
    Lesen,
    Schreiben,
    Transformation,
    Duplexe,
    Durchgang
};

export default streamInDeutsch;
