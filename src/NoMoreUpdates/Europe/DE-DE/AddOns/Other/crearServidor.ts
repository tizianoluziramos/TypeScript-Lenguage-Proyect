import * as http from 'http';

export function serverErstellen(port: number): void {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Server läuft\n');
    });

    server.listen(port, () => {
        console.log(`Server hört auf http://localhost:${port}`);
    });
}
