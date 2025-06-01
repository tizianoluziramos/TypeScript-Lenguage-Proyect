import axios from 'axios';

// Интерфейс для структуры данных ответа
interface ОтветПреобразования {
    output: string; // Настройте в соответствии с ожидаемой структурой ответа
}

export async function преобразоватьPythonВTypeScript(data: string): Promise<string> {
    // Запрашиваем у пользователя ввод кода Python
    const pythonCode = data;

    const url = 'https://magicloops.dev/api/loop/5ea8675e-346a-4c19-a3e8-203f01598fe7/run';
    const encodedPayload = encodeURIComponent(pythonCode); // Кодируем содержимое

    try {
        const response = await axios.post<ОтветПреобразования>(url, { input: encodedPayload });
        return response.data.output; // Возвращаем ожидаемое поле ответа
    } catch (error) {
        console.error('Ошибка:', error);
        return 'Ошибка при преобразовании кода';
    }
}