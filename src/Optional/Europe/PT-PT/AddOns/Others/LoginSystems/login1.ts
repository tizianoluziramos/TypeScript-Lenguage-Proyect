import { v4 as uuidv4 } from 'uuid';

export class GestorDeChaves {
    private static caracteres: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    private chaves: { chave: string; uuid: string }[] = []; // Armazena chaves e seus UUIDs

    // Gera uma chave de produto
    static gerarChave(): string {
        let chave: string = '';

        for (let i = 0; i < 5; i++) {
            if (i > 0) {
                chave += '-'; // Adiciona hífens entre os grupos de caracteres
            }
            for (let j = 0; j < 5; j++) {
                const indiceAleatorio = Math.floor(Math.random() * this.caracteres.length);
                chave += this.caracteres[indiceAleatorio]; // Seleciona um caractere aleatório
            }
        }

        return chave;
    }

    // Adiciona uma chave e seu UUID ao array
    adicionarChave(chave: string): void {
        const novoUUID = uuidv4(); // Gera um novo UUID
        this.chaves.push({ chave, uuid: novoUUID });
    }

    // Verifica se a chave existe no array e corresponde ao UUID
    validarChave(chave: string, uuid: string): boolean {
        return this.chaves.some(item => item.chave === chave && item.uuid === uuid);
    }

    // Gera e adiciona uma nova chave ao array
    criarEAdicionarChave(): void {
        const novaChave = GestorDeChaves.gerarChave();
        this.adicionarChave(novaChave);
        console.log(`Chave gerada e adicionada: ${novaChave}`);
    }

    // Exibe todas as chaves armazenadas
    mostrarChaves(): void {
        console.log("Chaves armazenadas:", this.chaves);
    }
}

// Função de login
export function iniciarSessao(chaveInserida: string, uuidInserido: string, key: any): void {
    if (key.validarChave(chaveInserida, uuidInserido)) {
        console.log("Login bem-sucedido.");
    } else {
        console.log("Chave ou UUID incorreto. Tente novamente.");
    }
}
