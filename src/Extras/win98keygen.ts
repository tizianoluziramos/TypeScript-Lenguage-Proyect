export function GenerarClavesDeWindows98(): string {
  const letras = "ABCDEFGHJKLMNPQRSTUVWXYZ"; // Sin I,O para evitar confusión
  const numeros = "0123456789";
  const caracteres = letras + numeros;

  // Convierte un caracter a su valor numérico (A=1,...Z=26, números su valor)
  function valorChar(c: string): number {
    if (letras.includes(c)) {
      return letras.indexOf(c) + 1;
    }
    if (numeros.includes(c)) {
      return parseInt(c, 10);
    }
    return 0;
  }

  // Genera un bloque de 5 caracteres aleatorios
  function generarBloque(): string {
    let bloque = "";
    for (let i = 0; i < 5; i++) {
      const c = caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
      bloque += c;
    }
    return bloque;
  }

  // Suma los valores de un bloque
  function sumaBloque(bloque: string): number {
    return bloque.split("").reduce((acc, c) => acc + valorChar(c), 0);
  }

  let bloques: string[] = [];
  let sumaTotal = 0;

  // Queremos 5 bloques, intentamos generar hasta que la suma total sea divisible por 25 +/- un margen
  while (true) {
    bloques = [];
    sumaTotal = 0;
    for (let i = 0; i < 5; i++) {
      const bloque = generarBloque();
      bloques.push(bloque);
      sumaTotal += sumaBloque(bloque);
    }
    // Condición de validación: suma total divisible por 25 +/- 2 (margen)
    if (sumaTotal % 25 <= 2 || sumaTotal % 25 >= 23) {
      break;
    }
  }

  return bloques.join("-");
}