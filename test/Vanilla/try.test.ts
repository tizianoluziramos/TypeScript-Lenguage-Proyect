import { describe, it, expect, vi } from "vitest";
import { intentarCapturar } from "../../src/Vanilla/try"; // ajustá la ruta

describe("intentarCapturar", () => {
  it("debe ejecutar el bloque sin error y no llamar a capturar", () => {
    const bloque = vi.fn();
    const capturar = vi.fn();

    intentarCapturar(bloque, capturar);

    expect(bloque).toHaveBeenCalled();
    expect(capturar).not.toHaveBeenCalled();
  });

  it("debe llamar a capturar si el bloque lanza un error", () => {
    const error = new Error("Error de prueba");
    const bloque = vi.fn(() => {
      throw error;
    });
    const capturar = vi.fn();

    intentarCapturar(bloque, capturar);

    expect(bloque).toHaveBeenCalled();
    expect(capturar).toHaveBeenCalledWith(error);
  });
});
