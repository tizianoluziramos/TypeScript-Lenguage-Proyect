export function umkehrenString(cadena: string): string {
    // Gibt einen String zurück, der gleich dem umgedrehten String ist.
    // Split teilt die Zeichenkette in ein Array
    return cadena.split('').reverse().join("");
}
