import fs from 'fs';
import pdfParse from 'pdf-parse';

export async function читатьPDF(путьФайла: string): Promise<void> {
  try {
    const буферДанных = fs.readFileSync(путьФайла);
    const данные = await pdfParse(буферДанных);
    console.log(данные.text);
  } catch (ошибка) {
    console.error("Ошибка при чтении PDF файла:", ошибка);
  }
}
