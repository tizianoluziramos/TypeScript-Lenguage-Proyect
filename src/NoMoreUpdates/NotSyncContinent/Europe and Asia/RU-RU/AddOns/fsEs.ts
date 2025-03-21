import fs from 'fs/promises';
import { Stats } from 'fs';
import iconv from 'iconv-lite'; // Импортируем модуль для кодировки

// Определяем тип для параметров
interface Опции {
    encoding?: string; // Делаем кодировку необязательной
}

export const fsRu = {
    async записатьФайл(путь: string, содержимое: string, опции: Опции = {}): Promise<void> {
        try {
            const encoding = опции.encoding || 'utf-8';
            const buffer = iconv.encode(содержимое, encoding); // Преобразуем содержимое в буфер с нужной кодировкой
            await fs.writeFile(путь, buffer);
            console.log('Файл успешно записан.');
        } catch (error) {
            console.error('Ошибка при записи файла:', error);
        }
    },

    async обновитьФайл(путь: string, содержимое: string): Promise<void> {
        try {
              await fs.appendFile(путь, "\n" + содержимое, "utf-8");
              console.log("Файл успешно обновлен");
            } catch (error) {
             console.log("Процесс завершился с ошибкой:", error);
        }
    },

    async прочитатьФайл(имяФайла: string): Promise<void> {
        try {
          const data: string = await fs.readFile(имяФайла, "utf-8");
          console.log(data);
        } catch (error) {
          console.error("Произошла ошибка:", error);
        }
      },

    async удалитьФайл(путь: string): Promise<void> {
        try {
            await fs.unlink(путь);
            console.log('Файл успешно удален.');
        } catch (error) {
            console.error('Ошибка при удалении файла:', error);
        }
    },

    async переименоватьФайл(стараяПуть: string, новаяПуть: string): Promise<void> {
        try {
            await fs.rename(стараяПуть, новаяПуть);
            console.log('Файл успешно переименован.');
        } catch (error) {
            console.error('Ошибка при переименовании файла:', error);
        }
    },

    async создатьКаталог(путь: string, опции: { recursive?: boolean } = { recursive: false }): Promise<void> {
        try {
            await fs.mkdir(путь, опции);
            console.log('Каталог успешно создан.');
        } catch (error) {
            console.error('Ошибка при создании каталога:', error);
        }
    },

    async просматриватьКаталог(путь: string) {
      try {
        const элементы = await fs.readdir(путь, { withFileTypes: true });
        элементы.forEach(элемент => {
          if (элемент.isDirectory()) {
            console.log(`📁 Папка: ${элемент.name}`);
          } else {
            console.log(`📄 Файл: ${элемент.name}`);
          }
        });
      } catch (error) {
        console.error('Ошибка при чтении каталога:', error);
      }
    },

    async копироватьФайл(путьИсточник: string, путьНазначение: string): Promise<void> {
        try {
            await fs.copyFile(путьИсточник, путьНазначение);
            console.log('Файл успешно скопирован.');
        } catch (error) {
            console.error('Ошибка при копировании файла:', error);
        }
    },

    async получитьСтатистику(путьФайла: string) {
      try {
        const статистика = await fs.stat(путьФайла);
        
        console.log(`📄 Файл: ${путьФайла}`);
        console.log(`- Размер: ${статистика.size} байт`);
        console.log(`- Дата создания: ${статистика.birthtime}`);
        console.log(`- Последнее изменение: ${статистика.mtime}`);
        console.log(`- Это файл: ${статистика.isFile()}`);
        console.log(`- Это каталог: ${статистика.isDirectory()}`);
      } catch (error) {
        console.error('Ошибка при получении статистики файла:', error);
      }
    },  
};
