import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  FranquitoAPICall,
  FrancoColapintoSubExtensionForAPICallDoNotUserPleaseItsjustANAPI,
} from "../../../../src/tools/APIS/F1/FrancoColapinto"; // Ajustá el path si es diferente

vi.stubGlobal("fetch", vi.fn());

describe("FranquitoAPICall", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debería retornar loopOutput al recibir respuesta exitosa", async () => {
    const mockResponse = {
      status: "success",
      loopOutput: "Hola desde la API",
    };

    (fetch as any).mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockResponse),
    });

    const resultado = await FranquitoAPICall();
    expect(resultado).toBe("Hola desde la API");
  });

  it("debería retornar statusText y status si response.ok es false", async () => {
    (fetch as any).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    const resultado = await FranquitoAPICall();
    expect(resultado).toBe("Internal Server Error 500");
  });

  it("no debería lanzar excepción si fetch falla (problema de red)", async () => {
    (fetch as any).mockRejectedValue(new Error("Error de conexión"));

    const resultado = await FranquitoAPICall();
    expect(resultado).toBe("Error de conexión");
  });

  it("no debería lanzar excepción si fetch falla con error desconocido", async () => {
    (fetch as any).mockRejectedValue("fallo raro sin instancia Error");

    const resultado = await FranquitoAPICall();
    expect(resultado).toBe("Un error desconocido ocurrió");
  });
});

describe("FrancoColapintoSubExtensionForAPICallDoNotUserPleaseItsjustANAPI", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debería retornar valor esperado si FranquitoAPICall funciona", async () => {
    const mockResponse = {
      status: "ok",
      loopOutput: "Respuesta final",
    };

    (fetch as any).mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockResponse),
    });

    const resultado =
      await FrancoColapintoSubExtensionForAPICallDoNotUserPleaseItsjustANAPI();
    expect(resultado).toBe("Respuesta final");
  });

  it("no debería fallar si FranquitoAPICall lanza excepción", async () => {
    (fetch as any).mockRejectedValue(new Error("Timeout del servidor"));

    const resultado =
      await FrancoColapintoSubExtensionForAPICallDoNotUserPleaseItsjustANAPI();
    expect(resultado).toBe("Timeout del servidor");
  });

  it("no debería fallar si FranquitoAPICall lanza error no tipo Error", async () => {
    (fetch as any).mockRejectedValue("desastre sin instancia Error");

    const resultado =
      await FrancoColapintoSubExtensionForAPICallDoNotUserPleaseItsjustANAPI();
    expect(resultado).toBe("Un error desconocido ocurrió");
  });
});
