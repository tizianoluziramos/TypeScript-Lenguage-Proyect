import { describe, test, expect } from "vitest";
import { invertirCadena } from "../../../src/tools/converters/InvertirCadena"; // ajustá la ruta

describe("invertirCadena", () => {
  test("debería invertir correctamente una cadena simple", () => {
    expect(invertirCadena("hola")).toBe("aloh");
  });

  test("debería invertir una cadena con espacios", () => {
    expect(invertirCadena("hola mundo")).toBe("odnum aloh");
  });

  test("debería retornar cadena vacía si se le pasa cadena vacía", () => {
    expect(invertirCadena("")).toBe("");
  });

  test("debería invertir correctamente con caracteres especiales", () => {
    expect(invertirCadena("¡hola!")).toBe("!aloh¡");
  });
});
