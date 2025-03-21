import fs from 'fs';
import pdfParse from 'pdf-parse';

export async function পিডিএফ_পড়ুন(ফাইলপথ: string): Promise<void> {
  try {
    const ডাটা_বাফার = fs.readFileSync(ফাইলপথ);
    const ডাটা = await pdfParse(ডাটা_বাফার);
    console.log(ডাটা.text);
  } catch (ত্রুটি) {
    console.error("পিডিএফ ফাইল পড়ার সময় ত্রুটি:", ত্রুটি);
  }
}
