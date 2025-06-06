// axios-fr.ts
import axios from 'axios';

interface AxiosFr {
    obtenir(url: string): Promise<any>;
    envoyer(url: string, donnees: any): Promise<any>;
    mettreAJour(url: string, donnees: any): Promise<any>;
    supprimer(url: string): Promise<any>;
}

const axiosFr: AxiosFr = {
    // Fonction pour obtenir des données d'une URL
    obtenir: async (url: string): Promise<any> => {
        try {
            const reponse = await axios.get(url); // Cambiado a tipo implícito
            return reponse.data;
        } catch (error) {
            console.error('Erreur lors de l\'obtention des données:', error);
            throw error;
        }
    },

    // Fonction pour envoyer des données à une URL
    envoyer: async (url: string, donnees: any): Promise<any> => {
        try {
            const reponse = await axios.post(url, donnees); // Cambiado a tipo implícito
            return reponse.data;
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données:', error);
            throw error;
        }
    },

    // Fonction pour mettre à jour des données à une URL
    mettreAJour: async (url: string, donnees: any): Promise<any> => {
        try {
            const reponse = await axios.put(url, donnees); // Cambiado a tipo implícito
            return reponse.data;
        } catch (error) {
            console.error('Erreur lors de la mise à jour des données:', error);
            throw error;
        }
    },

    // Fonction pour supprimer des données à une URL
    supprimer: async (url: string): Promise<any> => {
        try {
            const reponse = await axios.delete(url); // Cambiado a tipo implícito
            return reponse.data;
        } catch (error) {
            console.error('Erreur lors de la suppression des données:', error);
            throw error;
        }
    }
};

export default axiosFr;