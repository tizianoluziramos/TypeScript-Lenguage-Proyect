import axios from 'axios';

// Interfaz para la estructura de reponse.data
interface BitcoinPriceResponse {
    bitcoin: {
        usd: number;
    };
}

export async function obtenirPrixBitcoin(): Promise<number | Error> {
    try {
        const reponse = await axios.get<BitcoinPriceResponse>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

        const prixBitcoin = reponse.data.bitcoin.usd;

        return prixBitcoin;

    } catch (erreur) {
        return new Error(`Erreur lors de la récupération du prix du Bitcoin: ${erreur instanceof Error ? erreur.message : 'Erreur inconnue'}`);
    }
}