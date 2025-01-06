// moment-es.ts
import moment from 'moment';

const momentEs = {
    // Obtener la fecha y hora actuales
    ahora: () => moment(),

    // Formatear fecha
    formatear: (fecha: moment.Moment, formato: string) => fecha.format(formato),

    // Sumar tiempo
    sumar: (fecha: moment.Moment, cantidad: number, unidad: moment.unitOfTime.DurationConstructor) => 
        fecha.add(cantidad, unidad),

    // Restar tiempo
    restar: (fecha: moment.Moment, cantidad: number, unidad: moment.unitOfTime.DurationConstructor) => 
        fecha.subtract(cantidad, unidad),

    // Obtener el inicio del día
    inicioDelDia: (fecha: moment.Moment) => fecha.startOf('day'),

    // Obtener el final del día
    finDelDia: (fecha: moment.Moment) => fecha.endOf('day'),

    // Comparar fechas
    esAntes: (fecha1: moment.Moment, fecha2: moment.Moment) => fecha1.isBefore(fecha2),
    esDespues: (fecha1: moment.Moment, fecha2: moment.Moment) => fecha1.isAfter(fecha2),
    esIgual: (fecha1: moment.Moment, fecha2: moment.Moment) => fecha1.isSame(fecha2),

    // Obtener diferencia
    diferencia: (fecha1: moment.Moment, fecha2: moment.Moment, unidad: moment.unitOfTime.Diff) => 
        fecha1.diff(fecha2, unidad),

    // Obtener el día de la semana
    diaDeLaSemana: (fecha: moment.Moment) => fecha.day(),

    // Obtener el mes
    mes: (fecha: moment.Moment) => fecha.month(),

    // Obtener el año
    año: (fecha: moment.Moment) => fecha.year(),

    // Funciones de manipulación de fecha
    siguienteMes: (fecha: moment.Moment) => fecha.add(1, 'months'),
    mesAnterior: (fecha: moment.Moment) => fecha.subtract(1, 'months'),

    // Obtener la duración
    duracion: (duracion: number, unidad: moment.unitOfTime.DurationConstructor) => 
        moment.duration(duracion, unidad),

    // Métodos de formateo de duración
    duracionFormateada: (duracion: moment.Duration, formato: string) => 
        duracion.humanize(),
};

export default momentEs;
