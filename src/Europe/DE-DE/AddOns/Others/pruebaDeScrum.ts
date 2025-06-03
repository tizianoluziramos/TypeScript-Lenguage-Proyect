export class ScrumTests {

    private aufgaben: string[];

    constructor(aufgaben: string[]) {
        this.aufgaben = aufgaben;
    }

    private sprintPlanen(): void {
        console.log("\n--- Sprint Planung ---");
        console.log("Zu erledigende Aufgaben:");
        this.aufgaben.forEach((aufgabe, index) => console.log(`- Aufgabe ${index + 1}: ${aufgabe}`));
    }

    private tagesMeetingDurchfuehren(): void {
        console.log("\n--- Tägliches Meeting ---");
        console.log("Fortschritte und Blockierungen des Teams.");
    }

    private sprintÜberpruefen(): void {
        console.log("\n--- Sprint Überprüfung ---");
        console.log("Präsentation der erledigten Aufgaben und des inkrementierten Produkts vor dem Kunden.");
    }

    private sprintRetrospektiveDurchfuehren(): void {
        console.log("\n--- Sprint Retrospektive ---");
        console.log("Reflexion darüber, was gut funktioniert hat und mögliche Verbesserungen.");
    }

    public sprintDurchfuehren(): void {
        this.sprintPlanen();
        this.tagesMeetingDurchfuehren();
        this.sprintÜberpruefen();
        this.sprintRetrospektiveDurchfuehren();
        console.log("\nEnde des Sprints.");
    }
}
