// 用于存储变量的对象
const 变量: Record<string, any> = {};

// 定义变量的函数，格式为 "名称: 类型 = 值"
function 定义变量(赋值: string) {
  // 使用正则表达式提取名称、类型和值
  const 正则 = /^(?<名称>\w+):\s*(?<类型>\w+)\s*=\s*(.+)$/;
  const 匹配 = 赋值.match(正则);

  if (匹配) {
    const 名称 = 匹配[1]; // 第一个捕获组
    const 类型 = 匹配[2]; // 第二个捕获组
    const 值 = 匹配[3]; // 第三个捕获组

    // 将值转换为适当的类型
    let 转换值: any;
    switch (类型.toLowerCase()) {
      case 'number':
        转换值 = Number(值);
        break;
      case 'string':
        转换值 = String(值);
        break;
      case 'boolean':
        转换值 = 值.toLowerCase() === 'true';
        break;
      default:
        console.log(`错误: 未识别的类型 '${类型}'。`);
        return;
    }

    // 将变量存储在对象中
    变量[名称] = 转换值;
  } else {
    console.log('错误: 赋值格式无效。使用 "名称: 类型 = 值"。');
  }
}

/*定义变量('hola: string = 2');
console.log(变量["hola"]);*/
// 导出函数和变量
export { 定义变量, 变量 };
