import axios from 'axios';

// Interfaz ajustada para la estructura de respuesta
interface RespostaConversao {
    output: string; // Ajusta según la estructura esperada de la respuesta
}

export async function প্যাসক্যালকেটাইপস্ক্রিপ্টেযোটান(data: string): Promise<string> {
    // ব্যবহারকারীকে প্যাসক্যাল কোড প্রবেশ করার জন্য অনুরোধ করা হচ্ছে
    const pascalCode = data;

    const url = 'https://magicloops.dev/api/loop/e27f4c9c-9df3-42d3-be5d-259f9942b92b/run';
    const encodedPayload = encodeURIComponent(pascalCode); // বিষয়বস্তু কোড করা হচ্ছে

    try {
        const response = await axios.post<RespostaConversao>(url, { input: encodedPayload });
        return response.data.output; // Retorna el campo esperado de la respuesta
    } catch (error) {
        console.error('ত্রুটি:', error);
        return 'কোড রূপান্তর করতে ত্রুটি ঘটেছে';
    }
}