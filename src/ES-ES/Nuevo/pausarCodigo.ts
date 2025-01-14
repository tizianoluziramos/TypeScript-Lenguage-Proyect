export function pausarCodigo(timeout: number | string): void {
  // Mapa de claves predefinidas a tiempos en milisegundos
  const predefinedTimes: { [key: string]: number } = {
    mitiempo: 2000,
    corto: 1000,
    largo: 5000,
  };

  const time = typeof timeout === "string" ? predefinedTimes[timeout] : timeout;

  if (time === undefined || typeof time !== "number" || time < 0) {
    throw new Error("Tiempo no válido");
  }

  const start = Date.now();
  while (Date.now() - start < time) {
  }
}

