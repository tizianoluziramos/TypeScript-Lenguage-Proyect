// 定时器.ts
export function 定义超时(ms: number, 块: () => void) {
    setTimeout(块, ms);
}
