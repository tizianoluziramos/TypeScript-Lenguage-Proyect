export function contarVogais(cadeia: string): number {
    let acumulador: number = 0;
    cadeia = cadeia.toLowerCase();
    for (let index = 0; index < cadeia.length; index++) {
        if (cadeia.charAt(index) === 'a' || cadeia.charAt(index) === 'e' || cadeia.charAt(index) === 'i' || cadeia.charAt(index) === 'o' || cadeia.charAt(index) === 'u' || cadeia.charAt(index) === 'á' || cadeia.charAt(index) === 'é' || cadeia.charAt(index) === 'í' || cadeia.charAt(index) === 'ó' || cadeia.charAt(index) === 'ú' || cadeia.charAt(index) === 'ü' || cadeia.charAt(index) === 'ä' || cadeia.charAt(index) === 'ï' || cadeia.charAt(index) === 'ö' || cadeia.charAt(index) === 'ë') {
           acumulador++;          
        } 
    }
    return acumulador;
}
