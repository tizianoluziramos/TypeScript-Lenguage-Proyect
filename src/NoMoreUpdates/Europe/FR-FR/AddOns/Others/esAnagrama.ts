export function estAnagramme(chaine1: string, chaine2: string): boolean {
  if (chaine1 === chaine2) {
    return true;
  }
  if (
    // LE SORT LES ORDONNE PAR ORDRE ALPHABÉTIQUE
    // Le split les sépare comme s'ils étaient dans des tableaux
    // Le join les rejoint
    // Vérifie si les deux chaînes sont égales (les ordonnées par ordre alphabétique)
    chaine1.toLowerCase().replace(/\s+/g, "").split("").sort().join("") ===
    chaine2.toLowerCase().replace(/\s+/g, "").split("").sort().join("")
  ) {
    // Si la chaîne est égale à la chaîne inversée, retourne vrai
    return true;
  }
  // Sinon retourne faux
  return false;
}
