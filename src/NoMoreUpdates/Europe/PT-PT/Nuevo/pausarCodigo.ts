export function pausarCodigoEmTempo(timeout: number | string): void {
  // Mapa de chaves predefinidas para tempos em milissegundos
  const temposPredefinidos: { [key: string]: number } = {
    mitiempo: 2000,
    curto: 1000,
    longo: 5000,
  };

  const tempo = typeof timeout === "string" ? temposPredefinidos[timeout] : timeout;

  if (tempo === undefined || typeof tempo !== "number" || tempo < 0) {
    throw new Error("Tempo não válido");
  }

  const inicio = Date.now();
  while (Date.now() - inicio < tempo) {
  }
}
