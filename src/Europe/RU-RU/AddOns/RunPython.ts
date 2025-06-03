import { spawn } from 'child_process';

// Расширить прототип Promise для добавления .после и .ловить
declare global {
  interface Promise<T> {
    после(onFulfilled?: (value: T) => void): Promise<T>;
    ловить(onRejected?: (reason: any) => void): Promise<T>;
  }
}

Promise.prototype.после = function (onFulfilled) {
  return this.then(onFulfilled);
};

Promise.prototype.ловить = function (onRejected) {
  return this.catch(onRejected);
};

export const выполнитьСкриптPython = (команда: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', ['AddOns/script.py', команда]);

    // Обработка стандартного вывода скрипта Python
    pythonProcess.stdout.on('data', (data) => {
      console.log(`Вывод скрипта Python: ${data.toString()}`);
      resolve(data.toString()); // Разрешить промис с выводом
    });

    // Обработка стандартных ошибок скрипта Python
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Ошибка в скрипте Python: ${data.toString()}`);
      reject(new Error(data.toString()));
    });

    // Обработка завершения процесса Python
    pythonProcess.on('close', (code) => {
      console.log(`Процесс Python завершён с кодом ${code}`);
      if (code !== 0) {
        reject(new Error(`Процесс завершился с ошибкой, код: ${code}`));
      }
    });
  });
};

// Пример использования функции
/*выполнитьСкриптPython('start cmd.exe')
  .после((результат) => {
    console.log(`Результат: ${результат}`);
  })
  .ловить((ошибка) => {
    console.error(`Произошла ошибка: ${ошибка.message}`);
  });
*/
