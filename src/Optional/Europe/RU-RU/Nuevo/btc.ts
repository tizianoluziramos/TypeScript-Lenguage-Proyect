import axios from 'axios';

// Интерфейс для структуры данных ответа
interface ОтветЦенаБиткойна {
    bitcoin: {
        usd: number;
    };
}

export async function получитьЦенуБиткойна(): Promise<number | Error> {
    try {
        // Выполняем запрос к API CoinGecko
        const response = await axios.get<ОтветЦенаБиткойна>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

        // Извлекаем цену биткойна
        const ценаБиткойна = response.data.bitcoin.usd;

        return ценаБиткойна;

    } catch (error) {
        console.error('Ошибка при получении цены биткойна:', error);
        return new Error('Не удалось получить цену биткойна');
    }
}