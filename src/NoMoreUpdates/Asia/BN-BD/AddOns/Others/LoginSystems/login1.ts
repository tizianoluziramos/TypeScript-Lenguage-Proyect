import { v4 as uuidv4 } from 'uuid';

export class কীগেস্টার {
    private static অক্ষর: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    private কীগুলি: { কী: string; uuid: string }[] = []; // কীগুলি এবং তাদের UUID গুলি সংরক্ষণ করে

    // পণ্য কীগুলি তৈরি করে
    static তৈরিকরাকী(): string {
        let কী: string = '';

        for (let i = 0; i < 5; i++) {
            if (i > 0) {
                কী += '-'; // চরিত্রের গ্রুপের মধ্যে ড্যাশ যোগ করে
            }
            for (let j = 0; j < 5; j++) {
                const এলোমেলোইন্ডেক্স = Math.floor(Math.random() * this.অক্ষর.length);
                কী += this.অক্ষর[এলোমেলোইন্ডেক্স]; // এলোমেলো চরিত্র নির্বাচন করে
            }
        }

        return কী;
    }

    // একটি কী এবং তার UUID অ্যারে তে যোগ করে
    কীযোগকরুন(কী: string): void {
        const নতুনUUID = uuidv4(); // একটি নতুন UUID তৈরি করে
        this.কীগুলি.push({ কী, uuid: নতুনUUID });
    }

    // যাচাই করে যে কী অ্যারে তে আছে এবং UUID এর সাথে মিলে কিনা
    কীযাচাই(কী: string, uuid: string): boolean {
        return this.কীগুলি.some(item => item.কী === কী && item.uuid === uuid);
    }

    // একটি নতুন কী তৈরি করে এবং অ্যারে তে যোগ করে
    তৈরিএবংযোগকরুনকী(): void {
        const নতুনকী = কীগেস্টার.তৈরিকরাকী();
        this.কীযোগকরুন(নতুনকী);
        console.log(`নতুন কী তৈরি করা এবং যোগ করা হয়েছে: ${নতুনকী}`);
    }

    // সমস্ত কী প্রদর্শন করে
    প্রদর্শনকরাকীগুলি(): void {
        console.log("সংরক্ষিত কীগুলি:", this.কীগুলি);
    }
}

// লগইন ফাংশন
export function লগইনশুরুকরুন(কীপ্রবিষ্ট: string, uuidপ্রবিষ্ট: string, key: any): void {
    if (key.কীযাচাই(কীপ্রবিষ্ট, uuidপ্রবিষ্ট)) {
        console.log("লগইন সফল।");
    } else {
        console.log("কী বা UUID ভুল। আবার চেষ্টা করুন।");
    }
}
