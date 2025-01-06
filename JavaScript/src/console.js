"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consola = void 0;
// consola.ts
exports.consola = {
    mensaje: (...args) => console.log(...args),
    error: (...args) => console.error(...args),
    advertencia: (...args) => console.warn(...args),
    info: (...args) => console.info(...args),
    depuracion: (...args) => console.debug(...args),
    traza: (...args) => console.trace(...args),
    tiempo: (nombre) => console.time(nombre),
    tiempoFin: (nombre) => console.timeEnd(nombre),
    grupo: (...args) => console.group(...args),
    grupoFin: () => console.groupEnd(),
    tabla: (data) => console.table(data),
    limpiar: () => console.clear(),
    afirmar: (condition, ...args) => console.assert(condition, ...args),
    mostrar: (obj) => console.dir(obj),
    mostrarXML: (obj) => console.dirxml(obj),
    groupCollapsed: (...args) => console.groupCollapsed(...args),
    perfil: (label) => console.profile(label),
    terminarPerfil: () => console.profileEnd(),
    timeStamp: (label) => console.timeStamp(label),
    countador: (label) => console.count(label),
    reinciarContador: (label) => console.countReset(label),
};
