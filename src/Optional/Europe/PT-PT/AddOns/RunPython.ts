import { spawn } from 'child_process';

// Estender o protótipo de Promise para incluir .depois e .captura
declare global {
  interface Promise<T> {
    depois(onFulfilled?: (value: T) => void): Promise<T>;
    captura(onRejected?: (reason: any) => void): Promise<T>;
  }
}

Promise.prototype.depois = function (onFulfilled) {
  return this.then(onFulfilled);
};

Promise.prototype.captura = function (onRejected) {
  return this.catch(onRejected);
};

export const executarScriptPython = (comando: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', ['AddOns/script.py', comando]);

    // Manipular a saída padrão do script Python
    pythonProcess.stdout.on('data', (data) => {
      console.log(`Saída do script Python: ${data.toString()}`);
      resolve(data.toString()); // Resolver a promessa com a saída
    });

    // Manipular erros padrão do script Python
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Erro no script Python: ${data.toString()}`);
      reject(new Error(data.toString()));
    });

    // Manipular o fechamento do processo Python
    pythonProcess.on('close', (code) => {
      console.log(`Processo Python terminado com código ${code}`);
      if (code !== 0) {
        reject(new Error(`O processo terminou com código de erro ${code}`));
      }
    });
  });
};

// Uso da função
/*executarScriptPython('start cmd.exe')
  .depois((resultado) => {
    console.log(`Resultado: ${resultado}`);
  })
  .captura((erro) => {
    console.error(`Ocorreu um erro: ${erro.message}`);
  });
  */
