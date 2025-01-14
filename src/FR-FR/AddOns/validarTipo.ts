// Valider les types à l'exécution
export const validerType = <T>(
  valeur: any,
  typeAttendu: string
): valeur is T => {
  return typeof valeur === typeAttendu;
};
