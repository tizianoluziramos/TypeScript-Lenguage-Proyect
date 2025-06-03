// charAt.ts

// Расширение прототипа String для добавления функции символВ
declare global {
    interface String {
        символВ(index: number): string;
    }
}

String.prototype.символВ = function (index: number): string {
    const длина = this.length;

    // Обработка отрицательных индексов
    if (index < 0) {
        index = длина + index;
    }

    // Проверка, что индекс в пределах допустимого диапазона
    if (index < 0 || index >= длина) {
        return ""; // Возвращает пустую строку, если индекс выходит за пределы
    }

    // Возвращаем символ в указанной позиции
    return this.charAt(index);
};

// Экспортируем функцию для использования в других файлах
export const символВ = function (this: string, index: number): string {
    return this.символВ(index);
};
