// Função para iniciar o acesso à câmera
export async function iniciarCameraEVideo() {
    try {
        // Solicitar acesso à câmera
        const fluxo = await navigator.mediaDevices.getUserMedia({ video: true });

        // Obter a primeira pista de vídeo do fluxo
        const pistaDeVideo = fluxo.getVideoTracks()[0];

        console.log('Pista de vídeo:', pistaDeVideo);

        // Exibir informações sobre a pista de vídeo
        console.log('ID da pista:', pistaDeVideo.id);
        console.log('Label da pista:', pistaDeVideo.label);
        console.log('A pista está habilitada?', pistaDeVideo.enabled);
        
        // Exibir vídeo em um elemento <video>
        const elementoDeVideo = document.querySelector('video');
        if (elementoDeVideo) {
            elementoDeVideo.srcObject = fluxo;
            elementoDeVideo.play();
        }

    } catch (erro) {
        console.error('Erro ao acessar a câmera:', erro);
    }
}
