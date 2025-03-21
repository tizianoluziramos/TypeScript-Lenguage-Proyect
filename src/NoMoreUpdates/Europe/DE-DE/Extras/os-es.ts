// os-de.ts
import {
    EOL,
    arch as architektur,
    cpus as prozessoren,
    endianness as byteReihenfolge,
    freemem as freieSpeicher,
    homedir as homeVerzeichnis,
    hostname as hostName,
    loadavg as durchschnittsLast,
    networkInterfaces as netzwerkSchnittstellen,
    platform as plattform,
    release as versionDesBetriebssystems,
    tmpdir as temporaeresVerzeichnis,
    totalmem as gesamtSpeicher,
    uptime as betriebsZeit,
    userInfo as benutzerInfo,
} from 'os';

// Exportiere Konstanten und Funktionen
const betriebssystem = {
    EOL, // End-of-Line-Zeichen
    architektur, // Gibt die Prozessorarchitektur zurück
    prozessoren, // Informationen zu den CPUs
    byteReihenfolge, // Gibt die Byte-Reihenfolge zurück
    freieSpeicher, // Gibt den freien Speicher in Bytes zurück
    homeVerzeichnis, // Gibt das Home-Verzeichnis des aktuellen Benutzers zurück
    hostName, // Gibt den Hostnamen zurück
    durchschnittsLast, // Gibt die durchschnittliche Systemlast zurück
    netzwerkSchnittstellen, // Informationen zu den Netzwerkschnittstellen
    plattform, // Gibt die Plattform des Betriebssystems zurück
    versionDesBetriebssystems, // Gibt die Version des Betriebssystems zurück
    temporaeresVerzeichnis, // Gibt das temporäre Verzeichnis zurück
    gesamtSpeicher, // Gibt den gesamten Speicher in Bytes zurück
    betriebsZeit, // Gibt die Betriebszeit des Systems zurück
    benutzerInfo, // Informationen über den aktuellen Benutzer
};

// Exportiere das Modul auf Deutsch
export default betriebssystem;

// Hilfsfunktionen mit übersetzten Namen
export function systemInfoAbrufen() {
    return {
        architektur: betriebssystem.architektur(),
        hostName: betriebssystem.hostName(),
        homeVerzeichnis: betriebssystem.homeVerzeichnis(),
        freieSpeicher: betriebssystem.freieSpeicher(),
        gesamtSpeicher: betriebssystem.gesamtSpeicher(),
        betriebsZeit: betriebssystem.betriebsZeit(),
        durchschnittsLast: betriebssystem.durchschnittsLast(),
        netzwerkSchnittstellen: betriebssystem.netzwerkSchnittstellen(),
        versionDesBetriebssystems: betriebssystem.versionDesBetriebssystems(),
    };
}
