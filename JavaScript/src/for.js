"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucles = bucles;
// bucles.ts
function bucles(inicio, condicion, incremento, bloque) {
    for (let i = inicio; condicion(i); i = incremento(i)) {
        bloque(i);
    }
}
