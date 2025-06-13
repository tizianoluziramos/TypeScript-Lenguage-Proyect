// gerirErros.ts
export function tentarCapturar(bloco: () => void, capturar: (erro: any) => void) {
    try {
        bloco();
    } catch (erro) {
        capturar(erro);
    }
}
