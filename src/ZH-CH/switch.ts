export function 案例(值: any, ...选项: { 条件: any, 块: () => void }[]) {
    for (const { 条件, 块 } of 选项) {
        if (值 === 条件) {
            块();
            return;
        }
    }
}
