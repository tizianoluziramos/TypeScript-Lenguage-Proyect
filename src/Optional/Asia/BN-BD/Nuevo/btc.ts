import axios from 'axios';

// Interfaz para response.data
interface BitcoinPriceResponse {
    bitcoin: {
        usd: number;
    };
}

export async function বিটকয়েনমূল্যপাওয়া(): Promise<number | Error> {
    try {
        // CoinGecko API তে অনুরোধ করা হচ্ছে
        const response = await axios.get<BitcoinPriceResponse>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

        // বিটকয়েনের মূল্য বের করা হচ্ছে
        const bitcoinPrice = response.data.bitcoin.usd;

        return bitcoinPrice;

    } catch (error) {
        console.error('ত্রুটি:', error);
        return new Error('বিটকয়েনের মূল্য পাওয়া যায়নি');
    }
}