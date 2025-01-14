// readlineUtil.ts
import * as rls from "readline-sync";

const utilitaireRls = {
    question: (message: string): string => rls.question(message),
    questionEntier: (message: string): number => rls.questionInt(message),
    questionOuiNon: (message: string): boolean => rls.keyInYNStrict(message),
    pause: (...args: any[]): void => rls.keyInPause(...args),
    questionAvecValidation: (message: string, valider: (input: string) => boolean): string => {
        let reponse: string;
        do {
            reponse = rls.question(message);
        } while (!valider(reponse));
        return reponse;
    },
    afficherMessage: (message: string): void => console.log(message),
    motDePasseAvecEntrées: (message: string): string => rls.question(message, { hideEchoBack: true }),
    lire: () => rls.keyIn('Appuyez sur n\'importe quelle touche pour continuer...'),
};

export default utilitaireRls;
