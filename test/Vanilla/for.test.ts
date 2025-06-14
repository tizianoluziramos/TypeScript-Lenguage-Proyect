import { describe, it, expect } from "vitest";
import { bucles } from "../../src/Vanilla/for"; // ajusta la ruta según corresponda

describe("bucles", () => {
  it("debe ejecutar el bloque con valores correctos usando incremento +1", () => {
    const valores: number[] = [];
    bucles(
      0,
      (i) => i < 5,
      (i) => i + 1,
      (i) => valores.push(i)
    );
    expect(valores).toEqual([0, 1, 2, 3, 4]);
  });

  it("debe ejecutar el bloque con decremento -1", () => {
    const valores: number[] = [];
    bucles(
      5,
      (i) => i > 0,
      (i) => i - 1,
      (i) => valores.push(i)
    );
    expect(valores).toEqual([5, 4, 3, 2, 1]);
  });

  it("debe poder usar incrementos personalizados", () => {
    const valores: number[] = [];
    bucles(
      2,
      (i) => i <= 10,
      (i) => i * 2,
      (i) => valores.push(i)
    );
    expect(valores).toEqual([2, 4, 8]);
  });

  it("no debe ejecutar el bloque si la condicion inicial es falsa", () => {
    const valores: number[] = [];
    bucles(
      10,
      (i) => i < 5,
      (i) => i + 1,
      (i) => valores.push(i)
    );
    expect(valores).toEqual([]);
  });

  it("puede ejecutar un bloque vacío sin errores", () => {
    // Simplemente correr la función con un bloque vacío para verificar que no falle
    expect(() => {
      bucles(
        0,
        (i) => i < 3,
        (i) => i + 1,
        () => {}
      );
    }).not.toThrow();
  });
});
