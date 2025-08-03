import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import {
  conversiones,
  realizarConversion,
} from "../../../src/tools/converters/convertidorDeUnidades";

describe("conversiones", () => {
  test("metros a centímetros", () => {
    expect(conversiones.metrosACentimetros(2)).toBe(200);
  });

  test("centímetros a metros", () => {
    expect(conversiones.centimetrosAMetros(300)).toBe(3);
  });

  test("kilos a libras", () => {
    expect(conversiones.kilosAlibras(1)).toBeCloseTo(2.20462, 5);
  });

  test("libras a kilos", () => {
    expect(conversiones.librasAKilos(2.20462)).toBeCloseTo(1, 5);
  });

  test("celsius a fahrenheit", () => {
    expect(conversiones.celsiusAFahrenheit(0)).toBe(32);
  });

  test("fahrenheit a celsius", () => {
    expect(conversiones.fahrenheitACelsius(32)).toBe(0);
  });
});

describe("realizarConversion", () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("opción 1: metros a centímetros", () => {
    realizarConversion(1, 5);
    expect(consoleSpy).toHaveBeenCalledWith("5 metros son 500 centímetros");
  });

  test("opción 2: centímetros a metros", () => {
    realizarConversion(2, 250);
    expect(consoleSpy).toHaveBeenCalledWith("250 centímetros son 2.5 metros");
  });

  test("opción 3: kilos a libras", () => {
    realizarConversion(3, 2);
    expect(consoleSpy).toHaveBeenCalledWith("2 kilos son 4.40924 libras");
  });

  test("opción 4: libras a kilos", () => {
    realizarConversion(4, 4.40924);
    expect(consoleSpy).toHaveBeenCalledWith("4.40924 libras son 2 kilos");
  });

  test("opción 5: celsius a fahrenheit", () => {
    realizarConversion(5, 100);
    expect(consoleSpy).toHaveBeenCalledWith(
      "100 grados Celsius son 212 grados Fahrenheit"
    );
  });

  test("opción 6: fahrenheit a celsius", () => {
    realizarConversion(6, 212);
    expect(consoleSpy).toHaveBeenCalledWith(
      "212 grados Fahrenheit son 100 grados Celsius"
    );
  });

  test("opción no válida", () => {
    realizarConversion(99, 123);
    expect(consoleSpy).toHaveBeenCalledWith("Opción no válida");
  });
});
