export function датаИВремя(страна: string = "США"): string {
    // Сопоставление стран с часовыми поясами
    const часовыеПояса: Record<string, string> = {
        "Аргентина": "America/Argentina/Buenos_Aires",
        "Мексика": "America/Mexico_City",
        "Испания": "Europe/Madrid",
        "США": "America/New_York", // Восточное время
        "Индия": "Asia/Kolkata",
        "Япония": "Asia/Tokyo",
        "Великобритания": "Europe/London",
        // Добавьте другие страны и часовые пояса по мере необходимости
    };

    const часовойПояс = часовыеПояса[страна];

    if (!часовойПояс) {
        throw new Error(`Часовой пояс не найден для страны: ${страна}`);
    }

    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
        timeZone: часовойПояс,
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    return new Intl.DateTimeFormat("ru-RU", options).format(now);
}
