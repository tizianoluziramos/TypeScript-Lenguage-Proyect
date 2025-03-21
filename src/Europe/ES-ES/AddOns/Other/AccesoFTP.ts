const SFTPClient = require('ssh2-sftp-client');

export async function conectarSFTP(servidor: string, puerto: number, usuario: string, contracena: string, rutaadescargar: string) {
    const sftp = new SFTPClient();

    const config = {
        host: servidor,
        port: puerto, // o el puerto que estés usando
        username: usuario,
        password: contracena
    };

    try {
        await sftp.connect(config);
        console.log('Conectado al servidor SFTP');

        // Listar archivos en el directorio raíz
        const lista = await sftp.list('/');
        console.log('Archivos en el directorio:', lista);

        // Descargar un archivo
        const remoteFilePath = rutaadescargar;
        const localFilePath = './archivo_descargado.txt';
        await sftp.get(remoteFilePath, localFilePath);
        console.log(`Archivo descargado: ${localFilePath}`);

    } catch (error) {
        console.error('Error en la conexión SFTP:', error);
    } finally {
        sftp.end();
    }
}