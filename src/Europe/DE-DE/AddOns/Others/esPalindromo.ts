export function istPalindrom(wort: string): boolean {
    let umgedreht = wort.split("").reverse().join("");
    if (umgedreht === wort) {
        return true;            
    } 
    return false;
}
