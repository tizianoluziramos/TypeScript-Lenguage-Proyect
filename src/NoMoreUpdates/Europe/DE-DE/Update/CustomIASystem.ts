import fs from 'fs';

interface FrageAntwort {
  input: string;
  output: string;
}

export function normalisierenText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, ' ')
    .trim();
}

export function trainiereNetzwerk(frageAntworten: FrageAntwort[]): { input: string; output: string }[] {
  const training = frageAntworten.map(item => ({
    input: normalisierenText(item.input),
    output: item.output
  }));

  return training;
}

export function frageNetzwerk(inputText: string, dateiPfad: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(dateiPfad, 'utf8', (err, data) => {
      if (err) {
        reject(`Fehler beim Lesen der Datei ${dateiPfad}: ${err}`);
        return;
      }

      const frageAntworten: FrageAntwort[] = JSON.parse(data);

      const netzwerk = trainiereNetzwerk(frageAntworten);

      console.log("Neuronales Netzwerk trainiert.");

      const normalisierterText = normalisierenText(inputText);

      const antwort = netzwerk.find(item => item.input === normalisierterText);

      if (antwort) {
        resolve(antwort.output);
      } else {
        resolve("Es tut mir leid, diese Frage verstehe ich nicht.");
      }
    });
  });
}

export async function frageAGPT(inputText: string, dateiPfad: string): Promise<string> {
  try {
    const antwort = await frageNetzwerk(inputText, dateiPfad);
    return antwort;
  } catch (err) {
    return (err as string);  // Wir stellen sicher, dass der Fehler ein String ist
  }
}
