export function rechercherObjet<T>(tableau: T[], critere: (objet: T) => boolean): T | undefined {
    return tableau.find(critere);
}
