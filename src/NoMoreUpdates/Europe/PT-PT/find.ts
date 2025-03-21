export function procurarObjeto<T>(array: T[], critério: (objeto: T) => boolean): T | undefined {
    return array.find(critério);
}
