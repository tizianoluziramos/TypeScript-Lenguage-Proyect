import * as http from 'http';

export function crearServidor(puerto: number): void {
    const servidor = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Servidor en funcionamiento\n');
    });

    servidor.listen(puerto, () => {
        console.log(`Servidor escuchando en http://localhost:${puerto}`);
    });
}
