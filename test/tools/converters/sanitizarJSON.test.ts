import { describe, test, expect } from "vitest";
import { sanitizarJSON } from "../../../src/tools/converters/sanitizarJSON"; // ajustá ruta

describe("sanitizarJSON", () => {
  test("debería eliminar valores null y undefined", () => {
    const input = {
      a: 1,
      b: null,
      c: undefined,
      d: "texto",
    };
    const esperado = {
      a: 1,
      d: "texto",
    };
    expect(sanitizarJSON(input)).toEqual(esperado);
  });

  test("debería eliminar strings vacíos, arrays vacíos y objetos vacíos si eliminarVacios=true", () => {
    const input = {
      a: "",
      b: "no vacio",
      c: [],
      d: [1, 2],
      e: {},
      f: { key: "value" },
      g: null,
      h: undefined,
    };
    const esperado = {
      b: "no vacio",
      d: [1, 2],
      f: { key: "value" },
    };
    expect(sanitizarJSON(input, true)).toEqual(esperado);
  });

  test("debería procesar arrays anidados correctamente", () => {
    const input = [null, undefined, "", [], {}, 5, "texto"];
    const esperadoSinEliminarVacios = ["", [], {}, 5, "texto"];
    const esperadoConEliminarVacios = [5, "texto"];

    expect(sanitizarJSON(input)).toEqual(esperadoSinEliminarVacios);
    expect(sanitizarJSON(input, true)).toEqual(esperadoConEliminarVacios);
  });

  test("debería retornar valores primitivos sin modificar", () => {
    expect(sanitizarJSON(42)).toBe(42);
    expect(sanitizarJSON("hola")).toBe("hola");
    expect(sanitizarJSON(null)).toBeNull();
    expect(sanitizarJSON(undefined)).toBeUndefined();
  });

  test("debería sanitizar recursivamente objetos anidados", () => {
    const input = {
      a: {
        b: null,
        c: "",
        d: {
          e: undefined,
          f: "valor",
        },
      },
    };

    const esperadoSinEliminarVacios = {
      a: {
        c: "",
        d: {
          f: "valor",
        },
      },
    };

    const esperadoConEliminarVacios = {
      a: {
        d: {
          f: "valor",
        },
      },
    };

    expect(sanitizarJSON(input)).toEqual(esperadoSinEliminarVacios);
    expect(sanitizarJSON(input, true)).toEqual(esperadoConEliminarVacios);
  });
});
