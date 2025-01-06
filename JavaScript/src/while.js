"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mientras = mientras;
// bucles.ts
function mientras(condicion, bloque) {
    while (condicion()) {
        bloque();
    }
}
