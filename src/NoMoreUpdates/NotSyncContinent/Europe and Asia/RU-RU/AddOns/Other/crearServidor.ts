import * as http from 'http';

export function создатьСервер(порт: number): void {
    const сервер = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Сервер работает\n');
    });

    сервер.listen(порт, () => {
        console.log(`Сервер слушает на http://localhost:${порт}`);
    });
}
