import fs from 'fs';

interface QuestionReponse {
  input: string;
  output: string;
}

export function normaliserTexte(texte: string): string {
  return texte
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, ' ')
    .trim();
}

export function entraînerRéseau(questionsReponses: QuestionReponse[]): { input: string; output: string }[] {
  const entraînement = questionsReponses.map(item => ({
    input: normaliserTexte(item.input),
    output: item.output
  }));

  return entraînement;
}

export function interrogerRéseau(texteInput: string, cheminFichier: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(cheminFichier, 'utf8', (err, data) => {
      if (err) {
        reject(`Erreur de lecture du fichier ${cheminFichier}: ${err}`);
        return;
      }

      const questionsReponses: QuestionReponse[] = JSON.parse(data);

      const réseau = entraînerRéseau(questionsReponses);

      console.log("Réseau neuronal entraîné.");

      const texteNormalisé = normaliserTexte(texteInput);

      const reponse = réseau.find(item => item.input === texteNormalisé);

      if (reponse) {
        resolve(reponse.output);
      } else {
        resolve("Désolé, je ne comprends pas cette question.");
      }
    });
  });
}

export async function interrogerAGPT(texteDeEntrée: string, cheminDuFichier: string): Promise<string> {
  try {
    const reponse = await interrogerRéseau(texteDeEntrée, cheminDuFichier);
    return reponse;
  } catch (err) {
    return (err as string);  // Nous nous assurons que l'erreur est une chaîne de caractères
  }
}
