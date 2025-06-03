import * as fs from 'fs';
import { exec } from 'child_process';

export function leseProzessSpeicher(pid: number, speicherLimitBytes: number, erlaubeTXTDatei: boolean): void {
  exec(`cat /proc/${pid}/mem`, (fehler, stdout, stderr) => {
    if (fehler) {
      console.error(`Fehler beim Lesen des Prozessespeichers: ${stderr}`);
      return;
    }

    const inhalt = stdout.slice(0, speicherLimitBytes);
    const inhaltHex = Buffer.from(inhalt).toString('hex').match(/.{1,2}/g)?.join(' ');

    if (erlaubeTXTDatei) {
      fs.writeFileSync('prozess_speicher.txt', inhaltHex || '');
      console.log("Die Informationen des Prozessespeichers wurden in 'prozess_speicher.txt' gespeichert.");
    } else {
      console.log(inhaltHex);
    }
  });
}
