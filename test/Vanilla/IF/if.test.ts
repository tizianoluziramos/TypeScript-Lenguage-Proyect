import { describe, it, expect, vi } from "vitest";
import { Si } from "../../../src/Vanilla/IF/if"; // ajusta la ruta según corresponda

describe("Si", () => {
  it('ejecuta la acción "entonces" si la condición es true', () => {
    const accion = vi.fn();
    new Si(true).entonces(accion);
    expect(accion).toHaveBeenCalledTimes(1);
  });

  it('no ejecuta la acción "entonces" si la condición es false', () => {
    const accion = vi.fn();
    new Si(false).entonces(accion);
    expect(accion).not.toHaveBeenCalled();
  });

  it('ejecuta la acción "sino" si la condición es false', () => {
    const accionEntonces = vi.fn();
    const accionSino = vi.fn();

    new Si(false).sino(accionSino).entonces(accionEntonces);

    expect(accionEntonces).not.toHaveBeenCalled();
    expect(accionSino).toHaveBeenCalledTimes(1);
  });

  it('no ejecuta la acción "sino" si la condición es true', () => {
    const accionEntonces = vi.fn();
    const accionSino = vi.fn();

    new Si(true).sino(accionSino).entonces(accionEntonces);

    expect(accionEntonces).toHaveBeenCalledTimes(1);
    expect(accionSino).not.toHaveBeenCalled();
  });

  it("permite encadenar múltiples llamadas", () => {
    const accionEntonces = vi.fn();
    const accionSino = vi.fn();

    const instancia = new Si(true);
    const retorno = instancia.sino(accionSino).entonces(accionEntonces);

    expect(retorno).toBe(instancia);
    expect(accionEntonces).toHaveBeenCalled();
    expect(accionSino).not.toHaveBeenCalled();
  });

  it('no falla si no se define acción "sino" y condición es false', () => {
    const accionEntonces = vi.fn();

    expect(() => {
      new Si(false).entonces(accionEntonces);
    }).not.toThrow();

    expect(accionEntonces).not.toHaveBeenCalled();
  });
});
