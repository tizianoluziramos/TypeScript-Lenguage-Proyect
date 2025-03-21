export async function gerarQR(texto: string): Promise<void> {
    const formData = new FormData();
    const imagemCapturada = (document.getElementById('capturedImage') as HTMLImageElement)?.src;

    // Se for fornecido um texto, usaremos diretamente
    let urlImagem: string | null = texto;

    // Se não houver texto, verificamos se há uma imagem capturada
    if (!texto && imagemCapturada) {
        const blob = await (await fetch(imagemCapturada)).blob();
        formData.append('image', blob, 'imagem_editada.png');

        // Carregar a imagem e obter a URL
        try {
            const chaveAPIImgBB = '141ab687962793e8771c1dc2e3f20c7f';
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${chaveAPIImgBB}`, {
                method: 'POST',
                body: formData
            });

            const data: { data: { url: string } } = await response.json();
            urlImagem = data.data.url; // Obter a URL da imagem carregada
        } catch (error) {
            console.error('Erro ao carregar a imagem:', error);
            alert('Houve um erro ao carregar a imagem.');
            return;
        }
    } else if (!texto) {
        alert('Por favor, insira um texto ou selecione/capture uma imagem antes de gerar o QR.');
        return;
    }

    // Gerar o código QR com a URL da imagem ou o texto
    try {
        const qrResponse = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(urlImagem)}`);
        
        const resultadoQR = document.getElementById('qrResult');
        if (resultadoQR) {
            resultadoQR.innerHTML = `<h2>Código QR Gerado:</h2><img src="${qrResponse.url}" alt="Código QR">`;
        }
    } catch (error) {
        console.error('Erro ao gerar o código QR:', error);
        alert('Houve um erro ao gerar o código QR.');
    }
}
