// axios-es.ts
import axios from 'axios';

interface AxiosEs {
    obtener(url: string): Promise<any>;
    enviar(url: string, datos: any): Promise<any>;
    actualizar(url: string, datos: any): Promise<any>;
    eliminar(url: string): Promise<any>;
}
const axiosEs: AxiosEs = {
    obtener: async (url: string): Promise<any> => {
        try {
            const respuesta: any = await axios.get(url);
            return respuesta.data;
        } catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    },

    enviar: async (url: string, datos: any): Promise<any> => {
        try {
            const respuesta: any = await axios.post(url, datos);
            return respuesta.data;
        } catch (error) {
            console.error('Error al enviar datos:', error);
            throw error;
        }
    },

    actualizar: async (url: string, datos: any): Promise<any> => {
        try {
            const respuesta: any = await axios.put(url, datos);
            return respuesta.data;
        } catch (error) {
            console.error('Error al actualizar datos:', error);
            throw error;
        }
    },

    eliminar: async (url: string): Promise<any> => {
        try {
            const respuesta: any = await axios.delete(url);
            return respuesta.data;
        } catch (error) {
            console.error('Error al eliminar datos:', error);
            throw error;
        }
    }
};

export default axiosEs;
