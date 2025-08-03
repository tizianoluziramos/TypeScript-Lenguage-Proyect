import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import axios from "axios";
import { convertirPascalATypeScript } from "../../../src/tools/converters/convertirDePascalATypeScript";

vi.mock("axios");
const mockedAxios = axios as unknown as {
  post: ReturnType<typeof vi.fn>;
};

describe("convertirPascalATypeScript", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("devuelve el resultado esperado si la API responde correctamente", async () => {
    const input = 'program HolaMundo; begin writeln("Hola Mundo"); end.';
    const mockedOutput = 'console.log("Hola Mundo");';

    mockedAxios.post = vi.fn().mockResolvedValue({
      data: mockedOutput,
    });

    const result = await convertirPascalATypeScript(input);
    expect(result).toBe(mockedOutput);
    expect(mockedAxios.post).toHaveBeenCalledOnce();
    expect(mockedAxios.post).toHaveBeenCalledWith(
      "https://magicloops.dev/api/loop/e27f4c9c-9df3-42d3-be5d-259f9942b92b/run",
      {
        input: encodeURIComponent(input),
      }
    );
  });

  test("devuelve mensaje de error si la API falla", async () => {
    const input = "program Error;";
    mockedAxios.post = vi.fn().mockRejectedValue(new Error("Network Error"));

    const result = await convertirPascalATypeScript(input);
    expect(result).toBe("Error al convertir el código");
    expect(mockedAxios.post).toHaveBeenCalledOnce();
  });
});
