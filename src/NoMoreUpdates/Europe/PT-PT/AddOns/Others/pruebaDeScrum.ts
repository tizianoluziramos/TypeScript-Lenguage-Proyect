export class provasScrum { 

    private tarefas: string[];

    constructor(tarefas: string[]) {
        this.tarefas = tarefas;
    }

    private planificarSprint(): void {
        console.log("\n--- Planificação do Sprint ---");
        console.log("Tarefas a completar:");
        this.tarefas.forEach((tarefa, indice) => console.log(`- Tarefa ${indice + 1}: ${tarefa}`));
    }

    private realizarReuniaoDiaria(): void {
        console.log("\n--- Reunião Diária ---");
        console.log("Avanços e bloqueios da equipa.");
    }

    private revisarSprint(): void {
        console.log("\n--- Revisão do Sprint ---");
        console.log("Apresentação das tarefas completadas e produto incrementado ao cliente.");
    }

    private realizarRetrospectiva(): void {
        console.log("\n--- Retrospectiva do Sprint ---");
        console.log("Reflexão sobre o que funcionou bem e possíveis melhorias.");
    }

    public executarSprint(): void {
        this.planificarSprint();
        this.realizarReuniaoDiaria();
        this.revisarSprint();
        this.realizarRetrospectiva();
        console.log("\nFim do Sprint.");
    }
}
