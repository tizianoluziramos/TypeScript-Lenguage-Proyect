"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// stream-web-es.ts
var stream_1 = require("stream");
// Clase de lectura
var Lectura = /** @class */ (function (_super) {
    __extends(Lectura, _super);
    function Lectura(opciones) {
        return _super.call(this, opciones) || this;
    }
    Lectura.prototype._read = function (tamaño) {
        // Implementación personalizada del método _read
        this.push('Ejemplo de dato'); // Ejemplo de dato a emitir
        this.push(null); // Finaliza el flujo
    };
    Lectura.desdeArray = function (arr) {
        var flujo = new Lectura();
        arr.forEach(function (dato) { return flujo.push(dato); });
        flujo.push(null); // Finalizar el flujo
        return flujo;
    };
    return Lectura;
}(stream_1.Readable));
// Clase de escritura
var Escritura = /** @class */ (function (_super) {
    __extends(Escritura, _super);
    function Escritura(opciones) {
        var _this = _super.call(this, opciones) || this;
        _this.arr = []; // Almacenar los datos
        return _this;
    }
    Escritura.prototype._write = function (dato, codificacion, callback) {
        // Agregar el dato al array
        this.arr.push(dato);
        callback(); // Llamar al callback para indicar que se ha procesado
    };
    Escritura.prototype._final = function (callback) {
        // Finalizar y devolver los datos acumulados
        console.log('Datos escritos:', this.arr);
        callback(); // Finaliza el flujo
    };
    Escritura.prototype.getDatos = function () {
        return this.arr; // Método para acceder a los datos almacenados
    };
    return Escritura;
}(stream_1.Writable));
// Clase de transformación
var Transformacion = /** @class */ (function (_super) {
    __extends(Transformacion, _super);
    function Transformacion(opciones) {
        return _super.call(this, opciones) || this;
    }
    Transformacion.prototype._transform = function (dato, codificacion, callback) {
        // Transformar el dato recibido (por ejemplo, convertir a mayúsculas)
        var resultado = dato.toString().toUpperCase();
        callback(null, resultado); // Devolver el resultado transformado
    };
    return Transformacion;
}(stream_1.Transform));
// Clase duplex (lectura y escritura)
var Duplicado = /** @class */ (function (_super) {
    __extends(Duplicado, _super);
    function Duplicado(opciones) {
        return _super.call(this, opciones) || this;
    }
    Duplicado.prototype._read = function (tamaño) {
        // Emitir datos en el flujo
        this.push('Dato del flujo duplicado');
        this.push(null); // Indica que no hay más datos
    };
    Duplicado.prototype._write = function (dato, codificacion, callback) {
        // Procesar el dato recibido
        console.log('Escribiendo en Duplicado:', dato);
        callback(); // Llamar al callback para indicar que se ha procesado
    };
    return Duplicado;
}(stream_1.Duplex));
// Clase PassThrough
var Pasar = /** @class */ (function (_super) {
    __extends(Pasar, _super);
    function Pasar(opciones) {
        return _super.call(this, opciones) || this;
    }
    return Pasar;
}(stream_1.PassThrough));
// Exportar las clases
var streamEnEspanol = {
    Lectura: Lectura,
    Escritura: Escritura,
    Transformacion: Transformacion,
    Duplicado: Duplicado,
    Pasar: Pasar
};
exports.default = streamEnEspanol;
