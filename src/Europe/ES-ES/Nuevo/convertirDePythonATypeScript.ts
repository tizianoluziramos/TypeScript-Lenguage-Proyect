import axios from 'axios';

interface Resultado {
  data: string;
}

export async function convertirPythonATypeScript(data: any): Promise<string> {
  const pythonCode = data

  const url = 'https://magicloops.dev/api/loop/5ea8675e-346a-4c19-a3e8-203f01598fe7/run';
  const encodedPayload = encodeURIComponent(pythonCode);

  try {
    const response: Resultado = await axios.post(url, { input: encodedPayload });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return 'Error al convertir el código';
  }
}