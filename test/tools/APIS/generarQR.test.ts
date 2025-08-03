import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { generateQR } from "../../../src/tools/APIS/generarQR";

global.fetch = vi.fn();

describe("generateQR", () => {
  let qrResult: HTMLElement;

  beforeEach(() => {
    // Simular elemento qrResult
    qrResult = document.createElement("div");
    qrResult.id = "qrResult";
    document.body.appendChild(qrResult);

    // Simular imagen capturada
    const img = document.createElement("img");
    img.id = "capturedImage";
    img.src = "data:image/png;base64,fakebase64data";
    document.body.appendChild(img);

    // Simular API Key
    process.env.IMGBB_API_KEY = "FAKE_API_KEY";

    vi.clearAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("debería subir imagen y generar QR si no hay texto pero hay imagen capturada", async () => {
    // Mock fetch: 1. fetch de la imagen -> blob()
    //             2. fetch a imgbb -> json() con URL
    //             3. fetch para generar QR -> ok + url
    (fetch as any)
      .mockResolvedValueOnce({
        blob: () => new Blob(["fakeimage"], { type: "image/png" }),
      })
      .mockResolvedValueOnce({
        json: () =>
          Promise.resolve({
            data: {
              url: "https://imgbb.com/fakeimage.png",
            },
          }),
      })
      .mockResolvedValueOnce({
        ok: true,
        url: "https://qrserver.com/fakeqr2",
      });

    await generateQR(""); // No texto, pero sí imagen

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("https://api.imgbb.com/1/upload"),
      expect.objectContaining({ method: "POST" })
    );

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("https://api.qrserver.com/v1/create-qr-code/")
    );

    expect(qrResult.innerHTML).toContain("Código QR Generado");
    expect(qrResult.innerHTML).toContain("https://qrserver.com/fakeqr2");
  });

  it("debería mostrar un alert si no hay texto ni imagen", async () => {
    // Eliminar imagen capturada
    const img = document.getElementById("capturedImage");
    if (img) img.remove();

    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    await generateQR(""); // Sin texto ni imagen

    expect(alertMock).toHaveBeenCalledWith(
      "Por favor, ingresa un texto o selecciona/captura una imagen antes de generar el QR."
    );

    alertMock.mockRestore();
  });
});
