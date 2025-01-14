// Promise.ts
export class 执行器<T> {
    private 执行: (解决: (值: T) => void, 拒绝: (原因?: any) => void) => void;

    constructor(执行: (解决: (值: T) => void, 拒绝: (原因?: any) => void) => void) {
        this.执行 = 执行;
    }

    然后(onFulfilled: (值: T) => void, onRejected?: (原因: any) => void): void {
        const 解决 = (值: T) => {
            onFulfilled(值);
        };

        const 拒绝 = (原因: any) => {
            if (onRejected) {
                onRejected(原因);
            }
        };

        this.执行(解决, 拒绝);
    }
}
