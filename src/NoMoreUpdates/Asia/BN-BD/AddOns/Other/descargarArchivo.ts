import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

interface RespostaStream {
    data: NodeJS.ReadableStream;
}

export async function ফাইল_ডাউনলোড(লিংক: string, গন্তব্যপথ: string) {
    try {
        const প্রতিক্রিয়া:RespostaStream = await axios.get(লিংক, { responseType: 'stream' });

        const পূর্ণপথ = path.resolve(গন্তব্যপথ);
        const লেখক = fs.createWriteStream(পূর্ণপথ);

        প্রতিক্রিয়া.data.pipe(লেখক);

        লেখক.on('finish', () => {
            console.log(`ফাইল ডাউনলোড হয়েছে: ${পূর্ণপথ}`);
        });

        লেখক.on('error', (ত্রুটি) => {
            console.error('ফাইল সংরক্ষণে ত্রুটি:', ত্রুটি);
        });
    } catch (ত্রুটি) {
        console.error('ফাইল ডাউনলোডে ত্রুটি:', ত্রুটি);
    }
}
