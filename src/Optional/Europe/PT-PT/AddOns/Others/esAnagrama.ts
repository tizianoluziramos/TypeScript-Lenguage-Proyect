export function eAnagrama(cadeia1: string, cadeia2: string): boolean {
  if (cadeia1 === cadeia2) {
    return true;
  }
  if (
    //O SORT ordena em ordem alfabética
    //O split separa como se fosse em arrays
    //O join junta novamente
    //Verifica se as duas cadeias são iguais (as ordenadas em ordem alfabética)
    cadeia1.toLowerCase().replace(/\s+/g, "").split("").sort().join("") ===
    cadeia2.toLowerCase().replace(/\s+/g, "").split("").sort().join("")
  ) {
    //Se a cadeia for igual à cadeia invertida retorna true
    return true;
  } 
  //Caso contrário, retorna false
  return false;
}
