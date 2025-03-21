import axios from 'axios';

export async function преобразоватьPythonВTypeScript(data: any): Promise<string> {
  // Запрашиваем у пользователя ввод кода Python
  const pythonCode = data;

  const url = 'https://magicloops.dev/api/loop/5ea8675e-346a-4c19-a3e8-203f01598fe7/run';
  const encodedPayload = encodeURIComponent(pythonCode); // Кодируем содержимое

  try {
    const response = await axios.post(url, { input: encodedPayload });
    return response.data;
  } catch (error) {
    console.error('Ошибка:', error);
    return 'Ошибка при преобразовании кода';
  }
}
