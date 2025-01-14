// 循环.ts
export function 当条件成立(条件: () => boolean, 块: () => void) {
    while (条件()) {
        块();
    }
}
