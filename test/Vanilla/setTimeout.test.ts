import { describe, it, expect, vi } from "vitest";
import { definirTimeout } from "../../src/Vanilla/setTimeout"; // ajusta la ruta

describe("definirTimeout", () => {
  it("debe ejecutar el bloque después del tiempo especificado", () => {
    vi.useFakeTimers();

    const bloque = vi.fn();

    definirTimeout(1000, bloque);

    // Al inicio, no se debe haber ejecutado
    expect(bloque).not.toHaveBeenCalled();

    // Avanzamos el tiempo 999ms, sigue sin ejecutarse
    vi.advanceTimersByTime(999);
    expect(bloque).not.toHaveBeenCalled();

    // Avanzamos 1ms más, ahora debe ejecutarse
    vi.advanceTimersByTime(1);
    expect(bloque).toHaveBeenCalled();

    vi.useRealTimers();
  });
});
