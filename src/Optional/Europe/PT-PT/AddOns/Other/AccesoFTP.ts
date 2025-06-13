const SFTPClient = require('ssh2-sftp-client');

export async function conectarSFTP(servidor: string, puerto: number, usuario: string, senha: string, rutaDescargar: string) {
    const sftp = new SFTPClient();

    const config = {
        host: servidor,
        port: puerto, // ou a porta que você está usando
        username: usuario,
        password: senha
    };

    try {
        await sftp.connect(config);
        console.log('Conectado ao servidor SFTP');

        // Listar arquivos no diretório raiz
        const lista = await sftp.list('/');
        console.log('Arquivos no diretório:', lista);

        // Baixar um arquivo
        const caminhoRemoto = rutaDescargar;
        const caminhoLocal = './arquivo_baixado.txt';
        await sftp.get(caminhoRemoto, caminhoLocal);
        console.log(`Arquivo baixado: ${caminhoLocal}`);

    } catch (erro) {
        console.error('Erro na conexão SFTP:', erro);
    } finally {
        sftp.end();
    }
}
