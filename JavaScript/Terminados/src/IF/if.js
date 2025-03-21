"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Si = void 0;
// if.ts
class Si {
    constructor(condicion) {
        this.condicion = condicion;
    }
    entonces(accion) {
        if (this.condicion) {
            accion(); // Ejecuta la acción si la condición es verdadera
        }
        else if (this.accionSino) {
            this.accionSino(); // Ejecuta la acción sino si está definida
        }
        return this; // Permite encadenar
    }
    sino(accion) {
        this.accionSino = accion; // Almacena la acción sino
        return this; // Permite encadenar
    }
}
exports.Si = Si;
