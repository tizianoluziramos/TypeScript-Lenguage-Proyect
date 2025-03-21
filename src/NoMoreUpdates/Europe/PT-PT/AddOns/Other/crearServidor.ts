import * as http from 'http';

export function criarServidor(porta: number): void {
    const servidor = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Servidor em funcionamento\n');
    });

    servidor.listen(porta, () => {
        console.log(`Servidor ouvindo em http://localhost:${porta}`);
    });
}
