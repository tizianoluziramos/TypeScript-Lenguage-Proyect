import { v4 as uuidv4 } from 'uuid';

export class 密钥管理器 {
    private static 字符: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    private 密钥: { 密钥: string; uuid: string }[] = []; // 存储密钥及其UUID

    // 生成产品密钥
    static 生成密钥(): string {
        let 密钥: string = '';

        for (let i = 0; i < 5; i++) {
            if (i > 0) {
                密钥 += '-'; // 在字符组之间添加连字符
            }
            for (let j = 0; j < 5; j++) {
                const 随机索引 = Math.floor(Math.random() * this.字符.length);
                密钥 += this.字符[随机索引]; // 选择一个随机字符
            }
        }

        return 密钥;
    }

    // 将密钥及其UUID添加到数组
    添加密钥(密钥: string): void {
        const 新UUID = uuidv4(); // 生成新的UUID
        this.密钥.push({ 密钥, uuid: 新UUID });
    }

    // 验证密钥是否存在于数组中并与UUID匹配
    验证密钥(密钥: string, uuid: string): boolean {
        return this.密钥.some(item => item.密钥 === 密钥 && item.uuid === uuid);
    }

    // 生成并将新密钥添加到数组中
    创建并添加密钥(): void {
        const 新密钥 = 密钥管理器.生成密钥();
        this.添加密钥(新密钥);
        console.log(`生成并添加的密钥: ${新密钥}`);
    }

    // 显示所有存储的密钥
    显示密钥(): void {
        console.log("存储的密钥:", this.密钥);
    }
}

// 登录函数
export function 登录(输入的密钥: string, 输入的UUID: string, key: any): void {
    if (key.验证密钥(输入的密钥, 输入的UUID)) {
        console.log("登录成功。");
    } else {
        console.log("密钥或UUID不正确。请再试一次。");
    }
}
