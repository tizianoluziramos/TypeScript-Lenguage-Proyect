"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// moment-es.ts
const moment_1 = __importDefault(require("moment"));
const momentEs = {
    // Obtener la fecha y hora actuales
    ahora: () => (0, moment_1.default)(),
    // Formatear fecha
    formatear: (fecha, formato) => fecha.format(formato),
    // Sumar tiempo
    sumar: (fecha, cantidad, unidad) => fecha.add(cantidad, unidad),
    // Restar tiempo
    restar: (fecha, cantidad, unidad) => fecha.subtract(cantidad, unidad),
    // Obtener el inicio del día
    inicioDelDia: (fecha) => fecha.startOf('day'),
    // Obtener el final del día
    finDelDia: (fecha) => fecha.endOf('day'),
    // Comparar fechas
    esAntes: (fecha1, fecha2) => fecha1.isBefore(fecha2),
    esDespues: (fecha1, fecha2) => fecha1.isAfter(fecha2),
    esIgual: (fecha1, fecha2) => fecha1.isSame(fecha2),
    // Obtener diferencia
    diferencia: (fecha1, fecha2, unidad) => fecha1.diff(fecha2, unidad),
    // Obtener el día de la semana
    diaDeLaSemana: (fecha) => fecha.day(),
    // Obtener el mes
    mes: (fecha) => fecha.month(),
    // Obtener el año
    año: (fecha) => fecha.year(),
    // Funciones de manipulación de fecha
    siguienteMes: (fecha) => fecha.add(1, 'months'),
    mesAnterior: (fecha) => fecha.subtract(1, 'months'),
    // Obtener la duración
    duracion: (duracion, unidad) => moment_1.default.duration(duracion, unidad),
    // Métodos de formateo de duración
    duracionFormateada: (duracion, formato) => duracion.humanize(),
};
exports.default = momentEs;
