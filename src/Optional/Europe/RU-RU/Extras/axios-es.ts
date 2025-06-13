// axios-ru.ts
import axios from 'axios';

interface ОтветData {
    [key: string]: any; // Настройте в соответствии с ожидаемой структурой данных
}

interface AxiosRu {
    получить(url: string): Promise<ОтветData>;
    отправить(url: string, данные: any): Promise<ОтветData>;
    обновить(url: string, данные: any): Promise<ОтветData>;
    удалить(url: string): Promise<ОтветData>;
}

const axiosRu: AxiosRu = {
    // Функция для получения данных с URL
    получить: async (url: string): Promise<ОтветData> => {
        try {
            const ответ = await axios.get<ОтветData>(url);
            return ответ.data;
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
            throw error;
        }
    },

    // Функция для отправки данных на URL
    отправить: async (url: string, данные: any): Promise<ОтветData> => {
        try {
            const ответ = await axios.post<ОтветData>(url, данные);
            return ответ.data;
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            throw error;
        }
    },

    // Функция для обновления данных на URL
    обновить: async (url: string, данные: any): Promise<ОтветData> => {
        try {
            const ответ = await axios.put<ОтветData>(url, данные);
            return ответ.data;
        } catch (error) {
            console.error('Ошибка при обновлении данных:', error);
            throw error;
        }
    },

    // Функция для удаления данных на URL
    удалить: async (url: string): Promise<ОтветData> => {
        try {
            const ответ = await axios.delete<ОтветData>(url);
            return ответ.data;
        } catch (error) {
            console.error('Ошибка при удалении данных:', error);
            throw error;
        }
    }
};

export default axiosRu;