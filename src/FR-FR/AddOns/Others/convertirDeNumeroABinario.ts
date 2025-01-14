export function convertirEnBinaire(texte: string): string {
    return texte
        .split('') // Divise le texte en caractères individuels
        .map((caractere) => {
            const binaire = caractere.charCodeAt(0).toString(2); // Obtient le code ASCII en binaire
            return binaire.padStart(8, '0'); // Assure que chaque binaire ait 8 bits
        })
        .join(' '); // Joint tous les binaires séparés par un espace
}
