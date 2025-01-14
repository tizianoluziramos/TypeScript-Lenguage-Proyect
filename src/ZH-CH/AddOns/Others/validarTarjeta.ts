export function 验证卡号(卡号: string | number | (string | number)[]): boolean {
    if (typeof 卡号 === 'string' || typeof 卡号 === 'number') {
        卡号 = [卡号];
    }

    for (const 单个卡号 of 卡号) {
        const 无空格卡号 = String(单个卡号).replace(/\s|-/g, '');

        if (!/^\d+$/.test(无空格卡号)) {
            return false;
        }

        let 总和 = 0;
        let 交替 = false;

        for (let i = 无空格卡号.length - 1; i >= 0; i--) {
            let 数字 = parseInt(无空格卡号.charAt(i), 10);

            if (交替) {
                数字 *= 2;
                if (数字 > 9) {
                    数字 -= 9;
                }
            }

            总和 += 数字; 
            交替 = !交替;
        }

        if (总和 % 10 !== 0) {
            return false;
        }
    }

    return true;
}
