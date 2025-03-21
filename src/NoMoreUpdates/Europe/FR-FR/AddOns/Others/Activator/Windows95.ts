export class GenererClésWindows95 {
    // Compte le nombre de chiffres dans un nombre
    static nbChiffres(num: number): number {
        let ct = 0;
        while (num > 0) {
            ct++;
            num = Math.floor(num / 10);
        }
        return ct;
    }

    // Additionne les chiffres d'un nombre
    static sommeDesChiffres(num: number): number {
        let sm = 0;
        while (num > 0) {
            const rem = num % 10;
            sm += rem;
            num = Math.floor(num / 10);
        }
        return sm;
    }

    static cléCD(): string {
        let x1 = Math.floor(Math.random() * 1001);
        while (x1 % 111 === 0) {
            x1 = Math.floor(Math.random() * 1001);
        }
        let x1str = x1.toString().padStart(3, '0');
        
        let x2 = 1;
        while (this.sommeDesChiffres(x2) % 7 !== 0) {
            x2 = Math.floor(Math.random() * 10000000);
            while (x2 % 10 === 0 || x2 % 10 === 8 || x2 % 10 === 9) {
                x2 = Math.floor(Math.random() * 10000000);
            }
        }
        const longueur = this.nbChiffres(x2);
        const x2str = x2.toString().padStart(7, '0');
        
        return `${x1str}-${x2str}`;
    }

    // Générateur de clé OEM
    // Format: ABCYY-OEM-0XXXXXX-XXXXX
    static cléOEM(): string {
        const jourDeLAn = Math.floor(Math.random() * 367) + 1;
        const jourDeLAnString = jourDeLAn.toString().padStart(3, '0');
        
        const ystring = ["95", "96", "97", "98", "99", "00", "01", "02", "03"][Math.floor(Math.random() * 9)];

        let x2 = 1;
        let x2str = "0";
        while (this.sommeDesChiffres(x2) % 7 !== 0) {
            x2 = Math.floor(Math.random() * 1000000);
            while (x2 % 10 === 0 || x2 % 10 === 8 || x2 % 10 === 9) {
                x2 = Math.floor(Math.random() * 1000000);
            }
        }
        x2str += x2.toString().padStart(6, '0');
        
        const x3 = Math.floor(Math.random() * 100000);
        const x3str = x3.toString().padStart(5, '0');

        return `${jourDeLAnString}${ystring}-OEM-${x2str}-${x3str}`;
    }
}
