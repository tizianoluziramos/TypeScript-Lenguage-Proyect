import axios from "axios";

interface Resultado {
  bitcoin: {
    usd: number;
  };
}

export async function obtenerPrecioBitcoin(): Promise<number | unknown> {
  try {
    const response = await axios.get<Resultado>(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );

    const precioBitcoin: number = response.data.bitcoin.usd;

    return precioBitcoin;
  } catch (error) {
    return error;
  }
}
