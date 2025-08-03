import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import { obtenerSuscriptoresPorId } from "../../../src/tools/APIS/YoutubeSubscribers"; // ajustá el path real

vi.mock("axios");

describe("obtenerSuscriptoresPorId", () => {
  const canalID = "UC_x5XG1OV2P6uZZ5FSM9Ttw";

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.YOUTUBE_API_KEY = "FAKE_YOUTUBE_KEY";
  });

  it("debería retornar el número de suscriptores correctamente", async () => {
    const mockSubscriberCount = "123456";
    (axios.get as any).mockResolvedValue({
      data: {
        items: [
          {
            statistics: {
              subscriberCount: mockSubscriberCount,
            },
          },
        ],
      },
    });

    const resultado = await obtenerSuscriptoresPorId(canalID);
    expect(resultado).toBe(parseInt(mockSubscriberCount));
    expect(axios.get).toHaveBeenCalledWith(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${canalID}&key=FAKE_YOUTUBE_KEY`
    );
  });

  it("debería retornar null si no hay API key", async () => {
    delete process.env.YOUTUBE_API_KEY;
    const resultado = await obtenerSuscriptoresPorId(canalID);
    expect(resultado).toBeNull();
  });

  it("debería retornar null si la API no devuelve estadísticas", async () => {
    (axios.get as any).mockResolvedValue({
      data: {
        items: [],
      },
    });

    const resultado = await obtenerSuscriptoresPorId(canalID);
    expect(resultado).toBeNull();
  });

  it("debería retornar null si ocurre un error al hacer la petición", async () => {
    (axios.get as any).mockRejectedValue(new Error("Fallo de red"));

    const resultado = await obtenerSuscriptoresPorId(canalID);
    expect(resultado).toBeNull();
  });
});
