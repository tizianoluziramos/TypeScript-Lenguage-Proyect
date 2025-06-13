import { spawn } from 'child_process';

export const ejecutarScriptPython = (comando: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', ['script.py', comando]);

    let stdoutData = '';
    let stderrData = '';

    pythonProcess.stdout.on('data', (data: Buffer) => {
      stdoutData += data.toString();
    });

    pythonProcess.stderr.on('data', (data: Buffer) => {
      stderrData += data.toString();
      // Mostrar en rojo en consola
      console.error('\x1b[31m%s\x1b[0m', data.toString());
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        resolve(stdoutData.trim());
      } else {
        reject(new Error(stderrData || `El proceso terminó con código de error ${code}`));
      }
    });

    pythonProcess.on('error', (err) => {
      reject(err);
    });
  });
};