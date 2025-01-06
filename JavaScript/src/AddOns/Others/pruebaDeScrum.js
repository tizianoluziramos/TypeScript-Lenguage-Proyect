"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pruebasScrum = void 0;
class pruebasScrum {
    constructor(tareas) {
        this.tareas = tareas;
    }
    planificarSprint() {
        console.log("\n--- Planificación del Sprint ---");
        console.log("Tareas a completar:");
        this.tareas.forEach((tarea, indice) => console.log(`- Tarea ${indice + 1}: ${tarea}`));
    }
    realizarReunionDiaria() {
        console.log("\n--- Reunión Diaria ---");
        console.log("Avances y bloqueos del equipo.");
    }
    revisarSprint() {
        console.log("\n--- Revisión del Sprint ---");
        console.log("Presentación de tareas completadas y producto incrementado al cliente.");
    }
    realizarRetrospectiva() {
        console.log("\n--- Retrospectiva del Sprint ---");
        console.log("Reflexión sobre lo que funcionó bien y posibles mejoras.");
    }
    ejecutarSprint() {
        this.planificarSprint();
        this.realizarReunionDiaria();
        this.revisarSprint();
        this.realizarRetrospectiva();
        console.log("\nFin del Sprint.");
    }
}
exports.pruebasScrum = pruebasScrum;
