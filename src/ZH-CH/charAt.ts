// charAt.ts

// 扩展 String 原型以添加 caracterEn 函数
declare global {
    interface String {
        字符在(index: number): string;
    }
}

String.prototype.字符在 = function (index: number): string {
    const 长度 = this.length;

    // 处理负索引
    if (index < 0) {
        index = 长度 + index;
    }

    // 检查索引是否在范围内
    if (index < 0 || index >= 长度) {
        return ""; // 如果索引超出范围，返回空字符串
    }

    // 返回指定位置的字符
    return this.charAt(index);
};

// 导出函数以便在其他文件中使用
export const 字符在 = function (this: string, index: number): string {
    return this.字符在(index);
};
