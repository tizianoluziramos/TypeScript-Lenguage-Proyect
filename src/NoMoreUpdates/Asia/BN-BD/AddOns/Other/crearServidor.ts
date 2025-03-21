import * as http from 'http';

export function সার্ভার_তৈরি_করুন(পোর্ট: number): void {
    const সার্ভার = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('সার্ভার চলছে\n');
    });

    সার্ভার.listen(পোর্ট, () => {
        console.log(`সার্ভার শোনা হচ্ছে http://localhost:${পোর্ট}`);
    });
}
