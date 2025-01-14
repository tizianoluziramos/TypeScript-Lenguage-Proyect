import * as fs from 'fs';

export function 转换EXE为十六进制(文件路径: string, 字节限制: number, 允许TXT文件: boolean): void {
  try {
    const 数据缓冲区 = fs.readFileSync(文件路径);
    const 前几个字节 = 数据缓冲区.subarray(0, 字节限制);
    const 内容十六进制 = 前几个字节.toString('hex').match(/.{1,2}/g)?.join(' ');

    if (允许TXT文件) {
      fs.writeFileSync('output.txt', 内容十六进制 || '');
      console.log("内容已保存到 'output.txt'。");
    } else {
      console.log(内容十六进制);
    }
  } catch (error) {
    console.error("读取 .exe 文件时出错:", error);
  }
}
