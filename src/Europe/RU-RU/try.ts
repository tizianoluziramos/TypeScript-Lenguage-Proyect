// обработкаОшибок.ts
export function попытатьсяПоймать(блок: () => void, поймать: (ошибка: any) => void) {
    try {
        блок();
    } catch (ошибка) {
        поймать(ошибка);
    }
}
