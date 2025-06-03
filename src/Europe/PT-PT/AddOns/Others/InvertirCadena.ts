export function inverterString(cadena: string): string {
    //Retorna uma string que é igual à string separada por nada, inverte a string e junta novamente
    //Split divide-a num array
    return cadena.split('').reverse().join("");
}
