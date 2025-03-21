export function invertirCadena(cadena: string): string {
    //Retorna una cadena que es igual a la cadena separada por nada, lo da vuelta a la cadena y la une
    //Slit lo divide en un array
    return cadena.split('').reverse().join("");
}