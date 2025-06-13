export function esPalindromo(palabra: string): boolean {
    let alrevez = palabra.split("").reverse().join("");
    if (alrevez === palabra) {
        return true;            
    } 
    return false;
}