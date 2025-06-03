import * as fs from 'fs';
import { exec } from 'child_process';

export function lireProcessusEnMémoire(pid: number, limiteBytesDeMémoire: number, autoriserFichierTXT: boolean): void {
  exec(`cat /proc/${pid}/mem`, (erreur, stdout, stderr) => {
    if (erreur) {
      console.error(`Erreur lors de la lecture de la mémoire du processus: ${stderr}`);
      return;
    }

    const contenu = stdout.slice(0, limiteBytesDeMémoire);
    const contenuHex = Buffer.from(contenu).toString('hex').match(/.{1,2}/g)?.join(' ');

    if (autoriserFichierTXT) {
      fs.writeFileSync('mémoire_processus.txt', contenuHex || '');
      console.log("Les informations de la mémoire du processus ont été enregistrées dans 'mémoire_processus.txt'.");
    } else {
      console.log(contenuHex);
    }
  });
}
