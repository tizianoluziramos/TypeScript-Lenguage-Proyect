import * as readline from 'readline';

export const 转换 = {
    米到厘米: (米: number) => 米 * 100,
    厘米到米: (厘米: number) => 厘米 / 100,
    公斤到磅: (公斤: number) => 公斤 * 2.20462,
    磅到公斤: (磅: number) => 磅 / 2.20462,
    摄氏度到华氏度: (摄氏度: number) => (摄氏度 * 9/5) + 32,
    华氏度到摄氏度: (华氏度: number) => (华氏度 - 32) * 5/9
};

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function 显示菜单(): void {
    console.log('选择一个转换选项:');
    console.log('1. 米到厘米');
    console.log('2. 厘米到米');
    console.log('3. 公斤到磅');
    console.log('4. 磅到公斤');
    console.log('5. 摄氏度到华氏度');
    console.log('6. 华氏度到摄氏度');
    rl.question('选择一个选项 (1-6): ', (选项) => {
        rl.question('输入要转换的值: ', (值Str) => {
            const 值 = parseFloat(值Str);
            执行转换(parseInt(选项), 值);
            rl.close();
        });
    });    
}

export function 执行转换(选项: number, 值: number): void {
    let 结果: number;

    switch (选项) {
        case 1:
            结果 = conversiones.米到厘米(值);
            console.log(`${值} 米是 ${结果} 厘米`);
            break;
        case 2:
            结果 = conversiones.厘米到米(值);
            console.log(`${值} 厘米是 ${结果} 米`);
            break;
        case 3:
            结果 = conversiones.公斤到磅(值);
            console.log(`${值} 公斤是 ${结果} 磅`);
            break;
        case 4:
            结果 = conversiones.磅到公斤(值);
            console.log(`${值} 磅是 ${结果} 公斤`);
            break;
        case 5:
            结果 = conversiones.摄氏度到华氏度(值);
            console.log(`${值} 摄氏度是 ${结果} 华氏度`);
            break;
        case 6:
            结果 = conversiones.华氏度到摄氏度(值);
            console.log(`${值} 华氏度是 ${结果} 摄氏度`);
            break;
        default:
            console.log('无效选项');
            break;
    }
}
