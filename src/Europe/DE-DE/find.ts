export function objektSuchen<T>(array: T[], kriterien: (objekt: T) => boolean): T | undefined {
    return array.find(kriterien);
}
