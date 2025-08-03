import { describe, it, expect } from "vitest";
import sistemaOperativo, {
  obtenerInformacionSistema,
} from "../../src/modules/os-es";
import os from "os";

describe("sistemaOperativo", () => {
  it("debe exportar propiedades equivalentes a 'os'", () => {
    expect(typeof sistemaOperativo.EOL).toBe("string");
    expect(typeof sistemaOperativo.arquitectura).toBe("function");
    expect(typeof sistemaOperativo.procesadores).toBe("function");
    expect(typeof sistemaOperativo.ordenDeBytes).toBe("function");
    expect(typeof sistemaOperativo.memoriaLibre).toBe("function");
    expect(typeof sistemaOperativo.directorioInicio).toBe("function");
    expect(typeof sistemaOperativo.nombreDelHost).toBe("function");
    expect(typeof sistemaOperativo.cargaPromedio).toBe("function");
    expect(typeof sistemaOperativo.interfacesDeRed).toBe("function");
    expect(typeof sistemaOperativo.plataforma).toBe("function"); // Cambiado a function
    expect(typeof sistemaOperativo.versionDelSO).toBe("function");
    expect(typeof sistemaOperativo.directorioTemporal).toBe("function"); // Cambiado a function
    expect(typeof sistemaOperativo.memoriaTotal).toBe("function");
    expect(typeof sistemaOperativo.tiempoActivo).toBe("function");
    expect(typeof sistemaOperativo.infoUsuario).toBe("function");
  });

  it("las funciones deben devolver valores consistentes con 'os'", () => {
    expect(sistemaOperativo.arquitectura()).toBe(os.arch());
    expect(sistemaOperativo.nombreDelHost()).toBe(os.hostname());
    expect(sistemaOperativo.directorioInicio()).toBe(os.homedir());
    expect(sistemaOperativo.memoriaLibre()).toBe(os.freemem());
    expect(sistemaOperativo.memoriaTotal()).toBe(os.totalmem());
    expect(sistemaOperativo.tiempoActivo()).toBe(os.uptime());
    expect(sistemaOperativo.cargaPromedio()).toEqual(os.loadavg());
    expect(sistemaOperativo.interfacesDeRed()).toEqual(os.networkInterfaces());
    expect(sistemaOperativo.versionDelSO()).toBe(os.release());
    expect(sistemaOperativo.plataforma()).toBe(os.platform()); // Ejecutar función
    expect(sistemaOperativo.directorioTemporal()).toBe(os.tmpdir()); // Ejecutar función
  });

  it("las propiedades string deben ser iguales", () => {
    expect(sistemaOperativo.EOL).toBe(os.EOL);
  });

  it("obtenerInformacionSistema debe devolver un objeto con propiedades correctas", () => {
    const info = obtenerInformacionSistema();

    expect(info).toHaveProperty("arquitectura", os.arch());
    expect(info).toHaveProperty("nombreDelHost", os.hostname());
    expect(info).toHaveProperty("directorioInicio", os.homedir());

    expect(typeof info.memoriaLibre).toBe("number");
    expect(info.memoriaLibre).toBeGreaterThan(0);
    expect(info.memoriaLibre).toBeLessThan(os.totalmem());

    expect(info).toHaveProperty("memoriaTotal", os.totalmem());

    // Para tiempoActivo, permitimos un margen de error pequeño:
    expect(typeof info.tiempoActivo).toBe("number");
    const uptimeOS = os.uptime();
    expect(Math.abs(info.tiempoActivo - uptimeOS)).toBeLessThan(2); // margen 2 segundos

    expect(info).toHaveProperty("cargaPromedio");
    expect(info.cargaPromedio).toEqual(os.loadavg());

    expect(info).toHaveProperty("interfacesDeRed");
    expect(info.interfacesDeRed).toEqual(os.networkInterfaces());

    expect(info).toHaveProperty("versionDelSO", os.release());
  });
});
