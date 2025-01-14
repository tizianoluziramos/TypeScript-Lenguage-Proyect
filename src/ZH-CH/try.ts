// 错误处理.ts
export function 尝试捕获(块: () => void, 捕获: (错误: any) => void) {
    try {
        块();
    } catch (错误) {
        捕获(错误);
    }
}
