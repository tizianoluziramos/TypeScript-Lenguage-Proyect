import { describe, it, expect } from "vitest";
import { esTipoDe } from "../../src/Vanilla/typeof"; // ajustá la ruta

describe("esTipoDe", () => {
  it("debe retornar 'string' para valores string", () => {
    expect(esTipoDe("hola")).toBe("string");
  });

  it("debe retornar 'number' para valores numéricos", () => {
    expect(esTipoDe(123)).toBe("number");
    expect(esTipoDe(NaN)).toBe("number");
  });

  it("debe retornar 'boolean' para valores booleanos", () => {
    expect(esTipoDe(true)).toBe("boolean");
    expect(esTipoDe(false)).toBe("boolean");
  });

  it("debe retornar 'undefined' para valores undefined", () => {
    expect(esTipoDe(undefined)).toBe("undefined");
  });

  it("debe retornar 'object' para objetos y null", () => {
    expect(esTipoDe({})).toBe("object");
    expect(esTipoDe(null)).toBe("object"); // typeof null es 'object'
    expect(esTipoDe([])).toBe("object"); // array es objeto
  });

  it("debe retornar 'function' para funciones", () => {
    expect(esTipoDe(() => {})).toBe("function");
    expect(esTipoDe(function () {})).toBe("function");
  });

  it("debe retornar 'symbol' para símbolos", () => {
    expect(esTipoDe(Symbol("x"))).toBe("symbol");
  });

  it("debe retornar 'bigint' para BigInt", () => {
    expect(esTipoDe(10n)).toBe("bigint");
  });
});
