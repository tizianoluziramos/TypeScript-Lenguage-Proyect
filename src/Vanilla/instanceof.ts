/**
 * Verifica si un objeto es de una clase específica, como "instanceof" pero en español.
 * @param objeto El objeto que queremos revisar.
 * @param clase La clase contra la que se compara.
 * @returns true si el objeto es una instancia de esa clase, false si no.
 */
export function esInstanciaDe(objeto: any, clase: Function): boolean {
  return objeto instanceof clase;
}