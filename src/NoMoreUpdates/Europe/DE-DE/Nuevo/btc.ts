import axios from 'axios';

// Schnittstelle für die Struktur der Antwortdaten
interface BitcoinPreisAntwort {
    bitcoin: {
        usd: number;
    };
}

export async function holeBitcoinPreis(): Promise<number | Error> {
    try {
        // Anfrage an die CoinGecko API senden
        const response = await axios.get<BitcoinPreisAntwort>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

        // Den Preis des Bitcoins extrahieren
        const bitcoinPreis = response.data.bitcoin.usd;

        return bitcoinPreis;

    } catch (error) {
        console.error('Fehler beim Abrufen des Bitcoin-Preises:', error);
        return new Error('Bitcoin-Preis konnte nicht abgerufen werden');
    }
}