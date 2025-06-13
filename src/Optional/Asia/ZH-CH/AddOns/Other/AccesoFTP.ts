const SFTPClient = require('ssh2-sftp-client');

export async function 连接SFTP(服务器: string, 端口: number, 用户名: string, 密码: string, 下载路径: string) {
    const sftp = new SFTPClient();

    const 配置 = {
        host: 服务器,
        port: 端口, // 或者使用你所用的端口
        username: 用户名,
        password: 密码
    };

    try {
        await sftp.connect(配置);
        console.log('已连接到 SFTP 服务器');

        // 列出根目录中的文件
        const 列表 = await sftp.list('/');
        console.log('目录中的文件:', 列表);

        // 下载文件
        const 远程文件路径 = 下载路径;
        const 本地文件路径 = './下载的文件.txt';
        await sftp.get(远程文件路径, 本地文件路径);
        console.log(`已下载文件: ${本地文件路径}`);

    } catch (error) {
        console.error('SFTP 连接错误:', error);
    } finally {
        sftp.end();
    }
}
