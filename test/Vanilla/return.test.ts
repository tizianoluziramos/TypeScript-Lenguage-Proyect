import { describe, it, expect } from "vitest";
import { retornar } from "../../src/Vanilla/return"; // Ajusta la ruta al archivo donde está la función

describe("función retornar", () => {
  it("debe retornar el mismo número que recibe", () => {
    const valor = 42;
    expect(retornar(valor)).toBe(valor);
  });

  it("debe retornar la misma cadena que recibe", () => {
    const valor = "hola mundo";
    expect(retornar(valor)).toBe(valor);
  });

  it("debe retornar el mismo objeto que recibe", () => {
    const valor = { nombre: "Tiziano", edad: 25 };
    expect(retornar(valor)).toEqual(valor);
  });

  it("debe retornar la misma instancia de un array", () => {
    const valor = [1, 2, 3];
    expect(retornar(valor)).toEqual(valor);
  });

  it("debe mantener el tipo genérico correctamente", () => {
    const valor = true;
    const resultado: boolean = retornar(valor);
    expect(resultado).toBe(true);
  });
});
