import * as fs from 'fs';
import * as mammoth from 'mammoth';

export async function 读取Word文件(文件路径: string): Promise<void> {
    try {
        const 缓冲区 = fs.readFileSync(文件路径);
        const 结果 = await mammoth.extractRawText({ buffer: 缓冲区 });
        console.log(结果.value);
    } catch (错误) {
        console.log(错误);
    }
}
