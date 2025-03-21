export function fechaYHora(country: string = "Estados Unidos"): string {
    // Mapeo de países a zonas horarias
    const timeZones: Record<string, string> = {
        "Argentina": "America/Argentina/Buenos_Aires",
        "México": "America/Mexico_City",
        "España": "Europe/Madrid",
        "Estados Unidos": "America/New_York", // Hora del Este
        "India": "Asia/Kolkata",
        "Japón": "Asia/Tokyo",
        "Reino Unido": "Europe/London",
        // Agrega más países y zonas horarias según sea necesario
    };

    const timeZone = timeZones[country];

    if (!timeZone) {
        throw new Error(`Zona horaria no encontrada para el país: ${country}`);
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

    return new Intl.DateTimeFormat("es-ES", options).format(now);
}