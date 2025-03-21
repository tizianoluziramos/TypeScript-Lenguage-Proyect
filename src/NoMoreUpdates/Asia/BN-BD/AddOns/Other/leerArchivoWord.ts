import * as fs from 'fs';
import * as mammoth from 'mammoth';

export async function ওয়ার্ড_ফাইল_পড়ুন(ফাইলপথ: string): Promise<void> {
    try {
        const বাফার = fs.readFileSync(ফাইলপথ);
        const ফলাফল = await mammoth.extractRawText({ buffer: বাফার });
        console.log(ফলাফল.value);
    } catch (ত্রুটি) {
        console.log(ত্রুটি);
    }
}
