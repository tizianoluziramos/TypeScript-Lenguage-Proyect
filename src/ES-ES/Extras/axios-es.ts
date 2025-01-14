// axios-es.ts
import axios, { AxiosResponse } from 'axios';

interface AxiosEs {
    obtener(url: string): Promise<any>;
    enviar(url: string, datos: any): Promise<any>;
    actualizar(url: string, datos: any): Promise<any>;
    eliminar(url: string): Promise<any>;
}

const axiosEs: AxiosEs = {
    // Función para obtener datos de una URL
    obtener: async (url: string): Promise<any> => {
        try {
            const respuesta: AxiosResponse = await axios.get(url);
            return respuesta.data;
        } catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    },

    // Función para enviar datos a una URL
    enviar: async (url: string, datos: any): Promise<any> => {
        try {
            const respuesta: AxiosResponse = await axios.post(url, datos);
            return respuesta.data;
        } catch (error) {
            console.error('Error al enviar datos:', error);
            throw error;
        }
    },

    // Función para actualizar datos en una URL
    actualizar: async (url: string, datos: any): Promise<any> => {
        try {
            const respuesta: AxiosResponse = await axios.put(url, datos);
            return respuesta.data;
        } catch (error) {
            console.error('Error al actualizar datos:', error);
            throw error;
        }
    },

    // Función para eliminar datos en una URL
    eliminar: async (url: string): Promise<any> => {
        try {
            const respuesta: AxiosResponse = await axios.delete(url);
            return respuesta.data;
        } catch (error) {
            console.error('Error al eliminar datos:', error);
            throw error;
        }
    }
};

export default axiosEs;
