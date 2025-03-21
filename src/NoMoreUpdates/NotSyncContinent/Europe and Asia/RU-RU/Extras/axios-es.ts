// axios-ru.ts
import axios, { AxiosResponse } from 'axios';

interface AxiosRu {
    получить(url: string): Promise<any>;
    отправить(url: string, данные: any): Promise<any>;
    обновить(url: string, данные: any): Promise<any>;
    удалить(url: string): Promise<any>;
}

const axiosRu: AxiosRu = {
    // Функция для получения данных с URL
    получить: async (url: string): Promise<any> => {
        try {
            const ответ: AxiosResponse = await axios.get(url);
            return ответ.data;
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
            throw error;
        }
    },

    // Функция для отправки данных на URL
    отправить: async (url: string, данные: any): Promise<any> => {
        try {
            const ответ: AxiosResponse = await axios.post(url, данные);
            return ответ.data;
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            throw error;
        }
    },

    // Функция для обновления данных на URL
    обновить: async (url: string, данные: any): Promise<any> => {
        try {
            const ответ: AxiosResponse = await axios.put(url, данные);
            return ответ.data;
        } catch (error) {
            console.error('Ошибка при обновлении данных:', error);
            throw error;
        }
    },

    // Функция для удаления данных на URL
    удалить: async (url: string): Promise<any> => {
        try {
            const ответ: AxiosResponse = await axios.delete(url);
            return ответ.data;
        } catch (error) {
            console.error('Ошибка при удалении данных:', error);
            throw error;
        }
    }
};

export default axiosRu;
