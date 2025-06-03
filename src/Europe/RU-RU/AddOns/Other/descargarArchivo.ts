import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

export async function скачатьФайл(url: string, путьНазначения: string) {
    try {
        const ответ = await axios.get(url, { responseType: 'stream' });

        const полныйПуть = path.resolve(путьНазначения);
        const writer = fs.createWriteStream(полныйПуть);

        // Убедитесь, что ответ.data является NodeJS.ReadableStream
        (ответ.data as NodeJS.ReadableStream).pipe(writer);

        writer.on('finish', () => {
            console.log(`Файл загружен по пути: ${полныйПуть}`);
        });

        writer.on('error', (ошибка) => {
            console.error('Ошибка при сохранении файла:', ошибка);
        });
    } catch (ошибка) {
        console.error('Ошибка при скачивании файла:', ошибка);
    }
}