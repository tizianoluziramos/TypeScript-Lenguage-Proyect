import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

export async function 下载文件(url: string, 目标路径: string) {
    try {
        const 响应 = await axios.get(url, { responseType: 'stream' });

        const 完整路径 = path.resolve(目标路径);
        const 写入器 = fs.createWriteStream(完整路径);

        响应.data.pipe(写入器);

        写入器.on('finish', () => {
            console.log(`文件已下载到: ${完整路径}`);
        });

        写入器.on('error', (错误) => {
            console.error('保存文件时出错:', 错误);
        });
    } catch (错误) {
        console.error('下载文件时出错:', 错误);
    }
}
