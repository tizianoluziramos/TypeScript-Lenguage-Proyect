import * as http from 'http';

export function creerServeur(port: number): void {
    const serveur = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Serveur en fonctionnement\n');
    });

    serveur.listen(port, () => {
        console.log(`Serveur à l'écoute sur http://localhost:${port}`);
    });
}
