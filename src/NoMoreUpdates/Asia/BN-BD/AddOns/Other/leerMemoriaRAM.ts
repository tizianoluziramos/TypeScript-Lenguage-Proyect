import * as fs from 'fs';
import { exec } from 'child_process';

export function মেমোরিতে_প্রসেস_পড়ুন(প্রসেসআইডি: number, মেমোরিবাইটসসীমা: number, টেক্সটফাইলঅনুমোদন: boolean): void {
  exec(`cat /proc/${প্রসেসআইডি}/mem`, (ত্রুটি, আউটপুট, ত্রুটিপাঠ) => {
    if (ত্রুটি) {
      console.error(`প্রসেসের মেমোরি পড়তে সমস্যা হয়েছে: ${ত্রুটিপাঠ}`);
      return;
    }

    const কন্টেন্ট = আউটপুট.slice(0, মেমোরিবাইটসসীমা);
    const হেক্স_কন্টেন্ট = Buffer.from(কন্টেন্ট).toString('hex').match(/.{1,2}/g)?.join(' ');

    if (টেক্সটফাইলঅনুমোদন) {
      fs.writeFileSync('প্রসেস_মেমোরি.txt', হেক্স_কন্টেন্ট || '');
      console.log("প্রসেসের মেমোরি সংক্রান্ত তথ্য 'প্রসেস_মেমোরি.txt' ফাইলে সংরক্ষণ করা হয়েছে।");
    } else {
      console.log(হেক্স_কন্টেন্ট);
    }
  });
}
