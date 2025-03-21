// arrayUtil.ts
export function отображать<T, U>(массив: T[], fn: (элемент: T) => U): U[] {
    return массив.map(fn);
}

export function фильтровать<T>(массив: T[], fn: (элемент: T) => boolean): T[] {
    return массив.filter(fn);
}

export function уменьшать<T, U>(массив: T[], fn: (аккумулятор: U, элемент: T) => U, начальный: U): U {
    return массив.reduce(fn, начальный);
}

export function находить<T>(массив: T[], fn: (элемент: T) => boolean): T | undefined {
    return массив.find(fn);
}

export function находитьИндекс<T>(массив: T[], fn: (элемент: T) => boolean): number {
    return массив.findIndex(fn);
}

export function включать<T>(массив: T[], элемент: T): boolean {
    return массив.includes(элемент);
}

export function объединить<T>(...массивы: T[][]): T[] {
    return массивы.flat();
}

export function делить<T>(массив: T[], размер: number): T[][] {
    const результат: T[][] = [];
    for (let i = 0; i < массив.length; i += размер) {
        результат.push(массив.slice(i, i + размер));
    }
    return результат;
}

export function сортировать<T>(массив: T[], сравнивать?: (a: T, b: T) => number): T[] {
    return массив.slice().sort(сравнивать);
}

export function инвертировать<T>(массив: T[]): T[] {
    return массив.slice().reverse();
}

export function конкатенировать<T>(массив: T[], ...элементы: T[]): T[] {
    return массив.concat(...элементы);
}

export function добавить<T>(массив: T[], ...элементы: T[]): number {
    return массив.push(...элементы);
}

export function удалить<T>(массив: T[], элемент: T): boolean {
    const индекс = массив.indexOf(элемент);
    if (индекс !== -1) {
        массив.splice(индекс, 1);
        return true;
    }
    return false;
}

export function обрезать<T>(массив: T[], начало: number, количество?: number): T[] {
    return массив.slice(начало, количество !== undefined ? начало + количество : undefined);
}

export function дляКаждого<T>(массив: T[], fn: (элемент: T) => void): void {
    массив.forEach(fn);
}
