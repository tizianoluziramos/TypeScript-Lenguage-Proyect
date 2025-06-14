/**
 * Sanitiza un objeto JSON eliminando propiedades con valores null, undefined,
 * y opcionalmente también strings vacíos, arrays vacíos u objetos vacíos.
 * @param obj - El objeto JSON a sanitizar (puede ser cualquier tipo)
 * @param eliminarVacios - Si es true elimina strings vacíos, arrays y objetos vacíos (default: false)
 * @returns Un nuevo objeto limpio, sin modificar el original
 */
export function sanitizarJSON<T>(obj: T, eliminarVacios: boolean = false): T {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (typeof obj !== "object") {
    // Si no es objeto (ni array), se retorna tal cual
    return obj;
  }

  if (Array.isArray(obj)) {
    // Para arrays, filtramos los elementos no válidos y sanitizamos recursivamente
    const arrSanitizado = obj
      .map((item) => sanitizarJSON(item, eliminarVacios))
      .filter((item) => {
        if (item === null || item === undefined) return false;
        if (eliminarVacios) {
          if (typeof item === "string" && item.trim() === "") return false;
          if (Array.isArray(item) && item.length === 0) return false;
          if (typeof item === "object" && Object.keys(item).length === 0)
            return false;
        }
        return true;
      });
    return arrSanitizado as unknown as T;
  }

  // Para objetos planos, procesamos cada propiedad
  const resultado: any = {};
  for (const [clave, valor] of Object.entries(obj as any)) {
    if (valor === null || valor === undefined) continue;

    const valorSanitizado = sanitizarJSON(valor, eliminarVacios);

    if (eliminarVacios) {
      if (typeof valorSanitizado === "string" && valorSanitizado.trim() === "")
        continue;
      if (Array.isArray(valorSanitizado) && valorSanitizado.length === 0)
        continue;
      if (
        typeof valorSanitizado === "object" &&
        Object.keys(valorSanitizado).length === 0
      )
        continue;
    }

    resultado[clave] = valorSanitizado;
  }

  return resultado as T;
}
