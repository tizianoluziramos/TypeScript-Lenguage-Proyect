export function inverserChaine(chaine: string): string {
    // Retourne une chaîne qui est identique à la chaîne séparée par rien, puis inverse la chaîne et la rejoint
    // Split divise en un tableau
    return chaine.split('').reverse().join("");
}
