import { describe, test, expect } from "vitest";
import { invertirArray } from "../../../src/tools/converters/invertirarray"; // ajusta la ruta

describe("invertirArray", () => {
  test("debería invertir cada string dentro del array", () => {
    const entrada = ["hola", "mundo", "123"];
    const esperado = ["aloh", "odnum", "321"];
    expect(invertirArray(entrada)).toEqual(esperado);
  });

  test("debería retornar un array vacío si la entrada es un array vacío", () => {
    expect(invertirArray([])).toEqual([]);
  });

  test("debería manejar strings vacíos dentro del array", () => {
    const entrada = ["abc", "", "def"];
    const esperado = ["cba", "", "fed"];
    expect(invertirArray(entrada)).toEqual(esperado);
  });

  test("debería manejar caracteres especiales y espacios", () => {
    const entrada = ["a b c", "ñáé", "!!!"];
    const esperado = ["c b a", "éáñ", "!!!"];
    expect(invertirArray(entrada)).toEqual(esperado);
  });
});
