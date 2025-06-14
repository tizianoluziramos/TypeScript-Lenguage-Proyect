import { describe, it, expect } from "vitest";
import { caracterEn } from "../../src/Vanilla/charAt";

describe("String.prototype.caracterEn", () => {
  it("devuelve el carácter correcto para índices positivos", () => {
    expect("Hola".caracterEn(0)).toBe("H");
    expect("Hola".caracterEn(1)).toBe("o");
    expect("Hola".caracterEn(3)).toBe("a");
  });

  it("devuelve el carácter correcto para índices negativos", () => {
    expect("Hola".caracterEn(-1)).toBe("a");
    expect("Hola".caracterEn(-2)).toBe("l");
    expect("Hola".caracterEn(-4)).toBe("H");
  });

  it("devuelve cadena vacía para índices fuera de rango positivos", () => {
    expect("Hola".caracterEn(4)).toBe("");
    expect("Hola".caracterEn(100)).toBe("");
  });

  it("devuelve cadena vacía para índices fuera de rango negativos", () => {
    expect("Hola".caracterEn(-5)).toBe("");
    expect("Hola".caracterEn(-100)).toBe("");
  });

  it("funciona la función exportada caracterEn con el contexto string", () => {
    const str = "Mundo";
    // usar call para pasar el contexto this explícitamente
    expect(caracterEn.call(str, 2)).toBe("n");
    expect(caracterEn.call(str, -1)).toBe("o");
    expect(caracterEn.call(str, 10)).toBe("");
  });

  it("funciona con strings vacíos", () => {
    expect("".caracterEn(0)).toBe("");
    expect("".caracterEn(-1)).toBe("");
  });
});
