import axios from 'axios';

// Interfaz ajustada para la estructura de respuesta
interface RespostaConversao {
    output: string; // Ajusta según la estructura esperada de la respuesta
}

export async function পাইথনকেটাইপস্ক্রিপ্টেযোটান(data: string): Promise<string> {
    // ব্যবহারকারীকে পাইথন কোড প্রবেশ করার জন্য অনুরোধ করা হচ্ছে
    const pythonCode = data;

    const url = 'https://magicloops.dev/api/loop/5ea8675e-346a-4c19-a3e8-203f01598fe7/run';
    const encodedPayload = encodeURIComponent(pythonCode); // বিষয়বস্তু কোড করা হচ্ছে

    try {
        const response = await axios.post<RespostaConversao>(url, { input: encodedPayload });
        return response.data.output; // Retorna el campo esperado de la respuesta
    } catch (error) {
        console.error('ত্রুটি:', error);
        return 'কোড রূপান্তর করতে ত্রুটি ঘটেছে';
    }
}