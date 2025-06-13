export function 获取日期和时间(国家: string): string {
    // 国家与时区的映射
    const timeZones: Record<string, string> = {
        "阿根廷": "America/Argentina/Buenos_Aires",
        "墨西哥": "America/Mexico_City",
        "西班牙": "Europe/Madrid",
        "美国": "America/New_York", // 东部时间
        "印度": "Asia/Kolkata",
        "日本": "Asia/Tokyo",
        "英国": "Europe/London",
        // 根据需要添加更多国家和时区
    };

    const timeZone = timeZones[国家];

    if (!timeZone) {
        throw new Error(`未找到国家的时区: ${国家}`);
    }

    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
        timeZone,
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    return new Intl.DateTimeFormat("zh-CN", options).format(now);
}