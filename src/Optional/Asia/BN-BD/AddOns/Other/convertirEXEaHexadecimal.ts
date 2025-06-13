import * as fs from 'fs';

export function EXE_থেকে_Hexadecimalএ_রূপান্তর(ফাইলপথ: string, সীমাবদ্ধ_বাইটস: number, allowTXTFile: boolean): void {
  try {
    const dataBuffer = fs.readFileSync(ফাইলপথ);
    const প্রথম_বাইটস = dataBuffer.subarray(0, সীমাবদ্ধ_বাইটস);
    const contenidoHex = প্রথম_বাইটস.toString('hex').match(/.{1,2}/g)?.join(' ');

    if (allowTXTFile) {
      fs.writeFileSync('output.txt', contenidoHex || '');
      console.log("বিষয়বস্তু 'output.txt' ফাইলে সংরক্ষিত হয়েছে।");
    } else {
      console.log(contenidoHex);
    }
  } catch (error) {
    console.error("ফাইল .exe পড়তে ত্রুটি:", error);
  }
}
