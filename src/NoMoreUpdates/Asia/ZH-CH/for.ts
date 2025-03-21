// 循环.ts
export function 循环(开始: number, 条件: (i: number) => boolean, 增量: (i: number) => number, 块: (i: number) => void) {
    for (let i = 开始; 条件(i); i = 增量(i)) {
        块(i);
    }
}
