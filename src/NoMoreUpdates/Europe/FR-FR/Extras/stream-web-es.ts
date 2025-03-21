// stream-web-fr.ts
import {
    Readable,
    Writable,
    Transform,
    Duplex as StreamDuplex,
    PassThrough,
    ReadableOptions,
    WritableOptions,
    TransformOptions,
    DuplexOptions,
} from "stream";

// Classe de lecture
class Lecture extends Readable {
    constructor(options?: ReadableOptions) {
        super(options);
    }

    _read(taille: number): void {
        // Implémentation personnalisée de la méthode _read
        this.push("Exemple de donnée"); // Exemple de donnée à émettre
        this.push(null); // Termine le flux
    }

    static depuisArray(arr: any[]): Lecture {
        const flux = new Lecture();
        arr.forEach((donnee) => flux.push(donnee));
        flux.push(null); // Termine le flux
        return flux;
    }
}

// Classe d'écriture
class Ecriture extends Writable {
    private arr: any[] = []; // Stocker les données

    constructor(options?: WritableOptions) {
        super(options);
    }

    _write(donnee: any, encodage: string, callback: (error?: Error | null) => void): void {
        // Ajouter les données au tableau
        this.arr.push(donnee);
        callback(); // Indiquer que le traitement est terminé
    }

    _final(callback: (error?: Error | null) => void): void {
        // Finaliser et afficher les données accumulées
        console.log("Données écrites:", this.arr);
        callback(); // Termine le flux
    }

    getDonnées(): any[] {
        return this.arr; // Méthode pour accéder aux données stockées
    }
}

// Classe de transformation
class Transformation extends Transform {
    constructor(options?: TransformOptions) {
        super(options);
    }

    _transform(donnee: any, encodage: string, callback: (error?: Error | null, résultat?: any) => void): void {
        // Transformer les données reçues (par exemple, en majuscules)
        const résultat = donnee.toString().toUpperCase();
        callback(null, résultat); // Retourner le résultat transformé
    }
}

// Classe duplex (lecture et écriture)
class DuplexPersonnalise extends StreamDuplex {
    constructor(options?: DuplexOptions) {
        super(options);
    }

    _read(taille: number): void {
        // Émettre des données dans le flux
        this.push("Donnée du flux duplex");
        this.push(null); // Indiquer qu'il n'y a plus de données
    }

    _write(donnee: any, encodage: string, callback: (error?: Error | null) => void): void {
        // Traiter les données reçues
        console.log("Écriture dans Duplex:", donnee);
        callback(); // Indiquer que le traitement est terminé
    }
}

// Classe PassThrough
class Passer extends PassThrough {
    constructor(options?: DuplexOptions) {
        super(options);
    }
}

// Exporter les classes
const fluxEnFrancais = {
    Lecture,
    Ecriture,
    Transformation,
    DuplexPersonnalise,
    Passer,
};

export default fluxEnFrancais;
