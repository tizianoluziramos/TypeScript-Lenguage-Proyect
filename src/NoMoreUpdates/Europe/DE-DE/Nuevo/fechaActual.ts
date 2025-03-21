export function datumUndUhrzeit(land: string = "Vereinigte Staaten"): string {
    // Zuordnung von Ländern zu Zeitzonen
    const zeitzonen: Record<string, string> = {
        "Argentinien": "America/Argentina/Buenos_Aires",
        "Mexiko": "America/Mexico_City",
        "Spanien": "Europe/Madrid",
        "Vereinigte Staaten": "America/New_York", // Eastern Time
        "Indien": "Asia/Kolkata",
        "Japan": "Asia/Tokyo",
        "Vereinigtes Königreich": "Europe/London",
        // Füge weitere Länder und Zeitzonen nach Bedarf hinzu
    };

    const zeitzone = zeitzonen[land];

    if (!zeitzone) {
        throw new Error(`Zeitzone nicht gefunden für das Land: ${land}`);
    }

    const jetzt = new Date();
    const optionen: Intl.DateTimeFormatOptions = {
        timeZone: zeitzone,
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    return new Intl.DateTimeFormat("de-DE", optionen).format(jetzt);
}
