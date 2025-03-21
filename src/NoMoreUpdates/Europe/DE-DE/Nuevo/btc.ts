import axios from 'axios';

export async function holeBitcoinPreis() {
  try {
    // Anfrage an die CoinGecko API senden
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

    // Den Preis des Bitcoins extrahieren
    const bitcoinPreis = response.data.bitcoin.usd;

    return bitcoinPreis;

  } catch (error) {
    return error;
  }
}
