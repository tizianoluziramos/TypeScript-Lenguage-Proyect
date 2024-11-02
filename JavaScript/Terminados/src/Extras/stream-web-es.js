"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// stream-web-es.ts
const stream_1 = require("stream");
// Clase de lectura
class Lectura extends stream_1.Readable {
    constructor(opciones) {
        super(opciones);
    }
    _read(tamaño) {
        // Implementación personalizada del método _read
        this.push('Ejemplo de dato'); // Ejemplo de dato a emitir
        this.push(null); // Finaliza el flujo
    }
    static desdeArray(arr) {
        const flujo = new Lectura();
        arr.forEach(dato => flujo.push(dato));
        flujo.push(null); // Finalizar el flujo
        return flujo;
    }
}
// Clase de escritura
class Escritura extends stream_1.Writable {
    constructor(opciones) {
        super(opciones);
        this.arr = []; // Almacenar los datos
    }
    _write(dato, codificacion, callback) {
        // Agregar el dato al array
        this.arr.push(dato);
        callback(); // Llamar al callback para indicar que se ha procesado
    }
    _final(callback) {
        // Finalizar y devolver los datos acumulados
        console.log('Datos escritos:', this.arr);
        callback(); // Finaliza el flujo
    }
    getDatos() {
        return this.arr; // Método para acceder a los datos almacenados
    }
}
// Clase de transformación
class Transformacion extends stream_1.Transform {
    constructor(opciones) {
        super(opciones);
    }
    _transform(dato, codificacion, callback) {
        // Transformar el dato recibido (por ejemplo, convertir a mayúsculas)
        const resultado = dato.toString().toUpperCase();
        callback(null, resultado); // Devolver el resultado transformado
    }
}
// Clase duplex (lectura y escritura)
class Duplicado extends stream_1.Duplex {
    constructor(opciones) {
        super(opciones);
    }
    _read(tamaño) {
        // Emitir datos en el flujo
        this.push('Dato del flujo duplicado');
        this.push(null); // Indica que no hay más datos
    }
    _write(dato, codificacion, callback) {
        // Procesar el dato recibido
        console.log('Escribiendo en Duplicado:', dato);
        callback(); // Llamar al callback para indicar que se ha procesado
    }
}
// Clase PassThrough
class Pasar extends stream_1.PassThrough {
    constructor(opciones) {
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
exports.default = streamEnEspanol;
