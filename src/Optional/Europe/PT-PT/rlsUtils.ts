// readlineUtil.ts
import * as rls from "readline-sync";

const rlsUtil = {
    pergunta: (mensagem: string): string => rls.question(mensagem),
    perguntaInt: (mensagem: string): number => rls.questionInt(mensagem),
    perguntaSimNao: (mensagem: string): boolean => rls.keyInYNStrict(mensagem),
    pausa: (...args: any[]): void => rls.keyInPause(...args),
    perguntaComValidacao: (mensagem: string, validar: (input: string) => boolean): string => {
        let resposta: string;
        do {
            resposta = rls.question(mensagem);
        } while (!validar(resposta));
        return resposta;
    },
    mostrarMensagem: (mensagem: string): void => console.log(mensagem),
    chaveComEntradas: (mensagem: string): string => rls.question(mensagem, { hideEchoBack: true }),
    ler: () => rls.keyIn('Pressiona qualquer tecla para continuar...'),
};

export default rlsUtil;
