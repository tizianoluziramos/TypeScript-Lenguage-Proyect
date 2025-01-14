import axios from 'axios';

export async function convertirPascalEnTypeScript(donnees: string): Promise<string> {
  // Demander à l'utilisateur de saisir le code Pascal
  const codePascal = donnees;

  const url = 'https://magicloops.dev/api/loop/e27f4c9c-9df3-42d3-be5d-259f9942b92b/run';
  const payloadEncode = encodeURIComponent(codePascal); // Encoder le contenu

  try {
    const reponse = await axios.post(url, { input: payloadEncode });
    return reponse.data;
  } catch (erreur) {
    console.error('Erreur:', erreur);
    return 'Erreur lors de la conversion du code';
  }
}
