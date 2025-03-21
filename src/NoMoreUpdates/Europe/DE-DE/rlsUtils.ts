// readlineUtil.ts
import * as rls from "readline-sync";

const rlsUtil = {
    frage: (nachricht: string): string => rls.question(nachricht),
    frageInt: (nachricht: string): number => rls.questionInt(nachricht),
    frageJaNein: (nachricht: string): boolean => rls.keyInYNStrict(nachricht),
    pause: (...args: any[]): void => rls.keyInPause(...args),
    frageMitValidierung: (nachricht: string, validieren: (eingabe: string) => boolean): string => {
        let antwort: string;
        do {
            antwort = rls.question(nachricht);
        } while (!validieren(antwort));
        return antwort;
    },
    nachrichtAnzeigen: (nachricht: string): void => console.log(nachricht),
    passwortMitEingaben: (nachricht: string): string => rls.question(nachricht, { hideEchoBack: true }),
    lesen: () => rls.keyIn('Drücke eine beliebige Taste, um fortzufahren...'),
};

export default rlsUtil;
