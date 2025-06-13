export function istAnagramm(str1: string, str2: string): boolean {
  if (str1 === str2) {
    return true;
  }
  if (
    // DER SORT ORDNET SIE IN ALPHABETISCHER REIHENFOLGE
    // Das Split trennt sie wie ein Array
    // Das Join verbindet sie
    // Überprüft, ob die beiden Strings gleich sind (nach alphabetischer Reihenfolge sortiert)
    str1.toLowerCase().replace(/\s+/g, "").split("").sort().join("") ===
    str2.toLowerCase().replace(/\s+/g, "").split("").sort().join("")
  ) {
    // Wenn der String gleich dem umgekehrten String ist, gibt er true zurück
    return true;
  } // Sonst gibt er false zurück
  return false;
}
