export function 查找对象<T>(数组: T[], 标准: (对象: T) => boolean): T | undefined {
    return 数组.find(标准);
}
