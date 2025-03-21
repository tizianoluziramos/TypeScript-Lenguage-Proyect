import axios from 'axios';

export async function получитьЦенуБиткойна() {
  try {
    // Выполняем запрос к API CoinGecko
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

    // Извлекаем цену биткойна
    const ценаБиткойна = response.data.bitcoin.usd;

    return ценаБиткойна;

  } catch (error) {
    return error;
  }
}
