export class pruebasScrum {
  private tareas: string[];

  constructor(tareas: string[]) {
    this.tareas = tareas;
  }

  private planificarSprint(): void {
    console.log("\n--- Planificación del Sprint ---");
    console.log("Tareas a completar:");
    this.tareas.forEach((tarea, indice) =>
      console.log(`- Tarea ${indice + 1}: ${tarea}`)
    );
  }

  private realizarReunionDiaria(): void {
    console.log("\n--- Reunión Diaria ---");
    console.log("Avances y bloqueos del equipo.");
  }

  private revisarSprint(): void {
    console.log("\n--- Revisión del Sprint ---");
    console.log(
      "Presentación de tareas completadas y producto incrementado al cliente."
    );
  }

  private realizarRetrospectiva(): void {
    console.log("\n--- Retrospectiva del Sprint ---");
    console.log("Reflexión sobre lo que funcionó bien y posibles mejoras.");
  }

  public ejecutarSprint(): void {
    this.planificarSprint();
    this.realizarReunionDiaria();
    this.revisarSprint();
    this.realizarRetrospectiva();
    console.log("\nFin del Sprint.");
  }
}
