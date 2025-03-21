export function искатьОбъект<T>(массив: T[], критерий: (объект: T) => boolean): T | undefined {
    return массив.find(критерий);
}
