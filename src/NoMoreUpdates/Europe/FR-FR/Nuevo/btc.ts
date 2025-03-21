import axios from 'axios';

export async function obtenirPrixBitcoin() {
  try {
    // Effectuer la demande à l'API de CoinGecko
    const reponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

    // Extraire le prix du Bitcoin
    const prixBitcoin = reponse.data.bitcoin.usd;

    return prixBitcoin;

  } catch (erreur) {
    return erreur;
  }
}
