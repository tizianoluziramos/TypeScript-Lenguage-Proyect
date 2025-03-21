import fs from 'fs/promises';
import { Stats } from 'fs';
import iconv from 'iconv-lite';

interface 选项 {
    encoding?: string;
}

export const 文件系统 = {
    async 写入文件(路径: string, 内容: string, 选项: 选项 = {}): Promise<void> {
        try {
            const encoding = 选项.encoding || 'utf-8';
            const buffer = iconv.encode(内容, encoding);
            await fs.writeFile(路径, buffer);
            console.log('文件已成功写入。');
        } catch (error) {
            console.error('写入文件时出错:', error);
        }
    },

    async 更新文件(路径: string, 内容: string): Promise<void> {
        try {
            await fs.appendFile(路径, "\n" + 内容, "utf-8");
            console.log("文件已成功更新");
        } catch (error) {
            console.log("更新文件时出错:", error);
        }
    },

    async 读取文件(文件名: string): Promise<void> {
        try {
            const data: string = await fs.readFile(文件名, "utf-8");
            console.log(data);
        } catch (error) {
            console.error("读取文件时出错:", error);
        }
    },

    async 删除文件(路径: string): Promise<void> {
        try {
            await fs.unlink(路径);
            console.log('文件已成功删除。');
        } catch (error) {
            console.error('删除文件时出错:', error);
        }
    },

    async 重命名文件(旧路径: string, 新路径: string): Promise<void> {
        try {
            await fs.rename(旧路径, 新路径);
            console.log('文件已成功重命名。');
        } catch (error) {
            console.error('重命名文件时出错:', error);
        }
    },

    async 创建目录(路径: string, 选项: { recursive?: boolean } = { recursive: false }): Promise<void> {
        try {
            await fs.mkdir(路径, 选项);
            console.log('目录已成功创建。');
        } catch (error) {
            console.error('创建目录时出错:', error);
        }
    },

    async 列出目录(路径: string) {
        try {
            const elements = await fs.readdir(路径, { withFileTypes: true });
            elements.forEach(element => {
                if (element.isDirectory()) {
                    console.log(`📁 文件夹: ${element.name}`);
                } else {
                    console.log(`📄 文件: ${element.name}`);
                }
            });
        } catch (error) {
            console.error('读取目录时出错:', error);
        }
    },

    async 复制文件(源路径: string, 目标路径: string): Promise<void> {
        try {
            await fs.copyFile(源路径, 目标路径);
            console.log('文件已成功复制。');
        } catch (error) {
            console.error('复制文件时出错:', error);
        }
    },

    async 获取统计信息(文件路径: string) {
        try {
            const stats = await fs.stat(文件路径);

            console.log(`📄 文件: ${文件路径}`);
            console.log(`- 大小: ${stats.size} 字节`);
            console.log(`- 创建时间: ${stats.birthtime}`);
            console.log(`- 最后修改时间: ${stats.mtime}`);
            console.log(`- 是否是文件: ${stats.isFile()}`);
            console.log(`- 是否是目录: ${stats.isDirectory()}`);
        } catch (error) {
            console.error('获取文件统计信息时出错:', error);
        }
    },
};