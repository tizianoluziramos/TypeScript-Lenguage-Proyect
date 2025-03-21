export class PruebasScrum {

    private taches: string[];

    constructor(taches: string[]) {
        this.taches = taches;
    }

    private planifierSprint(): void {
        console.log("\n--- Planification du Sprint ---");
        console.log("Tâches à accomplir :");
        this.taches.forEach((tache, indice) => console.log(`- Tâche ${indice + 1}: ${tache}`));
    }

    private reunionQuotidienne(): void {
        console.log("\n--- Réunion Quotidienne ---");
        console.log("Avancées et obstacles de l'équipe.");
    }

    private revoirSprint(): void {
        console.log("\n--- Révision du Sprint ---");
        console.log("Présentation des tâches accomplies et du produit incrémenté au client.");
    }

    private retrospection(): void {
        console.log("\n--- Rétrospective du Sprint ---");
        console.log("Réflexion sur ce qui a bien fonctionné et les améliorations possibles.");
    }

    public executerSprint(): void {
        this.planifierSprint();
        this.reunionQuotidienne();
        this.revoirSprint();
        this.retrospection();
        console.log("\nFin du Sprint.");
    }
}
