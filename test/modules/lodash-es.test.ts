// lodash-es.test.ts
import { describe, it, expect } from "vitest";
import lodashEs from "../../src/modules/lodash-es";

describe("lodashEs", () => {
  it("agregar debe concatenar un valor a un array sin modificar el original", () => {
    const arr = [1, 2];
    const result = lodashEs.agregar(arr, 3);
    expect(result).toEqual([1, 2, 3]);
    expect(arr).toEqual([1, 2]); // original intacto
  });

  it("eliminar debe eliminar el valor especificado del array original", () => {
    const arr = [1, 2, 3, 2];
    // _.pull modifica el array original
    const result = lodashEs.eliminar(arr, 2);
    expect(result).toEqual([1, 3]);
    expect(arr).toEqual([1, 3]); // array original modificado
  });

  it("filtrar debe devolver elementos que cumplan con el predicado", () => {
    const arr = [1, 2, 3, 4];
    const result = lodashEs.filtrar(arr, (x) => x % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  it("mapear debe transformar cada elemento del array", () => {
    const arr = [1, 2, 3];
    const result = lodashEs.mapear(arr, (x) => x * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  it("reducir debe acumular los valores correctamente", () => {
    const arr = [1, 2, 3];
    const result = lodashEs.reducir(arr, (acc, val) => acc + val, 0);
    expect(result).toBe(6);
  });

  it("encontrar debe encontrar el primer elemento que cumple la condición", () => {
    const arr = [1, 2, 3, 4];
    const result = lodashEs.encontrar(arr, (x) => x > 2);
    expect(result).toBe(3);
  });

  it("ordenar debe ordenar el array por clave", () => {
    const arr = [{ a: 3 }, { a: 1 }, { a: 2 }];
    const result = lodashEs.ordenar(arr, "a");
    expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
  });

  it("invertir debe invertir el array original", () => {
    const arr = [1, 2, 3];
    const result = lodashEs.invertir(arr);
    expect(result).toEqual([3, 2, 1]);
    expect(arr).toEqual([3, 2, 1]); // modificó el original
  });

  it("unir debe juntar elementos con el separador dado", () => {
    const arr = ["a", "b", "c"];
    expect(lodashEs.unir(arr)).toBe("a,b,c");
    expect(lodashEs.unir(arr, "-")).toBe("a-b-c");
  });

  it("obtener debe retornar el valor en la ruta del objeto", () => {
    const obj = { a: { b: 2 } };
    expect(lodashEs.obtener(obj, "a.b")).toBe(2);
  });

  it("establecer debe modificar el objeto en la ruta dada", () => {
    const obj = { a: { b: 2 } };
    lodashEs.establecer(obj, "a.b", 5);
    expect(obj.a.b).toBe(5);
  });

  it("eliminarPropiedad debe eliminar la clave del objeto", () => {
    const obj = { a: 1, b: 2 };
    lodashEs.eliminarPropiedad(obj, "a");
    expect(obj).toEqual({ b: 2 });
  });

  it("fusionar debe combinar objetos en uno nuevo", () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const result = lodashEs.fusionar(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it("clonar debe hacer una copia profunda", () => {
    const obj: { a: { b: number } } = { a: { b: 2 } };
    const clone = lodashEs.clonar(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj); // debe ser una copia
    clone.a.b = 3; // modificar el clon no afecta al original
    expect(obj.a.b).toBe(2);
  });

  it("keys debe devolver las claves del objeto", () => {
    const obj = { a: 1, b: 2 };
    expect(lodashEs.keys(obj)).toEqual(["a", "b"]);
  });

  it("valores debe devolver los valores del objeto", () => {
    const obj = { a: 1, b: 2 };
    expect(lodashEs.valores(obj)).toEqual([1, 2]);
  });

  it("entradas debe devolver pares [clave, valor]", () => {
    const obj = { a: 1, b: 2 };
    expect(lodashEs.entradas(obj)).toEqual([
      ["a", 1],
      ["b", 2],
    ]);
  });

  it("mayusculas convierte texto a mayúsculas", () => {
    expect(lodashEs.mayusculas("hola")).toBe("HOLA");
  });

  it("minusculas convierte texto a minúsculas", () => {
    expect(lodashEs.minusculas("HOLA")).toBe("hola");
  });

  it("capitalizar convierte la primera letra en mayúscula", () => {
    expect(lodashEs.capitalizar("hola mundo")).toBe("Hola mundo");
  });

  it("reemplazar reemplaza texto", () => {
    expect(lodashEs.reemplazar("hola mundo", "mundo", "a todos")).toBe(
      "hola a todos"
    );
  });

  it("dividir separa texto en array", () => {
    expect(lodashEs.dividir("a,b,c", ",")).toEqual(["a", "b", "c"]);
  });

  it("identidad retorna el mismo valor", () => {
    const val = { a: 1 };
    expect(lodashEs.identidad(val)).toBe(val);
  });

  it("constante retorna siempre el mismo valor", () => {
    const fn = lodashEs.constante(5);
    expect(fn()).toBe(5);
    expect(fn()).toBe(5);
  });

  it("aleatorio genera número entre min y max", () => {
    const num = lodashEs.aleatorio(1, 10);
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(10);
  });

  it("ahora retorna timestamp actual (número mayor a 0)", () => {
    expect(typeof lodashEs.ahora()).toBe("number");
    expect(lodashEs.ahora()).toBeGreaterThan(0);
  });
});
