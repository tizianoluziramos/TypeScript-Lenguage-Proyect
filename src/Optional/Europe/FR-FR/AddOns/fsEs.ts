import fs from 'fs/promises';
import { Stats } from 'fs';
import iconv from 'iconv-lite'; // Importer le module de codage

// Définir le type pour les options
interface Options {
    encoding?: string; // Rendre le codage optionnel
}

export const fsFr = {
    async ecrireFichier(chemin: string, contenu: string, options: Options = {}): Promise<void> {
        try {
            const encoding = options.encoding || 'utf-8';
            const buffer = iconv.encode(contenu, encoding); // Convertir le contenu en buffer avec le codage souhaité
            await fs.writeFile(chemin, buffer);
            console.log('Fichier écrit avec succès.');
        } catch (error) {
            console.error('Erreur lors de l\'écriture du fichier :', error);
        }
    },

    async mettreAJourFichier(chemin: string, contenu: string): Promise<void> {
        try {
              await fs.appendFile(chemin, "\n" + contenu, "utf-8");
              console.log("Fichier mis à jour avec succès");
            } catch (error) {
             console.log("Échec du processus avec l'erreur :", error);
        }
    },

    async lireFichier(nomFichier: string): Promise<void> {
        try {
          const data: string = await fs.readFile(nomFichier, "utf-8");
          console.log(data);
        } catch (error) {
          console.error("Il y a eu une erreur :", error);
        }
      },

    async supprimerFichier(chemin: string): Promise<void> {
        try {
            await fs.unlink(chemin);
            console.log('Fichier supprimé avec succès.');
        } catch (error) {
            console.error('Erreur lors de la suppression du fichier :', error);
        }
    },

    async renommerFichier(cheminAncien: string, cheminNouveau: string): Promise<void> {
        try {
            await fs.rename(cheminAncien, cheminNouveau);
            console.log('Fichier renommé avec succès.');
        } catch (error) {
            console.error('Erreur lors du renommage du fichier :', error);
        }
    },

    async creerDossier(chemin: string, options: { recursive?: boolean } = { recursive: false }): Promise<void> {
        try {
            await fs.mkdir(chemin, options);
            console.log('Dossier créé avec succès.');
        } catch (error) {
            console.error('Erreur lors de la création du dossier :', error);
        }
    },

    async listerDossier(chemin: string) {
      try {
        const elements = await fs.readdir(chemin, { withFileTypes: true });
        elements.forEach(element => {
          if (element.isDirectory()) {
            console.log(`📁 Dossier : ${element.name}`);
          } else {
            console.log(`📄 Fichier : ${element.name}`);
          }
        });
      } catch (error) {
        console.error('Erreur lors de la lecture du dossier :', error);
      }
    },

    async copierFichier(cheminOrigine: string, cheminDestination: string): Promise<void> {
        try {
            await fs.copyFile(cheminOrigine, cheminDestination);
            console.log('Fichier copié avec succès.');
        } catch (error) {
            console.error('Erreur lors de la copie du fichier :', error);
        }
    },

    async obtenirStatistiques(cheminFichier: string) {
      try {
        const statistiques = await fs.stat(cheminFichier);
        
        console.log(`📄 Fichier : ${cheminFichier}`);
        console.log(`- Taille : ${statistiques.size} octets`);
        console.log(`- Date de création : ${statistiques.birthtime}`);
        console.log(`- Dernière modification : ${statistiques.mtime}`);
        console.log(`- Est un fichier : ${statistiques.isFile()}`);
        console.log(`- Est un dossier : ${statistiques.isDirectory()}`);
      } catch (error) {
        console.error('Erreur lors de l\'obtention des statistiques du fichier :', error);
      }
    },
};  
