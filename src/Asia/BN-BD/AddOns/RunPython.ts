import { spawn } from 'child_process';

// Promise এর প্রোটোটাইপ এক্সটেন্ড করা হচ্ছে .despues এবং .captura যোগ করতে
declare global {
  interface Promise<T> {
    despues(onFulfilled?: (value: T) => void): Promise<T>;
    captura(onRejected?: (reason: any) => void): Promise<T>;
  }
}

Promise.prototype.despues = function (onFulfilled) {
  return this.then(onFulfilled);
};

Promise.prototype.captura = function (onRejected) {
  return this.catch(onRejected);
};

export const ejecutarScriptPython = (comando: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', ['AddOns/script.py', comando]);

    // Python স্ক্রিপ্টের স্ট্যান্ডার্ড আউটপুট হ্যান্ডেল করা হচ্ছে
    pythonProcess.stdout.on('data', (data) => {
      console.log(`Python স্ক্রিপ্টের আউটপুট: ${data.toString()}`);
      resolve(data.toString()); // আউটপুট দিয়ে প্রমিজ রেজল্ভ করা হচ্ছে
    });

    // Python স্ক্রিপ্টের স্ট্যান্ডার্ড এরর হ্যান্ডেল করা হচ্ছে
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Python স্ক্রিপ্টে ত্রুটি: ${data.toString()}`);
      reject(new Error(data.toString()));
    });

    // Python প্রোসেস বন্ধ হওয়ার পরে হ্যান্ডেল করা হচ্ছে
    pythonProcess.on('close', (code) => {
      console.log(`Python প্রোসেস কোড ${code} দিয়ে শেষ হয়েছে`);
      if (code !== 0) {
        reject(new Error(`প্রোসেস ত্রুটি কোড ${code} দিয়ে শেষ হয়েছে`));
      }
    });
  });
};

// ফাংশনের ব্যবহার
/*ejecutarScriptPython('start cmd.exe')
  .despues((resultado) => {
    console.log(`ফলাফল: ${resultado}`);
  })
  .captura((error) => {
    console.error(`ত্রুটি ঘটেছে: ${error.message}`);
  });
  */
