export function dateEtHeure(pays: string = "États-Unis"): string {
    // Mappage des pays aux fuseaux horaires
    const fuseauxHoraires: Record<string, string> = {
        "Argentine": "America/Argentina/Buenos_Aires",
        "Mexique": "America/Mexico_City",
        "Espagne": "Europe/Madrid",
        "États-Unis": "America/New_York", // Heure de l'Est
        "Inde": "Asia/Kolkata",
        "Japon": "Asia/Tokyo",
        "Royaume-Uni": "Europe/London",
        // Ajoutez d'autres pays et fuseaux horaires selon les besoins
    };

    const fuseauHoraire = fuseauxHoraires[pays];

    if (!fuseauHoraire) {
        throw new Error(`Fuseau horaire non trouvé pour le pays : ${pays}`);
    }

    const maintenant = new Date();
    const options: Intl.DateTimeFormatOptions = {
        timeZone: fuseauHoraire,
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    return new Intl.DateTimeFormat("fr-FR", options).format(maintenant);
}
