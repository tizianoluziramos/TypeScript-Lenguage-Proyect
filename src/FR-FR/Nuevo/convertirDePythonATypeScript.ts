import axios from 'axios';

export async function convertirPythonEnTypeScript(donnees: any): Promise<string> {
  // Demander à l'utilisateur de saisir le code Python
  const codePython = donnees;

  const url = 'https://magicloops.dev/api/loop/5ea8675e-346a-4c19-a3e8-203f01598fe7/run';
  const payloadEncode = encodeURIComponent(codePython); // Encoder le contenu

  try {
    const reponse = await axios.post(url, { input: payloadEncode });
    return reponse.data;
  } catch (erreur) {
    console.error('Erreur:', erreur);
    return 'Erreur lors de la conversion du code';
  }
}
