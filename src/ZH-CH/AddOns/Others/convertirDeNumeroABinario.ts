export function 转换为二进制(文本: string): string {
    return 文本
        .split('') 
        .map((字符) => {
            const 二进制 = 字符.charCodeAt(0).toString(2); 
            return 二进制.padStart(8, '0'); 
        })
        .join(' '); 
}
