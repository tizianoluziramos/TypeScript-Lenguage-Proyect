import { describe, it, expect, vi, beforeEach } from "vitest";
import * as http from "http";
import { crearServidor } from "../../src/modules/crearServidor";

vi.mock("http", async () => {
  const actual = await vi.importActual<typeof http>("http");

  return {
    ...actual,
    createServer: vi.fn(() => {
      return {
        listen: vi.fn((port: number, callback: () => void) => callback()),
      };
    }),
  };
});

describe("crearServidor", () => {
  const consola = vi.spyOn(console, "log").mockImplementation(() => {});

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debería crear un servidor y escuchar en el puerto dado", () => {
    const puerto = 3000;
    crearServidor(puerto);

    expect(http.createServer).toHaveBeenCalled();
    expect(consola).toHaveBeenCalledWith(
      `Servidor escuchando en http://localhost:${puerto}`
    );
  });
});
