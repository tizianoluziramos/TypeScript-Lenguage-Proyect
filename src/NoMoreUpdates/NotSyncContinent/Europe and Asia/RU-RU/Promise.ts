// промис.ts
export class промис<T> {
    private исполнитель: (resolve: (значение: T) => void, reject: (причина?: any) => void) => void;

    constructor(исполнитель: (resolve: (значение: T) => void, reject: (причина?: any) => void) => void) {
        this.исполнитель = исполнитель;
    }

    then(наИсполнено: (значение: T) => void, наОтклонено?: (причина: any) => void): void {
        const resolve = (значение: T) => {
            наИсполнено(значение);
        };

        const reject = (причина: any) => {
            if (наОтклонено) {
                наОтклонено(причина);
            }
        };

        this.исполнитель(resolve, reject);
    }
}
