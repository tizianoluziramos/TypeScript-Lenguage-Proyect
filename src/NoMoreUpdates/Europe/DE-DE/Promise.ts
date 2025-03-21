// versprechen.ts
export class versprechen<T> {
    private ausführer: (resolve: (wert: T) => void, reject: (grund?: any) => void) => void;

    constructor(ausführer: (resolve: (wert: T) => void, reject: (grund?: any) => void) => void) {
        this.ausführer = ausführer;
    }

    dann(aufErfüllt: (wert: T) => void, aufAbgelehnt?: (grund: any) => void): void {
        const resolve = (wert: T) => {
            aufErfüllt(wert);
        };

        const reject = (grund: any) => {
            if (aufAbgelehnt) {
                aufAbgelehnt(grund);
            }
        };

        this.ausführer(resolve, reject);
    }
}
