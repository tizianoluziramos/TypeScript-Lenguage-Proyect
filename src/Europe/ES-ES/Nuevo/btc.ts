import axios from 'axios';

export async function obtenerPrecioBitcoin() {
  try {
    // Realizamos la solicitud a la API de CoinGecko
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

    // Extraemos el precio del Bitcoin
    const precioBitcoin = response.data.bitcoin.usd;

    return precioBitcoin;

  } catch (error) {
    return error
  }
}