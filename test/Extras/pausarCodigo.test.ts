import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { pausarCodigo } from "../../src/Extras/pausarCodigo";

describe("pausarCodigo", () => {
  // Extender timeout de Vitest para tests que bloquean un tiempo
  beforeAll(() => {
    // Esto extiende el timeout para todos los tests en este describe
    // Vitest usa test.timeout para cada test, así que lo configuramos abajo
  });

  test("no lanza error con tiempo numérico válido", () => {
    expect(() => pausarCodigo(500)).not.toThrow();
  }, 6000); // timeout individual para este test: 6 segundos

  test("no lanza error con clave de tiempo válida", () => {
    expect(() => pausarCodigo("corto")).not.toThrow();
  }, 6000);

  test("lanza error con clave de tiempo inválida", () => {
    expect(() => pausarCodigo("invalido" as any)).toThrow("Tiempo no válido");
  });

  test("lanza error con tiempo numérico negativo", () => {
    expect(() => pausarCodigo(-100)).toThrow("Tiempo no válido");
  });

  test("lanza error con tipo incorrecto", () => {
    expect(() => pausarCodigo(null as any)).toThrow("Tiempo no válido");
  });
});
