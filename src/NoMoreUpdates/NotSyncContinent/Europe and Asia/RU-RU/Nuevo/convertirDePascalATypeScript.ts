import axios from 'axios';

// Интерфейс для структуры данных ответа
interface ОтветПреобразования {
    output: string; // Настройте в соответствии с ожидаемой структурой ответа
}

export async function преобразоватьPascalВTypeScript(data: string): Promise<string> {
    // Запрашиваем у пользователя ввод кода Pascal
    const pascalCode = data;

    const url = 'https://magicloops.dev/api/loop/e27f4c9c-9df3-42d3-be5d-259f9942b92b/run';
    const encodedPayload = encodeURIComponent(pascalCode); // Кодируем содержимое

    try {
        const response = await axios.post<ОтветПреобразования>(url, { input: encodedPayload });
        return response.data.output; // Возвращаем ожидаемое поле ответа
    } catch (error) {
        console.error('Ошибка:', error);
        return 'Ошибка при преобразовании кода';
    }
}