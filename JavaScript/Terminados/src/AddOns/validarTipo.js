"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarTipo = void 0;
// Validar tipos en tiempo de ejecución
const validarTipo = (valor, tipoEsperado) => {
    return typeof valor === tipoEsperado;
};
exports.validarTipo = validarTipo;
