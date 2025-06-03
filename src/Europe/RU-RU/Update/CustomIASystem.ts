import fs from 'fs';

interface ВопросОтвет {
  ввод: string;
  вывод: string;
}

export function нормализоватьТекст(текст: string): string {
  return текст
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, ' ')
    .trim();
}

export function обучитьСеть(вопросыОтветы: ВопросОтвет[]): { ввод: string; вывод: string }[] {
  const обучение = вопросыОтветы.map(item => ({
    ввод: нормализоватьТекст(item.ввод),
    вывод: item.вывод
  }));

  return обучение;
}

export function спроситьСеть(вводТекста: string, путьФайла: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(путьФайла, 'utf8', (err, data) => {
      if (err) {
        reject(`Ошибка при чтении файла ${путьФайла}: ${err}`);
        return;
      }

      const вопросыОтветы: ВопросОтвет[] = JSON.parse(data);

      const сеть = обучитьСеть(вопросыОтветы);

      console.log("Нейронная сеть обучена.");

      const текстНормализованный = нормализоватьТекст(вводТекста);

      const ответ = сеть.find(item => item.ввод === текстНормализованный);

      if (ответ) {
        resolve(ответ.вывод);
      } else {
        resolve("Извините, я не понимаю этот вопрос.");
      }
    });
  });
}

export async function спроситьAGPT(текстВвода: string, путьФайла: string): Promise<string> {
  try {
    const ответ = await спроситьСеть(текстВвода, путьФайла);
    return ответ;
  } catch (err) {
    return (err as string);  // Убедимся, что ошибка — это строка
  }
}
