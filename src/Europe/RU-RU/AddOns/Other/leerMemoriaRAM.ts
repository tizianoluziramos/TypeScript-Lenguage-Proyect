import * as fs from 'fs';
import { exec } from 'child_process';

export function читатьПроцессВПамяти(pid: number, лимитБайтовПамяти: number, разрешитьTXTФайл: boolean): void {
  exec(`cat /proc/${pid}/mem`, (ошибка, stdout, stderr) => {
    if (ошибка) {
      console.error(`Ошибка при чтении памяти процесса: ${stderr}`);
      return;
    }

    const содержание = stdout.slice(0, лимитБайтовПамяти);
    const содержаниеHex = Buffer.from(содержание).toString('hex').match(/.{1,2}/g)?.join(' ');

    if (разрешитьTXTФайл) {
      fs.writeFileSync('память_процесса.txt', содержаниеHex || '');
      console.log("Информация о памяти процесса сохранена в 'память_процесса.txt'.");
    } else {
      console.log(содержаниеHex);
    }
  });
}
