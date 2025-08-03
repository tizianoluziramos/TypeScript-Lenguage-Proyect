import { describe, test, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import { convertirPythonATypeScript } from "../../../src/tools/converters/convertirDePythonATypeScript";

vi.mock("axios");
const mockedAxios = axios as unknown as {
  post: ReturnType<typeof vi.fn>;
};

describe("convertirPythonATypeScript", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("devuelve resultado si la API responde correctamente", async () => {
    const inputPython = 'print("Hola mundo")';
    const outputTS = 'console.log("Hola mundo");';

    mockedAxios.post = vi.fn().mockResolvedValue({
      data: outputTS,
    });

    const result = await convertirPythonATypeScript(inputPython);
    expect(result).toBe(outputTS);
    expect(mockedAxios.post).toHaveBeenCalledOnce();
    expect(mockedAxios.post).toHaveBeenCalledWith(
      "https://magicloops.dev/api/loop/5ea8675e-346a-4c19-a3e8-203f01598fe7/run",
      { input: encodeURIComponent(inputPython) }
    );
  });

  test("devuelve mensaje de error si la API falla", async () => {
    mockedAxios.post = vi.fn().mockRejectedValue(new Error("Network error"));

    const result = await convertirPythonATypeScript('print("fallo")');
    expect(result).toBe("Error al convertir el código");
    expect(mockedAxios.post).toHaveBeenCalledOnce();
  });
});
