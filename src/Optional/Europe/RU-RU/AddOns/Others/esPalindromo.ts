export function являетсяПалиндромом(слово: string): boolean {
    let наоборот = слово.split("").reverse().join("");
    if (наоборот === слово) {
        return true;            
    } 
    return false;
}
