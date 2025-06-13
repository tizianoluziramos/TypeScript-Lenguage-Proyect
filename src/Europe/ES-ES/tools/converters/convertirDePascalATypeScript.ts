import axios from 'axios';

interface ConversionResponse {
  data: string;
}

export async function convertirPascalATypeScript(data: string): Promise<string> {
  const pascalCode = data

  const url = 'https://magicloops.dev/api/loop/e27f4c9c-9df3-42d3-be5d-259f9942b92b/run';
  const encodedPayload = encodeURIComponent(pascalCode);
  try {
    const response: ConversionResponse  = await axios.post(url, { input: encodedPayload });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return 'Error al convertir el código';
  }
}