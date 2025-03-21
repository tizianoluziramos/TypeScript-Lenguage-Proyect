"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = factorial;
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
