import { describe, it, expect } from "vitest";
import { esInstanciaDe } from "../../src/Vanilla/instanceof"; // Ajusta la ruta

class A {}
class B extends A {}
class C {}

describe("esInstanciaDe", () => {
  it("retorna true si el objeto es instancia directa de la clase", () => {
    const a = new A();
    expect(esInstanciaDe(a, A)).toBe(true);
  });

  it("retorna true si el objeto es instancia de una subclase", () => {
    const b = new B();
    expect(esInstanciaDe(b, A)).toBe(true);
    expect(esInstanciaDe(b, B)).toBe(true);
  });

  it("retorna false si el objeto no es instancia de la clase", () => {
    const c = new C();
    expect(esInstanciaDe(c, A)).toBe(false);
    expect(esInstanciaDe(c, B)).toBe(false);
  });

  it("retorna false si el objeto no es un objeto (null, undefined, primitivos)", () => {
    expect(esInstanciaDe(null, A)).toBe(false);
    expect(esInstanciaDe(undefined, A)).toBe(false);
    expect(esInstanciaDe(42, A)).toBe(false);
    expect(esInstanciaDe("hola", A)).toBe(false);
  });
});
