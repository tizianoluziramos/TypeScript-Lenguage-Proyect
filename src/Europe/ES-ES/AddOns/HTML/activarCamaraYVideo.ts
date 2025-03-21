// Función para iniciar el acceso a la cámara
export async function iniciarCamarayVideo() {
    try {
        // Solicitar acceso a la cámara
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // Obtener la primera pista de video del flujo
        const pistaDeVideo = stream.getVideoTracks()[0];

        console.log('Pista de video:', pistaDeVideo);

        // Mostrar información sobre la pista de video
        console.log('ID de la pista:', pistaDeVideo.id);
        console.log('Label de la pista:', pistaDeVideo.label);
        console.log('¿La pista está habilitada?', pistaDeVideo.enabled);
        
        // Mostrar video en un elemento <video>
        const videoElement = document.querySelector('video');
        if (videoElement) {
            videoElement.srcObject = stream;
            videoElement.play();
        }

    } catch (error) {
        console.error('Error al acceder a la cámara:', error);
    }
}
