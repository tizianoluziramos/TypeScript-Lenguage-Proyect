import * as fs from 'fs';
import * as mammoth from 'mammoth';

export async function читатьФайлWord(путьФайла: string): Promise<void> {
    try {
        const buffer = fs.readFileSync(путьФайла); // Cambié "remo" por "buffer"
        const результат = await mammoth.extractRawText({ buffer }); // Uso "buffer" en lugar de "remo"
        console.log(результат.value);
    } catch (ошибка) {
        console.log(ошибка);
    }
}
