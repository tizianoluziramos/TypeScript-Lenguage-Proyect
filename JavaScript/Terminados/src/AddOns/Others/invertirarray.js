"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invertirArray = invertirArray;
function invertirArray(array) {
    return array.map(elemento => elemento.split('').reverse().join(''));
}
