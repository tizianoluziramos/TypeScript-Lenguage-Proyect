import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import { obtenerPrecioBitcoin } from "../../../src/tools/APIS/btc";

vi.mock("axios");

describe("obtenerPrecioBitcoin", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debería retornar el precio del Bitcoin si la API responde correctamente", async () => {
    const mockPrecio = 67890.12;

    (axios.get as any).mockResolvedValue({
      data: {
        bitcoin: {
          usd: mockPrecio,
        },
      },
    });

    const resultado = await obtenerPrecioBitcoin();
    expect(resultado).toBe(mockPrecio);
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
  });

  it("debería retornar el error si la API falla", async () => {
    const mockError = new Error("Fallo la conexión");

    (axios.get as any).mockRejectedValue(mockError);

    const resultado = await obtenerPrecioBitcoin();
    expect(resultado).toBe(mockError);
  });
});
