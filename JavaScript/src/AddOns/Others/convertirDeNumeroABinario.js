"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertirABinario = convertirABinario;
function convertirABinario(texto) {
    return texto
        .split('') // Divide el texto en caracteres individuales
        .map((caracter) => {
        const binario = caracter.charCodeAt(0).toString(2); // Obtiene el código ASCII en binario
        return binario.padStart(8, '0'); // Asegura que cada binario tenga 8 bits
    })
        .join(' '); // Une todos los binarios separados por espacio
}
