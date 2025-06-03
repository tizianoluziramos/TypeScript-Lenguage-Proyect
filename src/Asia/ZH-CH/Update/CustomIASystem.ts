import fs from 'fs';

interface 问答 {
  输入: string;
  输出: string;
}

export function 标准化文本(文本: string): string {
  return 文本
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, ' ')
    .trim();
}

export function 训练神经网络(问答数据: 问答[]): { 输入: string; 输出: string }[] {
  const 训练 = 问答数据.map(item => ({
    输入: 标准化文本(item.输入),
    输出: item.输出
  }));

  return 训练;
}

export function 提问神经网络(输入文本: string, 文件路径: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(文件路径, 'utf8', (err, data) => {
      if (err) {
        reject(`读取文件 ${文件路径} 时出错: ${err}`);
        return;
      }

      const 问答数据: 问答[] = JSON.parse(data);

      const 神经网络 = 训练神经网络(问答数据);

      console.log("神经网络已训练。");

      const 文本标准化 = 标准化文本(输入文本);

      const 回答 = 神经网络.find(item => item.输入 === 文本标准化);

      if (回答) {
        resolve(回答.输出);
      } else {
        resolve("抱歉，我不理解这个问题。");
      }
    });
  });
}

export async function 提问AGPT(输入文本: string, 文件路径: string): Promise<string> {
  try {
    const 回答 = await 提问神经网络(输入文本, 文件路径);
    return 回答;
  } catch (err) {
    return (err as string);  // 确保错误是字符串类型
  }
}
