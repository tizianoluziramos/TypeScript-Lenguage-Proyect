// charAt.ts

// Estender o protótipo de String para adicionar a função caracterEm
declare global {
    interface String {
        caracterEm(index: number): string;
    }
}

String.prototype.caracterEm = function (index: number): string {
    const comprimento = this.length;

    // Lidar com índices negativos
    if (index < 0) {
        index = comprimento + index;
    }

    // Verificar se o índice está dentro dos limites
    if (index < 0 || index >= comprimento) {
        return ""; // Retorna uma cadeia vazia se o índice estiver fora dos limites
    }

    // Retornar o caractere na posição indicada
    return this.charAt(index);
};

// Exportar a função para poder utilizá-la em outros arquivos
export const caracterEm = function (this: string, index: number): string {
    return this.caracterEm(index);
};
