"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejecutarScriptPython = void 0;
const child_process_1 = require("child_process");
Promise.prototype.despues = function (onFulfilled) {
    return this.then(onFulfilled);
};
Promise.prototype.captura = function (onRejected) {
    return this.catch(onRejected);
};
const ejecutarScriptPython = (comando) => {
    return new Promise((resolve, reject) => {
        const pythonProcess = (0, child_process_1.spawn)('python', ['AddOns/script.py', comando]);
        // Manejar la salida estándar del script de Python
        pythonProcess.stdout.on('data', (data) => {
            console.log(`Salida del script de Python: ${data.toString()}`);
            resolve(data.toString()); // Resuelve la promesa con la salida
        });
        // Manejar los errores estándar del script de Python
        pythonProcess.stderr.on('data', (data) => {
            console.error(`Error en el script de Python: ${data.toString()}`);
            reject(new Error(data.toString()));
        });
        // Manejar el cierre del proceso de Python
        pythonProcess.on('close', (code) => {
            console.log(`Proceso de Python terminado con código ${code}`);
            if (code !== 0) {
                reject(new Error(`El proceso terminó con código de error ${code}`));
            }
        });
    });
};
exports.ejecutarScriptPython = ejecutarScriptPython;
// Uso de la función
/*ejecutarScriptPython('start cmd.exe')
  .despues((resultado) => {
    console.log(`Resultado: ${resultado}`);
  })
  .captura((error) => {
    console.error(`Ocurrió un error: ${error.message}`);
  });
  */
