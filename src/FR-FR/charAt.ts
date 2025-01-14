// charAt.ts

// Étendre le prototype de String pour ajouter la fonction caractereA
declare global {
    interface String {
        caractereA(index: number): string;
    }
}

String.prototype.caractereA = function (index: number): string {
    const longueur = this.length;

    // Gérer les indices négatifs
    if (index < 0) {
        index = longueur + index;
    }

    // Vérifier que l'indice est dans les limites
    if (index < 0 || index >= longueur) {
        return ""; // Retourne une chaîne vide si l'indice est hors limites
    }

    // Retourner le caractère à la position indiquée
    return this.charAt(index);
};

// Exporter la fonction pour pouvoir l'utiliser dans d'autres fichiers
export const caractereA = function (this: string, index: number): string {
    return this.caractereA(index);
};
