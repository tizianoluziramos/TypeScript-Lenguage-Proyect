export function estPalindrome(mot: string): boolean {
    let aLenvers = mot.split("").reverse().join("");
    if (aLenvers === mot) {
        return true;
    }
    return false;
}
