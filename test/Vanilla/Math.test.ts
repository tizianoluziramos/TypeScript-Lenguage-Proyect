import { describe, it, expect } from "vitest";
import { Matematicas } from "../../src/Vanilla/Math";

describe("Matematicas namespace", () => {
  it("constantes E y PI deben ser iguales a Math.E y Math.PI", () => {
    expect(Matematicas.E).toBe(Math.E);
    expect(Matematicas.PI).toBe(Math.PI);
  });

  it("funciones trigonométricas deben coincidir con Math", () => {
    expect(Matematicas.seno(Math.PI / 2)).toBeCloseTo(Math.sin(Math.PI / 2));
    expect(Matematicas.coseno(0)).toBeCloseTo(Math.cos(0));
    expect(Matematicas.tangente(Math.PI / 4)).toBeCloseTo(
      Math.tan(Math.PI / 4)
    );
    expect(Matematicas.arcocoseno(1)).toBeCloseTo(Math.acos(1));
    expect(Matematicas.arcoseno(0)).toBeCloseTo(Math.asin(0));
    expect(Matematicas.arcotangente(1)).toBeCloseTo(Math.atan(1));
    expect(Matematicas.arcotangente2(1, 1)).toBeCloseTo(Math.atan2(1, 1));
  });

  it("funciones de redondeo deben coincidir con Math", () => {
    expect(Matematicas.redondearArriba(1.2)).toBe(Math.ceil(1.2));
    expect(Matematicas.redondearAbajo(1.8)).toBe(Math.floor(1.8));
    expect(Matematicas.redondear(1.5)).toBe(Math.round(1.5));
    expect(Matematicas.truncar(1.9)).toBe(Math.trunc(1.9));
  });

  it("otras funciones matemáticas deben coincidir con Math", () => {
    expect(Matematicas.absoluto(-5)).toBe(Math.abs(-5));
    expect(Matematicas.raizCuadrada(9)).toBe(Math.sqrt(9));
    expect(Matematicas.raizCubica(27)).toBe(Math.cbrt(27));
    expect(Matematicas.potencia(2, 3)).toBe(Math.pow(2, 3));
    expect(Matematicas.logaritmoNatural(Math.E)).toBeCloseTo(Math.log(Math.E));
    expect(Matematicas.logaritmoBase10(100)).toBeCloseTo(Math.log10(100));
    expect(Matematicas.logaritmoBase2(8)).toBeCloseTo(Math.log2(8));
    expect(Matematicas.signo(-10)).toBe(Math.sign(-10));
    expect(Matematicas.logaritmo1MasX(0)).toBeCloseTo(Math.log1p(0));
  });

  it("funciones de máximo, mínimo y aleatorio", () => {
    expect(Matematicas.maximo(1, 5, 3)).toBe(Math.max(1, 5, 3));
    expect(Matematicas.minimo(1, 5, 3)).toBe(Math.min(1, 5, 3));
    const r = Matematicas.aleatorio();
    expect(r).toBeGreaterThanOrEqual(0);
    expect(r).toBeLessThan(1);
  });
});
