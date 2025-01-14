export function 计算元音数量(字符串: string): number {
    let 累计: number = 0;
    字符串 = 字符串.toLowerCase();
    for (let 索引 = 0; 索引 < 字符串.length; 索引++) {
        if (字符串.charAt(索引) === 'a' || 字符串.charAt(索引) === 'e' || 字符串.charAt(索引) === 'i' || 字符串.charAt(索引) === 'o' || 字符串.charAt(索引) === 'u' || 字符串.charAt(索引) === 'á' || 字符串.charAt(索引) === 'é' || 字符串.charAt(索引) === 'í' || 字符串.charAt(索引) === 'ó' || 字符串.charAt(索引) === 'ú' || 字符串.charAt(索引) === 'ü' || 字符串.charAt(索引) === 'ä' || 字符串.charAt(索引) === 'ï' || 字符串.charAt(索引) === 'ö' || 字符串.charAt(索引) === 'ë') {
            累计++;          
        } 
    }
    return 累计;
}
