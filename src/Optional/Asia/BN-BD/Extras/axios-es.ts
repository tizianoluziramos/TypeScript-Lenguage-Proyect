// axios-bn.ts
import axios from 'axios';

interface AxiosResponse {
    data: any;
}

interface AxiosBn {
    পাওয়া(url: string): Promise<any>;
    পাঠানো(url: string, ডেটা: any): Promise<any>;
    হালনাগাদ(url: string, ডেটা: any): Promise<any>;
    মুছেFেলা(url: string): Promise<any>;
}

const axiosBn: AxiosBn = {
    // একটি URL থেকে ডেটা পাওয়ার ফাংশন
    পাওয়া: async (url: string): Promise<any> => {
        try {
            const প্রতিক্রিয়া: AxiosResponse = await axios.get(url);
            return প্রতিক্রিয়া.data;
        } catch (error) {
            console.error('ডেটা পাওয়ার সময় ত্রুটি:', error);
            throw error;
        }
    },

    // একটি URL-এ ডেটা পাঠানোর ফাংশন
    পাঠানো: async (url: string, ডেটা: any): Promise<any> => {
        try {
            const প্রতিক্রিয়া: AxiosResponse = await axios.post(url, ডেটা);
            return প্রতিক্রিয়া.data;
        } catch (error) {
            console.error('ডেটা পাঠানোর সময় ত্রুটি:', error);
            throw error;
        }
    },

    // একটি URL-এ ডেটা হালনাগাদ করার ফাংশন
    হালনাগাদ: async (url: string, ডেটা: any): Promise<any> => {
        try {
            const প্রতিক্রিয়া: AxiosResponse = await axios.put(url, ডেটা);
            return প্রতিক্রিয়া.data;
        } catch (error) {
            console.error('ডেটা হালনাগাদ করার সময় ত্রুটি:', error);
            throw error;
        }
    },

    // একটি URL থেকে ডেটা মুছে ফেলার ফাংশন
    মুছেFেলা: async (url: string): Promise<any> => {
        try {
            const প্রতিক্রিয়া: AxiosResponse = await axios.delete(url);
            return প্রতিক্রিয়া.data;
        } catch (error) {
            console.error('ডেটা মুছে ফেলার সময় ত্রুটি:', error);
            throw error;
        }
    }
};

export default axiosBn;
