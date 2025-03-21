// axios-es.ts
import axios from 'axios';

const axiosEs = {
    // Función para obtener datos de una URL
    obtener: async (url: string) => {
        try {
            const respuesta = await axios.get(url);
            return respuesta.data;
        } catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    },

    // Función para enviar datos a una URL
    enviar: async (url: string, datos: any) => {
        try {
            const respuesta = await axios.post(url, datos);
            return respuesta.data;
        } catch (error) {
            console.error('Error al enviar datos:', error);
            throw error;
        }
    },

    // Función para actualizar datos en una URL
    actualizar: async (url: string, datos: any) => {
        try {
            const respuesta = await axios.put(url, datos);
            return respuesta.data;
        } catch (error) {
            console.error('Error al actualizar datos:', error);
            throw error;
        }
    },

    // Función para eliminar datos en una URL
    eliminar: async (url: string) => {
        try {
            const respuesta = await axios.delete(url);
            return respuesta.data;
        } catch (error) {
            console.error('Error al eliminar datos:', error);
            throw error;
        }
    }
};

export default axiosEs;
