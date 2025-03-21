const SFTPClient = require('ssh2-sftp-client');

export async function подключитьSFTP(сервер: string, порт: number, пользователь: string, пароль: string, путьДляСкачивания: string) {
    const sftp = new SFTPClient();

    const config = {
        host: сервер,
        port: порт, // o el puerto que estés usando
        username: пользователь,
        password: пароль
    };

    try {
        await sftp.connect(config);
        console.log('Подключено к серверу SFTP');

        // Список файлов в корневой директории
        const lista = await sftp.list('/');
        console.log('Файлы в директории:', lista);

        // Скачать файл
        const remoteFilePath = путьДляСкачивания;
        const localFilePath = './файл_скачан.txt';
        await sftp.get(remoteFilePath, localFilePath);
        console.log(`Файл скачан: ${localFilePath}`);

    } catch (error) {
        console.error('Ошибка подключения к SFTP:', error);
    } finally {
        sftp.end();
    }
}
