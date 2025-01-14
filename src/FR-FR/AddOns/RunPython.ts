import { spawn } from 'child_process';

// Étendre le prototype de Promise pour inclure .apres et .attraper
declare global {
  interface Promise<T> {
    apres(onFulfilled?: (value: T) => void): Promise<T>;
    attraper(onRejected?: (reason: any) => void): Promise<T>;
  }
}

Promise.prototype.apres = function (onFulfilled) {
  return this.then(onFulfilled);
};

Promise.prototype.attraper = function (onRejected) {
  return this.catch(onRejected);
};

// Fonction pour exécuter un script Python
export const executerScriptPython = (commande: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Lancer le processus Python avec la commande fournie
    const pythonProcess = spawn('python', ['AddOns/script.py', commande]);

    // Gérer la sortie standard du script Python
    pythonProcess.stdout.on('data', (data) => {
      console.log(`Sortie du script Python : ${data.toString()}`);
      resolve(data.toString()); // Résoudre la promesse avec la sortie
    });

    // Gérer les erreurs du script Python
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Erreur dans le script Python : ${data.toString()}`);
      reject(new Error(data.toString()));
    });

    // Gérer la fermeture du processus Python
    pythonProcess.on('close', (code) => {
      console.log(`Processus Python terminé avec le code ${code}`);
      if (code !== 0) {
        reject(new Error(`Le processus a terminé avec le code d'erreur ${code}`));
      }
    });
  });
};

// Exemple d'utilisation
/*executerScriptPython('start cmd.exe')
  .apres((resultat) => {
    console.log(`Résultat : ${resultat}`);
  })
  .attraper((erreur) => {
    console.error(`Une erreur est survenue : ${erreur.message}`);
  });
*/
