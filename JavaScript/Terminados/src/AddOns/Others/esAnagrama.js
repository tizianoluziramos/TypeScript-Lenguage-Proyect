"use strict";
/*export function esAnagrama(cadena1: string, cadena2: string): boolean {
    
    if (cadena1 === cadena2) {
        return true;
    }

    const normalizar = (cadena: string) => {
        return cadena.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    };

    return normalizar(cadena1) === normalizar(cadena2);
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.esAnagrama = esAnagrama;
function esAnagrama(cadena1, cadena2) {
    if (cadena1 === cadena2) {
        return true;
    }
    if (
    //EL SORT LOS ORDENA EN ORDEN ALFABETICO
    //El split los separa como si fuera por arrays
    //El join los une
    //Verifica si las dos cadenas son iguales, (las ordenadas por orden alfabetico)
    cadena1.toLowerCase().replace(/\s+/g, "").split("").sort().join("") ===
        cadena2.toLowerCase().replace(/\s+/g, "").split("").sort().join("")) {
        //Si la cadena es igual a la cadena invertida retorna true
        return true;
    } //Sino retorna false
    return false;
}
console.log(esAnagrama("roma", "amor"));
