import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { pruebasScrum } from "../../src/Extras/pruebaDeScrum";

describe("pruebasScrum", () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("ejecutarSprint llama a console.log con los mensajes esperados", () => {
    const tareas = [
      "Diseñar interfaz",
      "Implementar backend",
      "Escribir tests",
    ];
    const scrum = new pruebasScrum(tareas);

    scrum.ejecutarSprint();

    // Comprobar algunos mensajes clave
    expect(consoleSpy).toHaveBeenCalledWith(
      "\n--- Planificación del Sprint ---"
    );
    expect(consoleSpy).toHaveBeenCalledWith("Tareas a completar:");
    expect(consoleSpy).toHaveBeenCalledWith("- Tarea 1: Diseñar interfaz");
    expect(consoleSpy).toHaveBeenCalledWith("\n--- Reunión Diaria ---");
    expect(consoleSpy).toHaveBeenCalledWith("\n--- Revisión del Sprint ---");
    expect(consoleSpy).toHaveBeenCalledWith(
      "\n--- Retrospectiva del Sprint ---"
    );
    expect(consoleSpy).toHaveBeenCalledWith("\nFin del Sprint.");
  });

  test("planificación muestra todas las tareas correctamente", () => {
    const tareas = ["Tarea A", "Tarea B"];
    const scrum = new pruebasScrum(tareas);

    scrum.ejecutarSprint();

    expect(consoleSpy).toHaveBeenCalledWith("- Tarea 1: Tarea A");
    expect(consoleSpy).toHaveBeenCalledWith("- Tarea 2: Tarea B");
  });
});
