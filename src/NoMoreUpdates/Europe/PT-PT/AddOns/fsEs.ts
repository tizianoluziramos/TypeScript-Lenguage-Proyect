import fs from 'fs/promises';
import { Stats } from 'fs';
import iconv from 'iconv-lite'; // Importar o módulo de encoding

// Definimos o tipo para as opções
interface Opções {
    encoding?: string; // Tornamos o encoding opcional
}

export const fsPt = {
    async escreverArquivo(caminho: string, conteudo: string, opções: Opções = {}): Promise<void> {
        try {
            const encoding = opções.encoding || 'utf-8';
            const buffer = iconv.encode(conteudo, encoding); // Convertendo o conteúdo para o buffer com a codificação desejada
            await fs.writeFile(caminho, buffer);
            console.log('Arquivo escrito com sucesso.');
        } catch (error) {
            console.error('Erro ao escrever o arquivo:', error);
        }
    },

    async atualizarArquivo(caminho: string, conteudo: string): Promise<void> {
        try {
              await fs.appendFile(caminho, "\n" + conteudo, "utf-8");
              console.log("Arquivo atualizado com sucesso");
            } catch (error) {
             console.log("Processo falhou com erro:", error);
        }
    },

    async lerArquivo(nomeArquivo: string): Promise<void> {
        try {
          const dados: string = await fs.readFile(nomeArquivo, "utf-8");
          console.log(dados);
        } catch (error) {
          console.error("Houve um erro:", error);
        }
      },

    async excluirArquivo(caminho: string): Promise<void> {
        try {
            await fs.unlink(caminho);
            console.log('Arquivo excluído com sucesso.');
        } catch (error) {
            console.error('Erro ao excluir o arquivo:', error);
        }
    },

    async renomearArquivo(caminhoAntigo: string, caminhoNovo: string): Promise<void> {
        try {
            await fs.rename(caminhoAntigo, caminhoNovo);
            console.log('Arquivo renomeado com sucesso.');
        } catch (error) {
            console.error('Erro ao renomear o arquivo:', error);
        }
    },

    async criarDiretório(caminho: string, opções: { recursive?: boolean } = { recursive: false }): Promise<void> {
        try {
            await fs.mkdir(caminho, opções);
            console.log('Diretório criado com sucesso.');
        } catch (error) {
            console.error('Erro ao criar o diretório:', error);
        }
    },

    async listarPasta(caminho: string) {
      try {
        const elementos = await fs.readdir(caminho, { withFileTypes: true });
        elementos.forEach(elemento => {
          if (elemento.isDirectory()) {
            console.log(`📁 Pasta: ${elemento.name}`);
          } else {
            console.log(`📄 Arquivo: ${elemento.name}`);
          }
        });
      } catch (error) {
        console.error('Erro ao ler a pasta:', error);
      }
    },

    async copiarArquivo(caminhoOrigem: string, caminhoDestino: string): Promise<void> {
        try {
            await fs.copyFile(caminhoOrigem, caminhoDestino);
            console.log('Arquivo copiado com sucesso.');
        } catch (error) {
            console.error('Erro ao copiar o arquivo:', error);
        }
    },

    async obterEstatísticas(caminhoArquivo: string) {
      try {
        const estatísticas = await fs.stat(caminhoArquivo);
        
        console.log(`📄 Arquivo: ${caminhoArquivo}`);
        console.log(`- Tamanho: ${estatísticas.size} bytes`);
        console.log(`- Data de criação: ${estatísticas.birthtime}`);
        console.log(`- Última modificação: ${estatísticas.mtime}`);
        console.log(`- É arquivo: ${estatísticas.isFile()}`);
        console.log(`- É diretório: ${estatísticas.isDirectory()}`);
      } catch (error) {
        console.error('Erro ao obter as estatísticas do arquivo:', error);
      }
    },  
};
