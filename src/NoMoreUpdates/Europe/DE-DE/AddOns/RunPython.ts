import { spawn } from 'child_process';

// Erweiterung des Promise-Prototyps mit .danach und .fehler
declare global {
  interface Promise<T> {
    danach(onFulfilled?: (value: T) => void): Promise<T>;
    fehler(onRejected?: (reason: any) => void): Promise<T>;
  }
}

Promise.prototype.danach = function (onFulfilled) {
  return this.then(onFulfilled);
};

Promise.prototype.fehler = function (onRejected) {
  return this.catch(onRejected);
};

export const ausfuehrenPythonScript = (befehl: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const pythonProzess = spawn('python', ['AddOns/script.py', befehl]);

    // Verarbeite die Standardausgabe des Python-Skripts
    pythonProzess.stdout.on('data', (data) => {
      console.log(`Ausgabe des Python-Skripts: ${data.toString()}`);
      resolve(data.toString()); // Verspricht die Ausgabe
    });

    // Verarbeite die Standardfehlerausgabe des Python-Skripts
    pythonProzess.stderr.on('data', (data) => {
      console.error(`Fehler im Python-Skript: ${data.toString()}`);
      reject(new Error(data.toString()));
    });

    // Verarbeite den Abschluss des Python-Prozesses
    pythonProzess.on('close', (code) => {
      console.log(`Python-Prozess beendet mit Code ${code}`);
      if (code !== 0) {
        reject(new Error(`Der Prozess endete mit einem Fehlercode ${code}`));
      }
    });
  });
};

// Verwendung der Funktion
/*ausfuehrenPythonScript('start cmd.exe')
  .danach((ergebnis) => {
    console.log(`Ergebnis: ${ergebnis}`);
  })
  .fehler((fehler) => {
    console.error(`Es ist ein Fehler aufgetreten: ${fehler.message}`);
  });
  */
