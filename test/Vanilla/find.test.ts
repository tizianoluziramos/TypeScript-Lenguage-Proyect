import { describe, it, expect } from "vitest";
import { buscarObjeto } from "../../src/Vanilla/find"; // ajusta la ruta según corresponda

describe("buscarObjeto", () => {
  type Persona = { id: number; nombre: string };

  const personas: Persona[] = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Juan" },
    { id: 3, nombre: "María" },
  ];

  it("debe retornar el objeto que cumple con el criterio", () => {
    const resultado = buscarObjeto(personas, (p) => p.nombre === "Juan");
    expect(resultado).toEqual({ id: 2, nombre: "Juan" });
  });

  it("debe retornar undefined si ningún objeto cumple el criterio", () => {
    const resultado = buscarObjeto(personas, (p) => p.nombre === "Pedro");
    expect(resultado).toBeUndefined();
  });

  it("debe retornar el primer objeto que cumple el criterio si hay varios", () => {
    const personasDuplicadas: Persona[] = [
      { id: 1, nombre: "Ana" },
      { id: 2, nombre: "Juan" },
      { id: 3, nombre: "Juan" },
    ];
    const resultado = buscarObjeto(
      personasDuplicadas,
      (p) => p.nombre === "Juan"
    );
    expect(resultado).toEqual({ id: 2, nombre: "Juan" });
  });

  it("debe funcionar con tipos primitivos", () => {
    const numeros = [10, 20, 30, 40];
    const resultado = buscarObjeto(numeros, (n) => n > 25);
    expect(resultado).toBe(30);
  });

  it("debe retornar undefined si el array está vacío", () => {
    const vacio: Persona[] = [];
    const resultado = buscarObjeto(vacio, (p) => true);
    expect(resultado).toBeUndefined();
  });
});
