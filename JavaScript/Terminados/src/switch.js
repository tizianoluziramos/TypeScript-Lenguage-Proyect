"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caso = caso;
function caso(valor, ...opciones) {
    for (const { condicion, bloque } of opciones) {
        if (valor === condicion) {
            bloque();
            return;
        }
    }
}
