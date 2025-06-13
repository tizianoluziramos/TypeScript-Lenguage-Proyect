export function converterABinario(texto: string): string {
    return texto
        .split('') // Divide o texto em caracteres individuais
        .map((caracter) => {
            const binario = caracter.charCodeAt(0).toString(2); // Obtém o código ASCII em binário
            return binario.padStart(8, '0'); // Garante que cada binário tenha 8 bits
        })
        .join(' '); // Junta todos os binários separados por espaço
}
