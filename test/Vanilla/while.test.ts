import { describe, it, expect } from "vitest";
import { mientras } from "../../src/Vanilla/while"; // ajustá la ruta

describe("mientras", () => {
  it("debe ejecutar el bloque mientras la condición sea verdadera", () => {
    let contador = 0;
    let max = 3;

    mientras(
      () => contador < max,
      () => {
        contador++;
      }
    );

    expect(contador).toBe(max);
  });

  it("no debe ejecutar el bloque si la condición es falsa desde el inicio", () => {
    let contador = 0;

    mientras(
      () => false,
      () => {
        contador++;
      }
    );

    expect(contador).toBe(0);
  });
});
