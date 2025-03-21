// os-es.ts
import {
    EOL,
    arch as arquitectura,
    cpus as procesadores,
    endianness as ordenDeBytes,
    freemem as memoriaLibre,
    homedir as directorioInicio,
    hostname as nombreDelHost,
    loadavg as cargaPromedio,
    networkInterfaces as interfacesDeRed,
    platform as plataforma,
    release as versionDelSO,
    tmpdir as directorioTemporal,
    totalmem as memoriaTotal,
    uptime as tiempoActivo,
    userInfo as infoUsuario,
} from 'os';

// Exportar constantes y funciones
const sistemaOperativo = {
    EOL, // Línea de finalización
    arquitectura, // Retorna la arquitectura del procesador
    procesadores, // Información sobre los CPUs
    ordenDeBytes, // Retorna el orden de bytes
    memoriaLibre, // Retorna la memoria libre en bytes
    directorioInicio, // Retorna el directorio de inicio del usuario actual
    nombreDelHost, // Retorna el nombre del host
    cargaPromedio, // Retorna la carga promedio del sistema
    interfacesDeRed, // Información de las interfaces de red
    plataforma, // Retorna la plataforma del sistema operativo
    versionDelSO, // Retorna la versión del sistema operativo
    directorioTemporal, // Retorna el directorio temporal
    memoriaTotal, // Retorna la memoria total en bytes
    tiempoActivo, // Retorna el tiempo de actividad del sistema
    infoUsuario, // Información del usuario actual
};

// Exportar el módulo en español
export default sistemaOperativo;

// Funciones auxiliares con nombres traducidos
export function obtenerInformacionSistema() {
    return {
        arquitectura: sistemaOperativo.arquitectura(),
        nombreDelHost: sistemaOperativo.nombreDelHost(),
        directorioInicio: sistemaOperativo.directorioInicio(),
        memoriaLibre: sistemaOperativo.memoriaLibre(),
        memoriaTotal: sistemaOperativo.memoriaTotal(),
        tiempoActivo: sistemaOperativo.tiempoActivo(),
        cargaPromedio: sistemaOperativo.cargaPromedio(),
        interfacesDeRed: sistemaOperativo.interfacesDeRed(),
        versionDelSO: sistemaOperativo.versionDelSO(),
    };
}

