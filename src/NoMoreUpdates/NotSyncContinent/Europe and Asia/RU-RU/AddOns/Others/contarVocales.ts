export function подсчитатьГласные(строка: string): number {
    let аккумулятор: number = 0;
    строка = строка.toLowerCase();
    for (let индекс = 0; индекс < строка.length; индекс++) {
        if (
            строка.charAt(индекс) === 'a' || строка.charAt(индекс) === 'e' || строка.charAt(индекс) === 'i' || 
            строка.charAt(индекс) === 'o' || строка.charAt(индекс) === 'u' || строка.charAt(индекс) === 'á' || 
            строка.charAt(индекс) === 'é' || строка.charAt(индекс) === 'í' || строка.charAt(индекс) === 'ó' || 
            строка.charAt(индекс) === 'ú' || строка.charAt(индекс) === 'ü' || строка.charAt(индекс) === 'ä' || 
            строка.charAt(индекс) === 'ï' || строка.charAt(индекс) === 'ö' || строка.charAt(индекс) === 'ë'
        ) {
            аккумулятор++;          
        } 
    }
    return аккумулятор;
}
