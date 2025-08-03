import { describe, test, expect } from "vitest";
import { convertirABinario } from "../../../src/tools/converters/convertirDeNumeroABinario"; // Cambiá la ruta si es distinta

describe("convertirABinario", () => {
  test("convierte una letra en binario", () => {
    expect(convertirABinario("A")).toBe("01000001");
  });

  test("convierte una palabra en binario", () => {
    expect(convertirABinario("Hola")).toBe(
      "01001000 01101111 01101100 01100001"
    );
  });

  test("convierte números a binario", () => {
    expect(convertirABinario("123")).toBe("00110001 00110010 00110011");
  });

  test("convierte símbolos especiales a binario", () => {
    expect(convertirABinario("!@#")).toBe("00100001 01000000 00100011");
  });

  test("convierte texto vacío", () => {
    expect(convertirABinario("")).toBe("");
  });
});
