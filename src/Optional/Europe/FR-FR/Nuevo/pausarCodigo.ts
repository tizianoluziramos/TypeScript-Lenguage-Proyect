export function mettreEnPauseCode(timeout: number | string): void {
  // Carte des clés prédéfinies aux temps en millisecondes
  const tempsPrédéfinis: { [key: string]: number } = {
    mitiempo: 2000,
    court: 1000,
    long: 5000,
  };

  const temps = typeof timeout === "string" ? tempsPrédéfinis[timeout] : timeout;

  if (temps === undefined || typeof temps !== "number" || temps < 0) {
    throw new Error("Temps non valide");
  }

  const début = Date.now();
  while (Date.now() - début < temps) {
  }
}
