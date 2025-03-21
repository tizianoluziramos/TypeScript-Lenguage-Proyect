export function buscarObjeto<T>(array: T[], criterio: (objeto: T) => boolean): T | undefined {
    return array.find(criterio);
}
