const SFTPClient = require('ssh2-sftp-client');

export async function verbindenSFTP(servidor: string, puerto: number, usuario: string, contracena: string, rutaadescargar: string) {
    const sftp = new SFTPClient();

    const config = {
        host: servidor,
        port: puerto, // o el puerto que estés usando
        username: usuario,
        password: contracena
    };

    try {
        await sftp.connect(config);
        console.log('Mit dem SFTP-Server verbunden');

        // Listar archivos en el directorio raíz
        const lista = await sftp.list('/');
        console.log('Dateien im Verzeichnis:', lista);

        // Descargar un archivo
        const remoteFilePath = rutaadescargar;
        const localFilePath = './heruntergeladenes_datei.txt';
        await sftp.get(remoteFilePath, localFilePath);
        console.log(`Datei heruntergeladen: ${localFilePath}`);

    } catch (error) {
        console.error('Fehler bei der SFTP-Verbindung:', error);
    } finally {
        sftp.end();
    }
}
