// axios-pt.ts
import axios from 'axios';

interface RespostaData {
    [key: string]: any; // Ajusta según la estructura esperada de los datos
}

interface AxiosPt {
    obter(url: string): Promise<any>;
    enviar(url: string, dados: any): Promise<any>;
    atualizar(url: string, dados: any): Promise<any>;
    remover(url: string): Promise<any>;
}

const axiosPt: AxiosPt = {
    // Função para obter dados de uma URL
    obter: async (url: string): Promise<any> => {
        try {
            const resposta: RespostaData = await axios.get(url);
            return resposta.data;
        } catch (error) {
            console.error('Erro ao obter dados:', error);
            throw error;
        }
    },

    // Função para enviar dados a uma URL
    enviar: async (url: string, dados: any): Promise<any> => {
        try {
            const resposta: RespostaData = await axios.post(url, dados);
            return resposta.data;
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            throw error;
        }
    },

    // Função para atualizar dados em uma URL
    atualizar: async (url: string, dados: any): Promise<any> => {
        try {
            const resposta: RespostaData = await axios.put(url, dados);
            return resposta.data;
        } catch (error) {
            console.error('Erro ao atualizar dados:', error);
            throw error;
        }
    },

    // Função para remover dados de uma URL
    remover: async (url: string): Promise<any> => {
        try {
            const resposta: RespostaData = await axios.delete(url);
            return resposta.data;
        } catch (error) {
            console.error('Erro ao remover dados:', error);
            throw error;
        }
    }
};

export default axiosPt;
