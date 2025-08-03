// moment-es.test.ts
import { describe, it, expect } from "vitest";
import moment from "moment";
import momentEs from "../../src/modules/moment-es";

describe("momentEs", () => {
  it("ahora debe retornar un objeto moment válido", () => {
    const ahora = momentEs.ahora();
    expect(moment.isMoment(ahora)).toBe(true);
  });

  it("formatear debe devolver la fecha en el formato indicado", () => {
    const fecha = moment("2023-06-14T12:00:00");
    const formato = "YYYY-MM-DD";
    expect(momentEs.formatear(fecha, formato)).toBe("2023-06-14");
  });

  it("sumar debe agregar tiempo correctamente", () => {
    const fecha = moment("2023-06-14");
    const nuevaFecha = momentEs.sumar(fecha.clone(), 5, "days");
    expect(nuevaFecha.date()).toBe(19);
  });

  it("restar debe disminuir tiempo correctamente", () => {
    const fecha = moment("2023-06-14");
    const nuevaFecha = momentEs.restar(fecha.clone(), 3, "days");
    expect(nuevaFecha.date()).toBe(11);
  });

  it("inicioDelDia debe retornar la fecha al inicio del día", () => {
    const fecha = moment("2023-06-14T15:30:00");
    const inicio = momentEs.inicioDelDia(fecha);
    expect(inicio.hour()).toBe(0);
    expect(inicio.minute()).toBe(0);
    expect(inicio.second()).toBe(0);
  });

  it("finDelDia debe retornar la fecha al final del día", () => {
    const fecha = moment("2023-06-14T10:00:00");
    const fin = momentEs.finDelDia(fecha);
    expect(fin.hour()).toBe(23);
    expect(fin.minute()).toBe(59);
    expect(fin.second()).toBe(59);
  });

  it("esAntes debe determinar si una fecha es antes que otra", () => {
    const f1 = moment("2023-06-10");
    const f2 = moment("2023-06-15");
    expect(momentEs.esAntes(f1, f2)).toBe(true);
    expect(momentEs.esAntes(f2, f1)).toBe(false);
  });

  it("esDespues debe determinar si una fecha es después que otra", () => {
    const f1 = moment("2023-06-10");
    const f2 = moment("2023-06-15");
    expect(momentEs.esDespues(f2, f1)).toBe(true);
    expect(momentEs.esDespues(f1, f2)).toBe(false);
  });

  it("esIgual debe determinar si dos fechas son iguales", () => {
    const f1 = moment("2023-06-10");
    const f2 = moment("2023-06-10");
    const f3 = moment("2023-06-11");
    expect(momentEs.esIgual(f1, f2)).toBe(true);
    expect(momentEs.esIgual(f1, f3)).toBe(false);
  });

  it("diferencia debe devolver la diferencia en la unidad especificada", () => {
    const f1 = moment("2023-06-15");
    const f2 = moment("2023-06-10");
    expect(momentEs.diferencia(f1, f2, "days")).toBe(5);
  });

  it("diaDeLaSemana debe devolver el día de la semana (0 domingo)", () => {
    const fecha = moment("2023-06-14"); // Miércoles = 3
    expect(momentEs.diaDeLaSemana(fecha)).toBe(3);
  });

  it("mes debe devolver el mes (0 basado en cero)", () => {
    const fecha = moment("2023-06-14"); // Junio es 5 (0-based)
    expect(momentEs.mes(fecha)).toBe(5);
  });

  it("año debe devolver el año", () => {
    const fecha = moment("2023-06-14");
    expect(momentEs.año(fecha)).toBe(2023);
  });

  it("siguienteMes debe agregar un mes", () => {
    const fecha = moment("2023-06-14");
    const nuevo = momentEs.siguienteMes(fecha.clone());
    expect(nuevo.month()).toBe(6);
  });

  it("mesAnterior debe restar un mes", () => {
    const fecha = moment("2023-06-14");
    const nuevo = momentEs.mesAnterior(fecha.clone());
    expect(nuevo.month()).toBe(4);
  });

  it("duracion debe crear una duración válida", () => {
    const dur = momentEs.duracion(5, "minutes");
    expect(dur.asMinutes()).toBe(5);
  });

  it("duracionFormateada debe devolver cadena humanizada", () => {
    const dur = moment.duration(90, "minutes");
    const str = momentEs.duracionFormateada(dur, "");
    expect(typeof str).toBe("string");
    expect(str.length).toBeGreaterThan(0);
  });
});
