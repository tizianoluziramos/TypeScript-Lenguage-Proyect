export class উইন্ডোজ৯৫কীগুলি {
    // একটি সংখ্যায় ডিজিটের সংখ্যা গণনা করে
    static ডিজিটগণনা(সংখ্যা: number): number {
        let গণনা = 0;
        while (সংখ্যা > 0) {
            গণনা++;
            সংখ্যা = Math.floor(সংখ্যা / 10);
        }
        return গণনা;
    }

    // একটি সংখ্যার ডিজিটের যোগফল
    static ডিজিটেরযোগফল(সংখ্যা: number): number {
        let যোগফল = 0;
        while (সংখ্যা > 0) {
            const অবশিষ্ট = সংখ্যা % 10;
            যোগফল += অবশিষ্ট;
            সংখ্যা = Math.floor(সংখ্যা / 10);
        }
        return যোগফল;
    }

    // CD কী জেনারেটর
    static সিডিকী(): string {
        let x1 = Math.floor(Math.random() * 1001);
        while (x1 % 111 === 0) {
            x1 = Math.floor(Math.random() * 1001);
        }
        let x1স্ট্রিং = x1.toString().padStart(3, '0');
        
        let x2 = 1;
        while (this.ডিজিটেরযোগফল(x2) % 7 !== 0) {
            x2 = Math.floor(Math.random() * 10000000);
            while (x2 % 10 === 0 || x2 % 10 === 8 || x2 % 10 === 9) {
                x2 = Math.floor(Math.random() * 10000000);
            }
        }
        const দৈর্ঘ্য = this.ডিজিটগণনা(x2);
        const x2স্ট্রিং = x2.toString().padStart(7, '0');
        
        return `${x1স্ট্রিং}-${x2স্ট্রিং}`;
    }

    // OEM কী জেনারেটর
    // ফরম্যাট: ABCYY-OEM-0XXXXXX-XXXXX
    static ওএমকী(): string {
        const বছরেরদিন = Math.floor(Math.random() * 367) + 1;
        const বছরেরদিনস্ট্রিং = বছরেরদিন.toString().padStart(3, '0');
        
        const বছরস্ট্রিং = ["95", "96", "97", "98", "99", "00", "01", "02", "03"][Math.floor(Math.random() * 9)];

        let x2 = 1;
        let x2স্ট্রিং = "0";
        while (this.ডিজিটেরযোগফল(x2) % 7 !== 0) {
            x2 = Math.floor(Math.random() * 1000000);
            while (x2 % 10 === 0 || x2 % 10 === 8 || x2 % 10 === 9) {
                x2 = Math.floor(Math.random() * 1000000);
            }
        }
        x2স্ট্রিং += x2.toString().padStart(6, '0');
        
        const x3 = Math.floor(Math.random() * 100000);
        const x3স্ট্রিং = x3.toString().padStart(5, '0');

        return `${বছরেরদিনস্ট্রিং}${বছরস্ট্রিং}-OEM-${x2স্ট্রিং}-${x3স্ট্রিং}`;
    }
}
