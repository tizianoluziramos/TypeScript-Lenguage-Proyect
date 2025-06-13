export function contarVocales(cadena: string): number {
    let acumulador: number = 0;
    cadena = cadena.toLowerCase();
    for (let index = 0; index < cadena.length; index++) {
        if (cadena.charAt(index) === 'a' || cadena.charAt(index) === 'e' || cadena.charAt(index) === 'i' || cadena.charAt(index) === 'o' || cadena.charAt(index) === 'u' || cadena.charAt(index) === 'á' || cadena.charAt(index) === 'é' || cadena.charAt(index) === 'í' || cadena.charAt(index) === 'ó' || cadena.charAt(index) === 'ú' || cadena.charAt(index) === 'ü' || cadena.charAt(index) === 'ä' || cadena.charAt(index) === 'ï' || cadena.charAt(index) === 'ö' || cadena.charAt(index) === 'ë') {
           acumulador++;          
        } 
    }
    return acumulador;
}