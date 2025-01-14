import fs from 'fs';
import pdfParse from 'pdf-parse';

export async function 读取PDF(文件路径: string): Promise<void> {
  try {
    const 数据缓冲区 = fs.readFileSync(文件路径);
    const 数据 = await pdfParse(数据缓冲区);
    console.log(数据.text);
  } catch (错误) {
    console.error("读取PDF文件时出错:", 错误);
  }
}
