"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esPalindromo = esPalindromo;
function esPalindromo(palabra) {
    let alrevez = palabra.split("").reverse().join("");
    if (alrevez === palabra) {
        return true;
    }
    return false;
}
