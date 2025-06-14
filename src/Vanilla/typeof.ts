type TipoJS =
  | "string"
  | "number"
  | "boolean"
  | "undefined"
  | "object"
  | "function"
  | "symbol"
  | "bigint";

/**
 * Devuelve el tipo de un valor como texto, igual que typeof pero con nombre en español.
 * El valor devuelto tiene autocompletado.
 * @param valor El valor que queremos revisar.
 * @returns El tipo del valor (con sugerencias automáticas).
 */
export function esTipoDe(valor: any): TipoJS {
  return typeof valor as TipoJS;
}
