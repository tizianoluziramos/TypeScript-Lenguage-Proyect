// charAt.ts

// String এর প্রোটোটাইপ এক্সটেন্ড করা ফাংশন caracterEn যোগ করতে
declare global {
    interface String {
        চরিত্রএন(index: number): string;
    }
}

String.prototype.চরিত্রএন = function (index: number): string {
    const length = this.length;

    // নেতিবাচক ইনডেক্স হ্যান্ডেল করা
    if (index < 0) {
        index = length + index;
    }

    // ইনডেক্সটি সীমার মধ্যে আছে কিনা চেক করা
    if (index < 0 || index >= length) {
        return ""; // যদি ইনডেক্স সীমার বাইরে থাকে তবে খালি স্ট্রিং ফেরত দেওয়া
    }

    // নির্দিষ্ট অবস্থানে চরিত্রটি ফেরত দেওয়া
    return this.charAt(index);
};

// ফাংশন এক্সপোর্ট করা যাতে এটি অন্য ফাইলে ব্যবহার করা যায়
export const চরিত্রএন = function (this: string, index: number): string {
    return this.চরিত্রএন(index);
};
