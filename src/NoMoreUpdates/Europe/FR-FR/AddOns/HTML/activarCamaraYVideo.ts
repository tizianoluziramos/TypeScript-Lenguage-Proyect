// Fonction pour démarrer l'accès à la caméra
async function demarrerCameraEtVideo() {
    try {
        // Demander l'accès à la caméra
        const flux = await navigator.mediaDevices.getUserMedia({ video: true });

        // Obtenir la première piste vidéo du flux
        const pisteVideo = flux.getVideoTracks()[0];

        console.log('Piste vidéo :', pisteVideo);

        // Afficher les informations sur la piste vidéo
        console.log('ID de la piste :', pisteVideo.id);
        console.log('Label de la piste :', pisteVideo.label);
        console.log('La piste est-elle activée ?', pisteVideo.enabled);
        
        // Afficher la vidéo dans un élément <video>
        const elementVideo = document.querySelector('video');
        if (elementVideo) {
            elementVideo.srcObject = flux;
            elementVideo.play();
        }

    } catch (erreur) {
        console.error('Erreur lors de l\'accès à la caméra :', erreur);
    }
}
