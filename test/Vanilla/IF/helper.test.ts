import { describe, it, expect, vi } from "vitest";
import { si } from "../../../src/Vanilla/IF/helper";
import { Si } from "../../../src/Vanilla/IF/if";

describe("función si", () => {
  it("debe retornar una instancia de Si con la condición dada", () => {
    const condicionTrue = si(true);
    expect(condicionTrue).toBeInstanceOf(Si);

    const condicionFalse = si(false);
    expect(condicionFalse).toBeInstanceOf(Si);
  });

  it("la instancia retornada debe mantener la condición correcta", () => {
    const mockEntonces = vi.fn();

    // Condición true: debe llamar a mockEntonces
    si(true).entonces(mockEntonces);
    expect(mockEntonces).toHaveBeenCalled();

    const mockEntonces2 = vi.fn();
    // Condición false: no debe llamar a mockEntonces2
    si(false).entonces(mockEntonces2);
    expect(mockEntonces2).not.toHaveBeenCalled();
  });
});
