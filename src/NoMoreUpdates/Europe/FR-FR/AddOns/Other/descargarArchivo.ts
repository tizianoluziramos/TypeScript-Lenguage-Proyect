import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

interface AxiosStreamResponse {
    data: NodeJS.ReadableStream;
}

export async function telechargerFichier(url: string, cheminDestination: string) {
    try {
        const reponse: AxiosStreamResponse = await axios.get(url, { responseType: 'stream' });

        const cheminComplet = path.resolve(cheminDestination);
        const ecrivain = fs.createWriteStream(cheminComplet);

        reponse.data.pipe(ecrivain);

        ecrivain.on('finish', () => {
            console.log(`Fichier téléchargé à : ${cheminComplet}`);
        });

        ecrivain.on('error', (error) => {
            console.error('Erreur lors de l\'enregistrement du fichier :', error);
        });
    } catch (error) {
        console.error('Erreur lors du téléchargement du fichier :', error);
    }
}
