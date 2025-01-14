import { spawn } from 'child_process';

// 扩展 Promise 原型以包括 .之后 和 .捕获
declare global {
  interface Promise<T> {
    之后(onFulfilled?: (value: T) => void): Promise<T>;
    捕获(onRejected?: (reason: any) => void): Promise<T>;
  }
}

Promise.prototype.之后 = function (onFulfilled) {
  return this.then(onFulfilled);
};

Promise.prototype.捕获 = function (onRejected) {
  return this.catch(onRejected);
};

export const 执行Python脚本 = (命令: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', ['AddOns/script.py', 命令]);

    // 处理 Python 脚本的标准输出
    pythonProcess.stdout.on('data', (data) => {
      console.log(`Python 脚本输出: ${data.toString()}`);
      resolve(data.toString()); // 用输出解决承诺
    });

    // 处理 Python 脚本的标准错误
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Python 脚本错误: ${data.toString()}`);
      reject(new Error(data.toString()));
    });

    // 处理 Python 进程的关闭
    pythonProcess.on('close', (code) => {
      console.log(`Python 进程以代码 ${code} 结束`);
      if (code !== 0) {
        reject(new Error(`进程以错误代码 ${code} 结束`));
      }
    });
  });
};

// 使用该函数
/* 执行Python脚本('start cmd.exe')
  .之后((结果) => {
    console.log(`结果: ${结果}`);
  })
  .捕获((错误) => {
    console.error(`发生错误: ${错误.message}`);
  });
*/
