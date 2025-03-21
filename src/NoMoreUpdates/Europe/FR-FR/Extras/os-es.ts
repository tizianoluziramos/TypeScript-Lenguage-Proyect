// os-fr.ts
import {
    EOL,
    arch as architecture,
    cpus as processors,
    endianness as byteOrder,
    freemem as freeMemory,
    homedir as homeDirectory,
    hostname as hostName,
    loadavg as loadAverage,
    networkInterfaces as networkInterfaces,
    platform as platform,
    release as osVersion,
    tmpdir as tempDirectory,
    totalmem as totalMemory,
    uptime as uptime,
    userInfo as userInfo,
} from 'os';

// Exporter les constantes et les fonctions
const systèmeExploitation = {
    EOL, // Fin de ligne
    architecture, // Retourne l'architecture du processeur
    processors, // Informations sur les processeurs (CPUs)
    byteOrder, // Retourne l'ordre des octets
    freeMemory, // Retourne la mémoire libre en octets
    homeDirectory, // Retourne le répertoire de départ de l'utilisateur actuel
    hostName, // Retourne le nom de l'hôte
    loadAverage, // Retourne la charge moyenne du système
    networkInterfaces, // Informations sur les interfaces réseau
    platform, // Retourne la plateforme du système d'exploitation
    osVersion, // Retourne la version du système d'exploitation
    tempDirectory, // Retourne le répertoire temporaire
    totalMemory, // Retourne la mémoire totale en octets
    uptime, // Retourne le temps d'activité du système
    userInfo, // Informations sur l'utilisateur actuel
};

// Exporter le module en français
export default systèmeExploitation;

// Fonctions auxiliaires avec des noms traduits
export function obtenirInformationsSystème() {
    return {
        architecture: systèmeExploitation.architecture(),
        hostName: systèmeExploitation.hostName(),
        homeDirectory: systèmeExploitation.homeDirectory(),
        freeMemory: systèmeExploitation.freeMemory(),
        totalMemory: systèmeExploitation.totalMemory(),
        uptime: systèmeExploitation.uptime(),
        loadAverage: systèmeExploitation.loadAverage(),
        networkInterfaces: systèmeExploitation.networkInterfaces(),
        osVersion: systèmeExploitation.osVersion(),
    };
}
