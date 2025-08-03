// test/modules/readlineUtil.test.ts
import { describe, test, expect, vi, afterEach } from "vitest";
import rlsUtil from "../../src/modules/rlsUtils"; // ajustá si es necesario
import * as rls from "readline-sync";

// Mockear readline-sync usando vi.mock
vi.mock("readline-sync", () => ({
  question: vi.fn(),
  questionInt: vi.fn(),
  keyInYNStrict: vi.fn(),
  keyInPause: vi.fn(),
  keyIn: vi.fn(),
}));

describe("rlsUtil", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("pregunta retorna el valor esperado", () => {
    (rls.question as ReturnType<typeof vi.fn>).mockReturnValue("respuesta");
    const result = rlsUtil.pregunta("¿Cuál es tu nombre?");
    expect(result).toBe("respuesta");
    expect(rls.question).toHaveBeenCalledWith("¿Cuál es tu nombre?");
  });

  test("preguntaInt retorna un número", () => {
    (rls.questionInt as ReturnType<typeof vi.fn>).mockReturnValue(42);
    const result = rlsUtil.preguntaInt("Edad:");
    expect(result).toBe(42);
    expect(rls.questionInt).toHaveBeenCalledWith("Edad:");
  });

  test("preguntaSiNo retorna un booleano", () => {
    (rls.keyInYNStrict as ReturnType<typeof vi.fn>).mockReturnValue(true);
    const result = rlsUtil.preguntaSiNo("¿Continuar?");
    expect(result).toBe(true);
    expect(rls.keyInYNStrict).toHaveBeenCalledWith("¿Continuar?");
  });

  test("pausa llama a keyInPause con argumentos", () => {
    rlsUtil.pausa("Presiona algo");
    expect(rls.keyInPause).toHaveBeenCalledWith("Presiona algo");
  });

  test("preguntaConValidacion repite hasta que sea válido", () => {
    const mock = rls.question as ReturnType<typeof vi.fn>;
    mock.mockReturnValueOnce("malo").mockReturnValueOnce("bueno");

    const resultado = rlsUtil.preguntaConValidacion(
      "Ingrese un texto:",
      (input) => input === "bueno"
    );

    expect(resultado).toBe("bueno");
    expect(mock).toHaveBeenCalledTimes(2);
  });

  test("mostrarMensaje usa console.log", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    rlsUtil.mostrarMensaje("Hola mundo");
    expect(logSpy).toHaveBeenCalledWith("Hola mundo");
    logSpy.mockRestore();
  });

  test("claveConEntradas devuelve un valor oculto", () => {
    (rls.question as ReturnType<typeof vi.fn>).mockReturnValue("clave123");
    const resultado = rlsUtil.claveConEntradas("Clave:");
    expect(resultado).toBe("clave123");
    expect(rls.question).toHaveBeenCalledWith("Clave:", { hideEchoBack: true });
  });

  test("leer llama a keyIn correctamente", () => {
    (rls.keyIn as ReturnType<typeof vi.fn>).mockReturnValue("a");
    const resultado = rlsUtil.leer();
    expect(resultado).toBe("a");
    expect(rls.keyIn).toHaveBeenCalledWith(
      "Presiona cualquier tecla para continuar..."
    );
  });
});
