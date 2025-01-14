// stream-web-fr.ts
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

// Classe de lecture
class Lecture extends Readable {
    constructor(opciones?: ReadableOptions) {
        super(opciones);
    }

    _read(tamaño: number): void {
        // Implémentation personnalisée de la méthode _read
        this.push('Exemple de donnée'); // Exemple de donnée à émettre
        this.push(null); // Termine le flux
    }

    static depuisArray(arr: any[]): Lecture {
        const flux = new Lecture();
        arr.forEach(dato => flux.push(dato));
        flux.push(null); // Termine le flux
        return flux;
    }
}

// Classe d'écriture
class Ecriture extends Writable {
    private arr: any[] = []; // Stocker les données

    constructor(opciones?: WritableOptions) {
        super(opciones);
    }

    _write(dato: any, codificacion: string, callback: (error?: Error | null) => void): void {
        // Ajouter les données au tableau
        this.arr.push(dato);
        callback(); // Appeler le callback pour indiquer que le traitement est terminé
    }

    _final(callback: (error?: Error | null) => void): void {
        // Finaliser et retourner les données accumulées
        console.log('Données écrites:', this.arr);
        callback(); // Termine le flux
    }

    getDonnées(): any[] {
        return this.arr; // Méthode pour accéder aux données stockées
    }
}

// Classe de transformation
class Transformation extends Transform {
    constructor(opciones?: TransformOptions) {
        super(opciones);
    }

    _transform(dato: any, codificacion: string, callback: (error?: Error | null, résultat?: any) => void): void {
        // Transformer les données reçues (par exemple, les convertir en majuscules)
        const résultat = dato.toString().toUpperCase();
        callback(null, résultat); // Retourner le résultat transformé
    }
}

// Classe duplex (lecture et écriture)
class Duplex extends Duplex {
    constructor(opciones?: DuplexOptions) {
        super(opciones);
    }

    _read(tamaño: number): void {
        // Émettre des données dans le flux
        this.push('Donnée du flux duplex');
        this.push(null); // Indique qu'il n'y a plus de données
    }

    _write(dato: any, codificacion: string, callback: (error?: Error | null) => void): void {
        // Traiter les données reçues
        console.log('Écriture dans Duplex:', dato);
        callback(); // Appeler le callback pour indiquer que le traitement est terminé
    }
}

// Classe PassThrough
class Passer extends PassThrough {
    constructor(opciones?: DuplexOptions) {
        super(opciones);
    }
}

// Exporter les classes
const fluxEnFrancais = {
    Lecture,
    Ecriture,
    Transformation,
    Duplex,
    Passer
};

export default fluxEnFrancais;
