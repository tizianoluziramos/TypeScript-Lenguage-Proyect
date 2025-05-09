// консоль.ts
export const консоль = {
    сообщение: (...args: any[]) => console.log(...args),
    ошибка: (...args: any[]) => console.error(...args),
    предупреждение: (...args: any[]) => console.warn(...args),
    информация: (...args: any[]) => console.info(...args),
    отладка: (...args: any[]) => console.debug(...args),
    трассировка: (...args: any[]) => console.trace(...args),
    время: (имя: string) => console.time(имя),
    времяКонец: (имя: string) => console.timeEnd(имя),
    группа: (...args: any[]) => console.group(...args),
    группаКонец: () => console.groupEnd(),
    таблица: (данные: any) => console.table(данные),
    очистить: () => console.clear(),
    утверждать: (условие: boolean, ...args: any[]) => console.assert(условие, ...args),
    показать: (объект: any) => console.dir(объект),
    показатьXML: (объект: any) => console.dirxml(объект),
    группаСжатая: (...args: any[]) => console.groupCollapsed(...args),
    профиль: (метка: string) => console.profile(метка),
    завершитьПрофиль: () => console.profileEnd(),
    временнаяМетка: (метка: string) => console.timeStamp(метка),
    счетчик: (метка?: string) => console.count(метка),
    сброситьСчетчик: (метка?: string) => console.countReset(метка),
};
