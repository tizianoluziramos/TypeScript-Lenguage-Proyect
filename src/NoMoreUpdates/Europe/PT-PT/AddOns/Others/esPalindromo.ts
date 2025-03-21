export function ePalindromo(palavra: string): boolean {
    let aoContrario = palavra.split("").reverse().join("");
    if (aoContrario === palavra) {
        return true;            
    } 
    return false;
}
