import { describe, it, expect, beforeEach, vi } from "vitest";
import { definirVariable, variables } from "../../src/Vanilla/const";

describe("definirVariable", () => {
  // Limpiar variables antes de cada test
  beforeEach(() => {
    for (const key in variables) {
      delete variables[key];
    }
  });

  it("define variables de tipo number correctamente", () => {
    definirVariable("edad: number = 25");
    expect(variables.edad).toBe(25);
    expect(typeof variables.edad).toBe("number");
  });

  it("define variables de tipo string correctamente", () => {
    definirVariable("nombre: string = Juan");
    expect(variables.nombre).toBe("Juan");
    expect(typeof variables.nombre).toBe("string");
  });

  it("define variables de tipo boolean correctamente (true)", () => {
    definirVariable("esActivo: boolean = true");
    expect(variables.esActivo).toBe(true);
    expect(typeof variables.esActivo).toBe("boolean");
  });

  it("define variables de tipo boolean correctamente (false)", () => {
    definirVariable("esActivo: boolean = false");
    expect(variables.esActivo).toBe(false);
  });

  it("trata tipos no reconocidos con un console.log de error", () => {
    const consoleSpy = vi.spyOn(console, "log");
    definirVariable("dato: fecha = 2023-01-01");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Error: Tipo 'fecha' no reconocido."
    );
    expect(variables.dato).toBeUndefined();
    consoleSpy.mockRestore();
  });

  it("muestra error si el formato es inválido", () => {
    const consoleSpy = vi.spyOn(console, "log");
    definirVariable("malFormato sin igual");
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error: Formato de asignación no válido. Usa "nombre: tipo = valor".'
    );
    consoleSpy.mockRestore();
  });

  it("convierte valores numéricos no válidos a NaN", () => {
    definirVariable("numero: number = abc");
    expect(variables.numero).toBeNaN();
  });

  it("convierte valores booleanos no 'true' a false", () => {
    definirVariable("bandera: boolean = algo");
    expect(variables.bandera).toBe(false);
  });

  it("convierte valor string sin comillas a string tal cual", () => {
    definirVariable("palabra: string = hola");
    expect(variables.palabra).toBe("hola");
  });
});
