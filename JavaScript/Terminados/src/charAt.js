"use strict";
// charAt.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.caracterEn = void 0;
String.prototype.caracterEn = function (index) {
    const length = this.length;
    // Manejar índices negativos
    if (index < 0) {
        index = length + index;
    }
    // Comprobar que el índice esté dentro de los límites
    if (index < 0 || index >= length) {
        return ""; // Retorna una cadena vacía si el índice está fuera de límites
    }
    // Retornar el carácter en la posición indicada
    return this.charAt(index);
};
// Exportar la función para poder utilizarla en otros archivos
const caracterEn = function (index) {
    return this.caracterEn(index);
};
exports.caracterEn = caracterEn;
