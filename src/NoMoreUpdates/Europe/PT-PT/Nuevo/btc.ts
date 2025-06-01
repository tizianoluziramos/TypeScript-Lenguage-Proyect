import axios from 'axios';

//Interface para resposta
interface RespostaPrecoBitcoin {
  bitcoin: {
    usd: number; // Preço do Bitcoin em USD
  };
}

export async function obterPrecoBitcoin() {
  try {
    // Realizamos a solicitação para a API do CoinGecko
    const resposta = await axios.get<RespostaPrecoBitcoin>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

    // Extraímos o preço do Bitcoin
    const precoBitcoin: number = resposta.data.bitcoin.usd;

    return precoBitcoin;

  } catch (erro) {
    return erro;
  }
}
