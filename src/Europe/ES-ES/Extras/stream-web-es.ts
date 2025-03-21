// stream-web-es.ts
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

// Clase de lectura
class Lectura extends Readable {
    constructor(opciones?: ReadableOptions) {
        super(opciones);
    }

    _read(tamaño: number): void {
        // Implementación personalizada del método _read
        this.push('Ejemplo de dato'); // Ejemplo de dato a emitir
        this.push(null); // Finaliza el flujo
    }

    static desdeArray(arr: any[]): Lectura {
        const flujo = new Lectura();
        arr.forEach(dato => flujo.push(dato));
        flujo.push(null); // Finalizar el flujo
        return flujo;
    }
}

// Clase de escritura
class Escritura extends Writable {
    private arr: any[] = []; // Almacenar los datos

    constructor(opciones?: WritableOptions) {
        super(opciones);
    }

    _write(dato: any, codificacion: string, callback: (error?: Error | null) => void): void {
        // Agregar el dato al array
        this.arr.push(dato);
        callback(); // Llamar al callback para indicar que se ha procesado
    }

    _final(callback: (error?: Error | null) => void): void {
        // Finalizar y devolver los datos acumulados
        console.log('Datos escritos:', this.arr);
        callback(); // Finaliza el flujo
    }

    getDatos(): any[] {
        return this.arr; // Método para acceder a los datos almacenados
    }
}

// Clase de transformación
class Transformacion extends Transform {
    constructor(opciones?: TransformOptions) {
        super(opciones);
    }

    _transform(dato: any, codificacion: string, callback: (error?: Error | null, resultado?: any) => void): void {
        // Transformar el dato recibido (por ejemplo, convertir a mayúsculas)
        const resultado = dato.toString().toUpperCase();
        callback(null, resultado); // Devolver el resultado transformado
    }
}

// Clase duplex (lectura y escritura)
class Duplicado extends Duplex {
    constructor(opciones?: DuplexOptions) {
        super(opciones);
    }

    _read(tamaño: number): void {
        // Emitir datos en el flujo
        this.push('Dato del flujo duplicado');
        this.push(null); // Indica que no hay más datos
    }

    _write(dato: any, codificacion: string, callback: (error?: Error | null) => void): void {
        // Procesar el dato recibido
        console.log('Escribiendo en Duplicado:', dato);
        callback(); // Llamar al callback para indicar que se ha procesado
    }
}

// Clase PassThrough
class Pasar extends PassThrough {
    constructor(opciones?: DuplexOptions) {
        super(opciones);
    }
}

// Exportar las clases
const streamEnEspanol = {
    Lectura,
    Escritura,
    Transformacion,
    Duplicado,
    Pasar
};

export default streamEnEspanol;
