export function অ্যানাগ্রাম(সুতো1: string, সুতো2: string): boolean {
  if (সুতো1 === সুতো2) {
    return true;
  }
  if (
    //EL SORT LOS ORDENA EN ORDEN ALFABETICO
    //El split los separa como si fuera por arrays
    //El join los une
    //Verifica si las dos cadenas son iguales, (las ordenadas por orden alfabetico)
    সুতো1.toLowerCase().replace(/\s+/g, "").split("").sort().join("") ===
    সুতো2.toLowerCase().replace(/\s+/g, "").split("").sort().join("")
  ) {
    //Si la cadena es igual a la cadena invertida retorna true
    return true;
  } //Sino retorna false
  return false;
}
