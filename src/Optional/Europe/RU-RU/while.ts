// циклы.ts
export function пока(условие: () => boolean, блок: () => void) {
    while (условие()) {
        блок();
    }
}
