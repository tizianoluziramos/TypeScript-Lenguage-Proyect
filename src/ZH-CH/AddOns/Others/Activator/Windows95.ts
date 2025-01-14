export class 生成Windows95密钥 {
    // 计算数字中的位数
    static 位数(num: number): number {
        let ct = 0;
        while (num > 0) {
            ct++;
            num = Math.floor(num / 10);
        }
        return ct;
    }

    // 计算数字的各位数之和
    static 各位数之和(num: number): number {
        let sm = 0;
        while (num > 0) {
            const rem = num % 10;
            sm += rem;
            num = Math.floor(num / 10);
        }
        return sm;
    }

    static 密钥CD(): string {
        let x1 = Math.floor(Math.random() * 1001);
        while (x1 % 111 === 0) {
            x1 = Math.floor(Math.random() * 1001);
        }
        let x1str = x1.toString().padStart(3, '0');
        
        let x2 = 1;
        while (this.各位数之和(x2) % 7 !== 0) {
            x2 = Math.floor(Math.random() * 10000000);
            while (x2 % 10 === 0 || x2 % 10 === 8 || x2 % 10 === 9) {
                x2 = Math.floor(Math.random() * 10000000);
            }
        }
        const length = this.位数(x2);
        const x2str = x2.toString().padStart(7, '0');
        
        return `${x1str}-${x2str}`;
    }

    // OEM 密钥生成器
    // 格式: ABCYY-OEM-0XXXXXX-XXXXX
    static 密钥OEM(): string {
        const doy = Math.floor(Math.random() * 367) + 1;
        const doystring = doy.toString().padStart(3, '0');
        
        const ystring = ["95", "96", "97", "98", "99", "00", "01", "02", "03"][Math.floor(Math.random() * 9)];

        let x2 = 1;
        let x2str = "0";
        while (this.各位数之和(x2) % 7 !== 0) {
            x2 = Math.floor(Math.random() * 1000000);
            while (x2 % 10 === 0 || x2 % 10 === 8 || x2 % 10 === 9) {
                x2 = Math.floor(Math.random() * 1000000);
            }
        }
        x2str += x2.toString().padStart(6, '0');
        
        const x3 = Math.floor(Math.random() * 100000);
        const x3str = x3.toString().padStart(5, '0');

        return `${doystring}${ystring}-OEM-${x2str}-${x3str}`;
    }
}
