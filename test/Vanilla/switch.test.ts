import { describe, it, expect, vi } from "vitest";
import { caso } from "../../src/Vanilla/switch"; // ajustá la ruta

describe("caso", () => {
  it("debe ejecutar el bloque correspondiente al valor coincidente", () => {
    const bloque1 = vi.fn();
    const bloque2 = vi.fn();
    const bloque3 = vi.fn();

    caso(
      2,
      { condicion: 1, bloque: bloque1 },
      { condicion: 2, bloque: bloque2 },
      { condicion: 3, bloque: bloque3 }
    );

    expect(bloque1).not.toHaveBeenCalled();
    expect(bloque2).toHaveBeenCalled();
    expect(bloque3).not.toHaveBeenCalled();
  });

  it("no debe ejecutar ningún bloque si no hay coincidencia", () => {
    const bloque1 = vi.fn();
    const bloque2 = vi.fn();

    caso(
      5,
      { condicion: 1, bloque: bloque1 },
      { condicion: 2, bloque: bloque2 }
    );

    expect(bloque1).not.toHaveBeenCalled();
    expect(bloque2).not.toHaveBeenCalled();
  });
});
