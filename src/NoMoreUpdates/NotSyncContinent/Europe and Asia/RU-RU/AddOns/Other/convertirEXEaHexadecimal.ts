import * as fs from 'fs';

export function преобразоватьEXEaHexadecimal(путьФайла: string, лимитБайтов: number, разрешитьTXTФайл: boolean): void {
  try {
    const dataBuffer = fs.readFileSync(путьФайла);
    const первыеБайты = dataBuffer.subarray(0, лимитБайтов);
    const содержимоеHex = первыеБайты.toString('hex').match(/.{1,2}/g)?.join(' ');

    if (разрешитьTXTФайл) {
      fs.writeFileSync('output.txt', содержимоеHex || '');
      console.log("Содержимое было сохранено в 'output.txt'.");
    } else {
      console.log(содержимоеHex);
    }
  } catch (error) {
    console.error("Ошибка при чтении файла .exe:", error);
  }
}
