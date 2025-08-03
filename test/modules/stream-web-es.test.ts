import { describe, test, expect, vi } from "vitest";
import streamEs from "../../src/modules/stream-web-es";

const { Lectura, Escritura, Transformacion, Duplicado, Pasar } = streamEs;

describe("streamEnEspanol", () => {
  test("Lectura desdeArray emite los datos correctamente", async () => {
    const datos = ["a", "b", "c"];
    const lectura = Lectura.desdeArray(datos);
    const recibidos: string[] = [];

    await new Promise<void>((resolve) => {
      lectura.on("data", (chunk) => {
        recibidos.push(chunk.toString());
      });

      lectura.on("end", () => {
        expect(recibidos).toEqual(datos);
        resolve();
      });
    });
  });

  test("Escritura almacena los datos correctamente", async () => {
    const escritura = new Escritura();

    escritura.write("dato1");
    escritura.write("dato2");

    await new Promise<void>((resolve) => {
      escritura.end(() => {
        const datos = escritura.getDatos().map((d) => d.toString());
        expect(datos).toEqual(["dato1", "dato2"]);
        resolve();
      });
    });
  });

  test("Transformacion convierte datos a mayúsculas", async () => {
    const transformacion = new Transformacion();
    const resultado: string[] = [];

    await new Promise<void>((resolve) => {
      transformacion.on("data", (chunk) => {
        resultado.push(chunk.toString());
      });

      transformacion.on("end", () => {
        expect(resultado).toEqual(["HOLA"]);
        resolve();
      });

      transformacion.write("hola");
      transformacion.end();
    });
  });

  test("Duplicado emite y escribe datos", async () => {
    const duplicado = new Duplicado();
    const recibidos: string[] = [];

    vi.spyOn(console, "log").mockImplementation(() => {});

    await new Promise<void>((resolve) => {
      duplicado.on("data", (chunk) => {
        recibidos.push(chunk.toString());
      });

      duplicado.on("end", () => {
        expect(recibidos).toEqual(["Dato del flujo duplicado"]);
        resolve();
      });

      duplicado.write("mensaje");
      duplicado.end();
    });
  });

  test("Pasar actúa como canal intermedio sin alterar datos", async () => {
    const pasar = new Pasar();
    const recibidos: string[] = [];

    await new Promise<void>((resolve) => {
      pasar.on("data", (chunk) => {
        recibidos.push(chunk.toString());
      });

      pasar.on("end", () => {
        expect(recibidos).toEqual(["123"]);
        resolve();
      });

      pasar.write("123");
      pasar.end();
    });
  });
});
