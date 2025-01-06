"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.definirTimeout = definirTimeout;
// temporizador.ts
function definirTimeout(ms, bloque) {
    setTimeout(bloque, ms);
}
