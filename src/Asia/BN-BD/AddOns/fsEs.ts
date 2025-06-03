import fs from 'fs/promises';
import iconv from 'iconv-lite'; // এনকোডিং মডিউলটি আমদানি করুন

// বিকল্পগুলির জন্য টাইপ সংজ্ঞায়িত করা
interface বিকল্পগুলি {
  এনকোডিং?: string; // এনকোডিং বিকল্প করা হয়েছে
}

export const fsবাঙালি = {
  async ফাইললেখা(পথ: string, বিষয়বস্তু: string, বিকল্পগুলি: বিকল্পগুলি = {}): Promise<void> {
    try {
      const এনকোডিং = বিকল্পগুলি.এনকোডিং || 'utf-8';
      const বাফার = iconv.encode(বিষয়বস্তু, এনকোডিং); // বিষয়বস্তুটিকে কাঙ্ক্ষিত এনকোডিংয়ের বাফারে রূপান্তরিত করা
      await fs.writeFile(পথ, বাফার);
      console.log('ফাইল সঠিকভাবে লেখা হয়েছে।');
    } catch (error) {
      console.error('ফাইল লেখার সময় ত্রুটি:', error);
    }
  },

  async ফাইলআপডেট(পথ: string, বিষয়বস্তু: string): Promise<void> {
    try {
      await fs.appendFile(পথ, "\n" + বিষয়বস্তু, "utf-8");
      console.log("ফাইল সঠিকভাবে আপডেট হয়েছে");
    } catch (error) {
      console.log("প্রক্রিয়া ত্রুটির সম্মুখীন হয়েছে:", error);
    }
  },

  async ফাইলপড়ুন(ফাইলনাম: string): Promise<void> {
    try {
      const ডেটা: string = await fs.readFile(ফাইলনাম, "utf-8");
      console.log(ডেটা);
    } catch (error) {
      console.error("ত্রুটি ঘটেছে:", error);
    }
  },

  async ফাইলমুছুন(পথ: string): Promise<void> {
    try {
      await fs.unlink(পথ);
      console.log('ফাইল সঠিকভাবে মুছে ফেলা হয়েছে।');
    } catch (error) {
      console.error('ফাইল মুছতে ত্রুটি:', error);
    }
  },

  async ফাইলনামপুনরায়(পুরাতনপথ: string, নতুনপথ: string): Promise<void> {
    try {
      await fs.rename(পুরাতনপথ, নতুনপথ);
      console.log('ফাইল সঠিকভাবে পুনঃনামকরণ করা হয়েছে।');
    } catch (error) {
      console.error('ফাইল পুনঃনামকরণ করতে ত্রুটি:', error);
    }
  },
  
  async ডিরেক্টরিতৈরি(পথ: string, বিকল্প: { recursive?: boolean } = { recursive: false }): Promise<void> {
    try {
      // Usar 'recursive' en lugar de 'পুনরাবৃত্তি'
      await fs.mkdir(পথ, বিকল্প);
      console.log('ডিরেক্টরি সঠিকভাবে তৈরি হয়েছে।');
    } catch (error) {
      console.error('ডিরেক্টরি তৈরি করতে ত্রুটি:', error);
    }
  },

  async ফোল্ডারতালিকা(পথ: string) {
    try {
      const উপাদানসমূহ = await fs.readdir(পথ, { withFileTypes: true });
      উপাদানসমূহ.forEach(উপাদান => {
        if (উপাদান.isDirectory()) {
          console.log(`📁 ফোল্ডার: ${উপাদান.name}`);
        } else {
          console.log(`📄 ফাইল: ${উপাদান.name}`);
        }
      });
    } catch (error) {
      console.error('ফোল্ডার পড়তে ত্রুটি:', error);
    }
  },

  async ফাইলনকল(উত্সপথ: string, গন্তব্যপথ: string): Promise<void> {
    try {
      await fs.copyFile(উত্সপথ, গন্তব্যপথ);
      console.log('ফাইল সঠিকভাবে নকল করা হয়েছে।');
    } catch (error) {
      console.error('ফাইল নকল করতে ত্রুটি:', error);
    }
  },

  async ফাইলপরিসংখ্যান(ফাইলপথ: string) {
    try {
      const পরিসংখ্যান = await fs.stat(ফাইলপথ);

      console.log(`📄 ফাইল: ${ফাইলপথ}`);
      console.log(`- আকার: ${পরিসংখ্যান.size} বাইট`);
      console.log(`- সৃষ্টির তারিখ: ${পরিসংখ্যান.birthtime}`);
      console.log(`- সর্বশেষ পরিবর্তন: ${পরিসংখ্যান.mtime}`);
      console.log(`- এটি ফাইল: ${পরিসংখ্যান.isFile()}`);
      console.log(`- এটি ডিরেক্টরি: ${পরিসংখ্যান.isDirectory()}`);
    } catch (error) {
      console.error('ফাইল পরিসংখ্যান প্রাপ্ত করতে ত্রুটি:', error);
    }
  },
};
