// promesse.ts
export class promesse<T> {
    private executor: (resoudre: (valeur: T) => void, rejeter: (raison?: any) => void) => void;

    constructor(executor: (resoudre: (valeur: T) => void, rejeter: (raison?: any) => void) => void) {
        this.executor = executor;
    }

    alors(surResolu: (valeur: T) => void, surRejete?: (raison: any) => void): void {
        const resoudre = (valeur: T) => {
            surResolu(valeur);
        };

        const rejeter = (raison: any) => {
            if (surRejete) {
                surRejete(raison);
            }
        };

        this.executor(resoudre, rejeter);
    }
}
