"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promesa = void 0;
// promesa.ts
class promesa {
    constructor(executor) {
        this.executor = executor;
    }
    then(onFulfilled, onRejected) {
        const resolve = (value) => {
            onFulfilled(value);
        };
        const reject = (reason) => {
            if (onRejected) {
                onRejected(reason);
            }
        };
        this.executor(resolve, reject);
    }
}
exports.promesa = promesa;
