// প্রতিশ্রুতি.ts
export class প্রতিশ্রুতি<T> {
    private executor: (resolve: (value: T) => void, reject: (reason?: any) => void) => void;

    constructor(executor: (resolve: (value: T) => void, reject: (reason?: any) => void) => void) {
        this.executor = executor;
    }

    then(onFulfilled: (value: T) => void, onRejected?: (reason: any) => void): void {
        const resolve = (value: T) => {
            onFulfilled(value);
        };

        const reject = (reason: any) => {
            if (onRejected) {
                onRejected(reason);
            }
        };

        this.executor(resolve, reject);
    }
}
