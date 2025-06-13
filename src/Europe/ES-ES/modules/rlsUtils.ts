// readlineUtil.ts
import * as rls from "readline-sync";

const rlsUtil = {
    pregunta: (mensaje: string): string => rls.question(mensaje),
    preguntaInt: (mensaje: string): number => rls.questionInt(mensaje),
    preguntaSiNo: (mensaje: string): boolean => rls.keyInYNStrict(mensaje),
    pausa: (...args: any[]): void => rls.keyInPause(...args),
    preguntaConValidacion: (mensaje: string, validar: (input: string) => boolean): string => {
        let respuesta: string;
        do {
            respuesta = rls.question(mensaje);
        } while (!validar(respuesta));
        return respuesta;
    },
    mostrarMensaje: (mensaje: string): void => console.log(mensaje),
    claveConEntradas: (mensaje: string): string => rls.question(mensaje, { hideEchoBack: true }),
    leer: () => rls.keyIn('Presiona cualquier tecla para continuar...'),
};

export default rlsUtil
