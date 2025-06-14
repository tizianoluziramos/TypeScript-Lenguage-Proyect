import { describe, it, beforeEach, afterEach, vi, expect } from "vitest";
import { consola } from "../../src/Vanilla/console";

describe("consola", () => {
  let logSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.spyOn(console, "info").mockImplementation(() => {});
    vi.spyOn(console, "debug").mockImplementation(() => {});
    vi.spyOn(console, "trace").mockImplementation(() => {});
    vi.spyOn(console, "time").mockImplementation(() => {});
    vi.spyOn(console, "timeEnd").mockImplementation(() => {});
    vi.spyOn(console, "group").mockImplementation(() => {});
    vi.spyOn(console, "groupEnd").mockImplementation(() => {});
    vi.spyOn(console, "groupCollapsed").mockImplementation(() => {});
    vi.spyOn(console, "table").mockImplementation(() => {});
    vi.spyOn(console, "clear").mockImplementation(() => {});
    vi.spyOn(console, "assert").mockImplementation(() => {});
    vi.spyOn(console, "dir").mockImplementation(() => {});
    vi.spyOn(console, "count").mockImplementation(() => {});
    vi.spyOn(console, "countReset").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("mensaje", () => {
    consola.mensaje("Hola");
    expect(console.log).toHaveBeenCalledWith("Hola");
  });

  it("error", () => {
    consola.error("Error!");
    expect(console.error).toHaveBeenCalledWith("Error!");
  });

  it("advertencia", () => {
    consola.advertencia("Atención");
    expect(console.warn).toHaveBeenCalledWith("Atención");
  });

  it("info", () => {
    consola.info("Información");
    expect(console.info).toHaveBeenCalledWith("Información");
  });

  it("depuracion", () => {
    consola.depuracion("Debug");
    expect(console.debug).toHaveBeenCalledWith("Debug");
  });

  it("traza", () => {
    consola.traza("Trazar");
    expect(console.trace).toHaveBeenCalledWith("Trazar");
  });

  it("tiempo y tiempoFin", () => {
    consola.tiempo("miTiempo");
    consola.tiempoFin("miTiempo");
    expect(console.time).toHaveBeenCalledWith("miTiempo");
    expect(console.timeEnd).toHaveBeenCalledWith("miTiempo");
  });

  it("grupo y grupoFin", () => {
    consola.grupo("Grupo");
    consola.grupoFin();
    expect(console.group).toHaveBeenCalledWith("Grupo");
    expect(console.groupEnd).toHaveBeenCalled();
  });

  it("groupCollapsed", () => {
    consola.groupCollapsed("Grupo oculto");
    expect(console.groupCollapsed).toHaveBeenCalledWith("Grupo oculto");
  });

  it("tabla", () => {
    const data = [{ a: 1 }, { a: 2 }];
    consola.tabla(data);
    expect(console.table).toHaveBeenCalledWith(data);
  });

  it("limpiar", () => {
    consola.limpiar();
    expect(console.clear).toHaveBeenCalled();
  });

  it("afirmar (true)", () => {
    consola.afirmar(true, "Esto no se muestra");
    expect(console.assert).toHaveBeenCalledWith(true, "Esto no se muestra");
  });

  it("afirmar (false)", () => {
    consola.afirmar(false, "Esto sí se muestra");
    expect(console.assert).toHaveBeenCalledWith(false, "Esto sí se muestra");
  });

  it("mostrar", () => {
    const obj = { hola: "mundo" };
    consola.mostrar(obj);
    expect(console.dir).toHaveBeenCalledWith(obj);
  });

  it("mostrarXML", () => {
    consola.mostrarXML({ hola: "mundo" });
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("<xml>"));
  });

  it("perfil y terminarPerfil", () => {
    consola.perfil("prueba");
    consola.terminarPerfil("prueba");
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[Perfil iniciado]")
    );
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[Perfil terminado]")
    );
  });

  it("timeStamp", () => {
    consola.timeStamp("marca");
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringMatching(
        /\[TimeStamp\] marca: \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/
      )
    );
  });

  it("countador y reinciarContador", () => {
    consola.countador("veces");
    consola.reinciarContador("veces");
    expect(console.count).toHaveBeenCalledWith("veces");
    expect(console.countReset).toHaveBeenCalledWith("veces");
  });
});
