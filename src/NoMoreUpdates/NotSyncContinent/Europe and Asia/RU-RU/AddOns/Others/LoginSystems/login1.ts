import { v4 as uuidv4 } from 'uuid';

export class МенеджерКлючей {
    private static символы: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    private ключи: { ключ: string; uuid: string }[] = []; // Хранит ключи и их UUID

    // Генерирует ключ продукта
    static сгенерироватьКлюч(): string {
        let ключ: string = '';

        for (let i = 0; i < 5; i++) {
            if (i > 0) {
                ключ += '-'; // Добавляет дефисы между группами символов
            }
            for (let j = 0; j < 5; j++) {
                const случайныйИндекс = Math.floor(Math.random() * this.символы.length);
                ключ += this.символы[случайныйИндекс]; // Выбирает случайный символ
            }
        }

        return ключ;
    }

    // Добавляет ключ и его UUID в массив
    добавитьКлюч(ключ: string): void {
        const новыйUUID = uuidv4(); // Генерирует новый UUID
        this.ключи.push({ ключ, uuid: новыйUUID });
    }

    // Проверяет, существует ли ключ в массиве и совпадает ли UUID
    проверитьКлюч(ключ: string, uuid: string): boolean {
        return this.ключи.some(item => item.ключ === ключ && item.uuid === uuid);
    }

    // Генерирует и добавляет новый ключ в массив
    создатьИДобавитьКлюч(): void {
        const новыйКлюч = МенеджерКлючей.сгенерироватьКлюч();
        this.добавитьКлюч(новыйКлюч);
        console.log(`Ключ сгенерирован и добавлен: ${новыйКлюч}`);
    }

    // Показывает все сохраненные ключи
    показатьКлючи(): void {
        console.log("Сохраненные ключи:", this.ключи);
    }
}

// Функция входа в систему
export function войтиВСистему(введенныйКлюч: string, введенныйUUID: string, ключ: any): void {
    if (ключ.проверитьКлюч(введенныйКлюч, введенныйUUID)) {
        console.log("Вход в систему успешен.");
    } else {
        console.log("Неверный ключ или UUID. Попробуйте снова.");
    }
}
