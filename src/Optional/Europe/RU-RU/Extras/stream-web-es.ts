// stream-web-ru.ts
import {
    Readable,
    Writable,
    Transform,
    Duplex,
    PassThrough,
    ReadableOptions,
    WritableOptions,
    TransformOptions,
    DuplexOptions
} from 'stream';

// Класс чтения
class Чтение extends Readable {
    constructor(options?: ReadableOptions) {
        super(options);
    }

    _read(size: number): void {
        // Пользовательская реализация метода _read
        this.push('Пример данных'); // Пример данных для передачи
        this.push(null); // Завершение потока
    }

    static изМассива(arr: any[]): Чтение {
        const поток = new Чтение();
        arr.forEach(data => поток.push(data));
        поток.push(null); // Завершить поток
        return поток;
    }
}

// Класс записи
class Запись extends Writable {
    private arr: any[] = []; // Хранение данных

    constructor(options?: WritableOptions) {
        super(options);
    }

    _write(data: any, encoding: string, callback: (error?: Error | null) => void): void {
        // Добавить данные в массив
        this.arr.push(data);
        callback(); // Вызов callback для указания, что данные обработаны
    }

    _final(callback: (error?: Error | null) => void): void {
        // Завершить и вывести данные
        console.log('Записанные данные:', this.arr);
        callback(); // Завершить поток
    }

    getДанные(): any[] {
        return this.arr; // Метод для доступа к сохранённым данным
    }
}

// Класс трансформации
class Трансформация extends Transform {
    constructor(options?: TransformOptions) {
        super(options);
    }

    _transform(data: any, encoding: string, callback: (error?: Error | null, result?: any) => void): void {
        // Преобразование полученных данных (например, преобразовать в верхний регистр)
        const result = data.toString().toUpperCase();
        callback(null, result); // Вернуть преобразованный результат
    }
}

// Класс дуплекса (чтение и запись)
class Дуплекс extends Duplex {
    constructor(options?: DuplexOptions) {
        super(options);
    }

    _read(size: number): void {
        // Передача данных в потоке
        this.push('Данные из дуплекса');
        this.push(null); // Указывает, что больше нет данных
    }

    _write(data: any, encoding: string, callback: (error?: Error | null) => void): void {
        // Обработка полученных данных
        console.log('Запись в Дуплекс:', data);
        callback(); // Вызов callback для указания, что данные обработаны
    }
}

// Класс PassThrough
class Пропускать extends PassThrough {
    constructor(options?: DuplexOptions) {
        super(options);
    }
}

// Экспортировать классы
const потокиНаРусском = {
    Чтение,
    Запись,
    Трансформация,
    Дуплекс,
    Пропускать
};

export default потокиНаРусском;
