export function fechaEHora(pais: string = "Estados Unidos"): string {
    // Mapeamento de países para fusos horários
    const fusosHorarios: Record<string, string> = {
        "Argentina": "America/Argentina/Buenos_Aires",
        "México": "America/Mexico_City",
        "Espanha": "Europe/Madrid",
        "Estados Unidos": "America/New_York", // Hora do Leste
        "Índia": "Asia/Kolkata",
        "Japão": "Asia/Tokyo",
        "Reino Unido": "Europe/London",
        // Adicione mais países e fusos horários conforme necessário
    };

    const fusoHorario = fusosHorarios[pais];

    if (!fusoHorario) {
        throw new Error(`Fuso horário não encontrado para o país: ${pais}`);
    }

    const agora = new Date();
    const opcoes: Intl.DateTimeFormatOptions = {
        timeZone: fusoHorario,
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    return new Intl.DateTimeFormat("pt-PT", opcoes).format(agora);
}
