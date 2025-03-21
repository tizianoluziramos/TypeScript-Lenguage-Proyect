import * as http from 'http';

export function 创建服务器(端口: number): void {
    const 服务器 = http.createServer((请求, 响应) => {
        响应.writeHead(200, { 'Content-Type': 'text/plain' });
        响应.end('服务器正在运行\n');
    });

    服务器.listen(端口, () => {
        console.log(`服务器正在监听 http://localhost:${端口}`);
    });
}
