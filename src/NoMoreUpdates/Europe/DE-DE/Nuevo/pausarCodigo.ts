export function pausiereCode(timeout: number | string): void {
  // Zuordnung von vordefinierten Schlüsseln zu Zeiten in Millisekunden
  const vordefinierteZeiten: { [key: string]: number } = {
    mitiempo: 2000,
    corto: 1000,
    largo: 5000,
  };

  const zeit = typeof timeout === "string" ? vordefinierteZeiten[timeout] : timeout;

  if (zeit === undefined || typeof zeit !== "number" || zeit < 0) {
    throw new Error("Ungültige Zeit");
  }

  const start = Date.now();
  while (Date.now() - start < zeit) {
  }
}
