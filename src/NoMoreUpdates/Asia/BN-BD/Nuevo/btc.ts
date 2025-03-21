import axios from 'axios';

export async function বিটকয়েনমূল্যপাওয়া() {
  try {
    // CoinGecko API তে অনুরোধ করা হচ্ছে
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

    // বিটকয়েনের মূল্য বের করা হচ্ছে
    const bitcoinPrice = response.data.bitcoin.usd;

    return bitcoinPrice;

  } catch (error) {
    return error;
  }
}
