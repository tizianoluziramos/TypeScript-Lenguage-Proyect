export async function 生成二维码(文本: string): Promise<void> {
    const 表单数据 = new FormData();
    const 捕获的图像 = (document.getElementById('capturedImage') as HTMLImageElement)?.src;

    let 图片网址: string | null = 文本;

    if (!文本 && 捕获的图像) {
        const 二进制数据 = await (await fetch(捕获的图像)).blob();
        表单数据.append('image', 二进制数据, '编辑的图片.png');

        try {
            const imgbbAPI密钥 = '141ab687962793e8771c1dc2e3f20c7f';
            const 响应 = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbAPI密钥}`, {
                method: 'POST',
                body: 表单数据
            });

            const 数据: { data: { url: string } } = await 响应.json();
            图片网址 = 数据.data.url;
        } catch (错误) {
            console.error('上传图片时出错:', 错误);
            alert('上传图片时发生错误。');
            return;
        }
    } else if (!文本) {
        alert('请先输入文本或选择/捕获图片，然后再生成二维码。');
        return;
    }

    try {
        const 二维码响应 = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(图片网址)}`);
        
        const 二维码结果 = document.getElementById('qrResult');
        if (二维码结果) {
            二维码结果.innerHTML = `<h2>生成的二维码:</h2><img src="${二维码响应.url}" alt="二维码">`;
        }
    } catch (错误) {
        console.error('生成二维码时出错:', 错误);
        alert('生成二维码时发生错误。');
    }
}
