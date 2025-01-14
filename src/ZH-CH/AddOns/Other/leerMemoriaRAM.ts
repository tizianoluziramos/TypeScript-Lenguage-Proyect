import * as fs from 'fs';
import { exec } from 'child_process';

export function 读取内存中的进程(pid: number, 内存字节限制: number, 允许TXT文件: boolean): void {
  exec(`cat /proc/${pid}/mem`, (error, stdout, stderr) => {
    if (error) {
      console.error(`读取进程内存时出错: ${stderr}`);
      return;
    }

    const 内容 = stdout.slice(0, 内存字节限制);
    const 内容十六进制 = Buffer.from(内容).toString('hex').match(/.{1,2}/g)?.join(' ');

    if (允许TXT文件) {
      fs.writeFileSync('内存进程.txt', 内容十六进制 || '');
      console.log("进程内存信息已保存到 '内存进程.txt'。");
    } else {
      console.log(内容十六进制);
    }
  });
}
