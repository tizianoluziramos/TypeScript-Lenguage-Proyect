// циклы.ts
export function циклы(начало: number, условие: (i: number) => boolean, увеличение: (i: number) => number, блок: (i: number) => void) {
    for (let i = начало; условие(i); i = увеличение(i)) {
        блок(i);
    }
}
