"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerInformacionSistema = obtenerInformacionSistema;
// os-es.ts
const os_1 = require("os");
// Exportar constantes y funciones
const sistemaOperativo = {
    EOL: os_1.EOL, // Línea de finalización
    arquitectura: // Línea de finalización
    os_1.arch, // Retorna la arquitectura del procesador
    procesadores: // Retorna la arquitectura del procesador
    os_1.cpus, // Información sobre los CPUs
    ordenDeBytes: // Información sobre los CPUs
    os_1.endianness, // Retorna el orden de bytes
    memoriaLibre: // Retorna el orden de bytes
    os_1.freemem, // Retorna la memoria libre en bytes
    directorioInicio: // Retorna la memoria libre en bytes
    os_1.homedir, // Retorna el directorio de inicio del usuario actual
    nombreDelHost: // Retorna el directorio de inicio del usuario actual
    os_1.hostname, // Retorna el nombre del host
    cargaPromedio: // Retorna el nombre del host
    os_1.loadavg, // Retorna la carga promedio del sistema
    interfacesDeRed: // Retorna la carga promedio del sistema
    os_1.networkInterfaces, // Información de las interfaces de red
    plataforma: // Información de las interfaces de red
    os_1.platform, // Retorna la plataforma del sistema operativo
    versionDelSO: // Retorna la plataforma del sistema operativo
    os_1.release, // Retorna la versión del sistema operativo
    directorioTemporal: // Retorna la versión del sistema operativo
    os_1.tmpdir, // Retorna el directorio temporal
    memoriaTotal: // Retorna el directorio temporal
    os_1.totalmem, // Retorna la memoria total en bytes
    tiempoActivo: // Retorna la memoria total en bytes
    os_1.uptime, // Retorna el tiempo de actividad del sistema
    infoUsuario: // Retorna el tiempo de actividad del sistema
    os_1.userInfo, // Información del usuario actual
};
// Exportar el módulo en español
exports.default = sistemaOperativo;
// Funciones auxiliares con nombres traducidos
function obtenerInformacionSistema() {
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
