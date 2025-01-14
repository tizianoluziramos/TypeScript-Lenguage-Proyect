const SFTPClient = require('ssh2-sftp-client');

export async function connecterSFTP(serveur: string, port: number, utilisateur: string, motDePasse: string, cheminADownloader: string) {
    const sftp = new SFTPClient();

    const config = {
        host: serveur,
        port: port, // ou le port que vous utilisez
        username: utilisateur,
        password: motDePasse
    };

    try {
        await sftp.connect(config);
        console.log('Connecté au serveur SFTP');

        // Lister les fichiers dans le répertoire racine
        const liste = await sftp.list('/');
        console.log('Fichiers dans le répertoire:', liste);

        // Télécharger un fichier
        const cheminFichierDist = cheminADownloader;
        const cheminFichierLocal = './fichier_téléchargé.txt';
        await sftp.get(cheminFichierDist, cheminFichierLocal);
        console.log(`Fichier téléchargé: ${cheminFichierLocal}`);

    } catch (error) {
        console.error('Erreur lors de la connexion SFTP:', error);
    } finally {
        sftp.end();
    }
}
