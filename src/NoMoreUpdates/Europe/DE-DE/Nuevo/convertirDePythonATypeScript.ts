import axios from 'axios';

export async function pythonZuTypeScriptKonvertieren(data: any): Promise<string> {
  // Den Benutzer auffordern, den Python-Code einzugeben
  const pythonCode = data;

  const url = 'https://magicloops.dev/api/loop/5ea8675e-346a-4c19-a3e8-203f01598fe7/run';
  const kodierterPayload = encodeURIComponent(pythonCode); // Den Inhalt codieren

  try {
    const response = await axios.post(url, { input: kodierterPayload });
    return response.data;
  } catch (error) {
    console.error('Fehler:', error);
    return 'Fehler bei der Konvertierung des Codes';
  }
}
