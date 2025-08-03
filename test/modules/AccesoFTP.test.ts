// test/modules/AccesoFTP.test.ts

import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock antes de importar el módulo
const connect = vi.fn();
const list = vi.fn();
const get = vi.fn();
const end = vi.fn();

vi.mock("ssh2-sftp-client", () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      connect,
      list,
      get,
      end,
    })),
  };
});

// Importar después del mock
import { conectarSFTP } from "../../src/modules/AccesoFTP";
import SFTPClient from "ssh2-sftp-client";

describe("conectarSFTP", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    connect.mockResolvedValue(undefined);
    list.mockResolvedValue([{ name: "archivo1.txt" }]);
    get.mockResolvedValue(undefined);
    end.mockReturnValue(undefined);
  });

  it("debería conectar, listar y descargar archivos sin errores", async () => {
    await conectarSFTP("localhost", 22, "usuario", "clave", "/remoto.txt");

    expect(connect).toHaveBeenCalledWith({
      host: "localhost",
      port: 22,
      username: "usuario",
      password: "clave",
    });

    expect(list).toHaveBeenCalledWith("/");
    expect(get).toHaveBeenCalledWith("/remoto.txt", "./archivo_descargado.txt");
    expect(end).toHaveBeenCalled();
  });

  it("debería manejar errores durante la conexión", async () => {
    connect.mockRejectedValueOnce(new Error("Falló la conexión"));

    await conectarSFTP("localhost", 22, "usuario", "clave", "/remoto.txt");

    expect(connect).toHaveBeenCalled();
    expect(end).toHaveBeenCalled();
  });
});
