"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intentarCapturar = intentarCapturar;
// manejoErrores.ts
function intentarCapturar(bloque, capturar) {
    try {
        bloque();
    }
    catch (error) {
        capturar(error);
    }
}
