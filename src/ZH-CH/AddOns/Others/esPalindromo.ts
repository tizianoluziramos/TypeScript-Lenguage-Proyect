export function 是回文(单词: string): boolean {
    let 反转 = 单词.split("").reverse().join("");
    if (反转 === 单词) {
        return true;            
    } 
    return false;
}
