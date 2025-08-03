import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  MaxVerstappen,
  MaxVerstappenReturnThenCode,
} from "../../../../src/tools/APIS/F1/MaxVerstappen"; // Ajustá el path según corresponda

vi.stubGlobal("fetch", vi.fn());

describe("MaxVerstappenReturnThenCode", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debería retornar loopOutput si la respuesta es exitosa", async () => {
    const mockResponse = { loopOutput: "Red Bull gana otra vez" };

    (fetch as any).mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockResponse),
    });

    const resultado = await MaxVerstappenReturnThenCode();
    expect(resultado).toBe("Red Bull gana otra vez");
  });

  it("debería retornar mensaje de error si response.ok es false", async () => {
    (fetch as any).mockResolvedValue({
      ok: false,
      statusText: "Service Unavailable",
    });

    const resultado = await MaxVerstappenReturnThenCode();
    expect(resultado).toBe("Error: Service Unavailable");
  });

  it("debería manejar error de red correctamente", async () => {
    (fetch as any).mockRejectedValue(new Error("Network failure"));

    const resultado = await MaxVerstappenReturnThenCode();
    expect(resultado).toBe("Error: Network failure");
  });

  it("debería retornar error desconocido si no es instancia de Error", async () => {
    (fetch as any).mockRejectedValue("cualquier cosa");

    const resultado = await MaxVerstappenReturnThenCode();
    expect(resultado).toBe("Error: Unknown error");
  });
});

describe("MaxVerstappen (sin retorno)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debería imprimir loopOutput en consola si la respuesta es exitosa", async () => {
    const mockResponse = { loopOutput: "Victoria de Max" };
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    (fetch as any).mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockResponse),
    });

    await MaxVerstappen();
    expect(logSpy).toHaveBeenCalledWith("Victoria de Max");

    logSpy.mockRestore();
  });

  it("debería imprimir error si response.ok es false", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    (fetch as any).mockResolvedValue({
      ok: false,
      statusText: "No autorizado",
    });

    await MaxVerstappen();
    expect(errorSpy).toHaveBeenCalledWith("No autorizado");

    errorSpy.mockRestore();
  });

  it("debería imprimir error si fetch lanza una excepción", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    (fetch as any).mockRejectedValue(new Error("API down"));

    await MaxVerstappen();
    expect(errorSpy).toHaveBeenCalledWith(new Error("API down"));

    errorSpy.mockRestore();
  });
});
