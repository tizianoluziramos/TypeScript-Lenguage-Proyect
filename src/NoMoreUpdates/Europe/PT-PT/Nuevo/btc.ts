import axios from 'axios';

export async function obterPrecoBitcoin() {
  try {
    // Realizamos a solicitação para a API do CoinGecko
    const resposta = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

    // Extraímos o preço do Bitcoin
    const precoBitcoin = resposta.data.bitcoin.usd;

    return precoBitcoin;

  } catch (erro) {
    return erro;
  }
}
