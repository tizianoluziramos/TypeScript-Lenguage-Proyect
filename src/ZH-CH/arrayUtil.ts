// arrayUtil.ts
export function 映射<T, U>(数组: T[], 函数: (元素: T) => U): U[] {
    return 数组.map(函数);
}

export function 过滤<T>(数组: T[], 函数: (元素: T) => boolean): T[] {
    return 数组.filter(函数);
}

export function 减少<T, U>(数组: T[], 函数: (累加器: U, 元素: T) => U, 初始: U): U {
    return 数组.reduce(函数, 初始);
}

export function 找到<T>(数组: T[], 函数: (元素: T) => boolean): T | undefined {
    return 数组.find(函数);
}

export function 找到索引<T>(数组: T[], 函数: (元素: T) => boolean): number {
    return 数组.findIndex(函数);
}

export function 包含<T>(数组: T[], 元素: T): boolean {
    return 数组.includes(元素);
}

export function 合并<T>(...数组: T[][]): T[] {
    return 数组.flat();
}

export function 分割<T>(数组: T[], 大小: number): T[][] {
    const 结果: T[][] = [];
    for (let i = 0; i < 数组.length; i += 大小) {
        结果.push(数组.slice(i, i + 大小));
    }
    return 结果;
}

export function 排序<T>(数组: T[], 比较?: (a: T, b: T) => number): T[] {
    return 数组.slice().sort(比较);
}

export function 反转<T>(数组: T[]): T[] {
    return 数组.slice().reverse();
}

export function 连接<T>(数组: T[], ...元素: T[]): T[] {
    return 数组.concat(...元素);
}

export function 推入<T>(数组: T[], ...元素: T[]): number {
    return 数组.push(...元素);
}

export function 删除<T>(数组: T[], 元素: T): boolean {
    const 索引 = 数组.indexOf(元素);
    if (索引 !== -1) {
        数组.splice(索引, 1);
        return true;
    }
    return false;
}

export function 切割<T>(数组: T[], 开始: number, 数量?: number): T[] {
    return 数组.slice(开始, 数量 !== undefined ? 开始 + 数量 : undefined);
}

export function 每个<T>(数组: T[], 函数: (元素: T) => void): void {
    数组.forEach(函数);
}
