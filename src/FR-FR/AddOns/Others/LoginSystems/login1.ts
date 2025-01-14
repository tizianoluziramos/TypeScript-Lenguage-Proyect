import { v4 as uuidv4 } from 'uuid';

export class GestionnaireDeClés {
    private static caracteres: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    private clés: { clé: string; uuid: string }[] = []; // Stocke les clés et leurs UUIDs

    // Génère une clé de produit
    static générerClé(): string {
        let clé: string = '';

        for (let i = 0; i < 5; i++) {
            if (i > 0) {
                clé += '-'; // Ajoute des tirets entre les groupes de caractères
            }
            for (let j = 0; j < 5; j++) {
                const indiceAléatoire = Math.floor(Math.random() * this.caracteres.length);
                clé += this.caracteres[indiceAléatoire]; // Sélectionne un caractère aléatoire
            }
        }

        return clé;
    }

    // Ajoute une clé et son UUID au tableau
    ajouterClé(clé: string): void {
        const nouveauUUID = uuidv4(); // Génère un nouveau UUID
        this.clés.push({ clé, uuid: nouveauUUID });
    }

    // Vérifie si la clé existe dans le tableau et correspond à l'UUID
    validerClé(clé: string, uuid: string): boolean {
        return this.clés.some(item => item.clé === clé && item.uuid === uuid);
    }

    // Génère et ajoute une nouvelle clé au tableau
    créerEtAjouterClé(): void {
        const nouvelleClé = GestionnaireDeClés.générerClé();
        this.ajouterClé(nouvelleClé);
        console.log(`Clé générée et ajoutée : ${nouvelleClé}`);
    }

    // Affiche toutes les clés stockées
    afficherClés(): void {
        console.log("Clés stockées:", this.clés);
    }
}

// Fonction de connexion
export function seConnecter(cléSaisie: string, uuidSaisi: string, key: any): void {
    if (key.validerClé(cléSaisie, uuidSaisi)) {
        console.log("Connexion réussie.");
    } else {
        console.log("Clé ou UUID incorrect. Essayez à nouveau.");
    }
}
