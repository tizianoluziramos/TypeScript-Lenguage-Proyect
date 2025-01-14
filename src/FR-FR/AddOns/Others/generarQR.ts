export async function genererQR(texte: string): Promise<void> {
    const formData = new FormData();
    const imageCapturée = (document.getElementById('capturedImage') as HTMLImageElement)?.src;

    // Si un texte est fourni, nous l'utiliserons directement
    let urlImage: string | null = texte;

    // Si aucun texte n'est donné, nous vérifions s'il y a une image capturée
    if (!texte && imageCapturée) {
        const blob = await (await fetch(imageCapturée)).blob();
        formData.append('image', blob, 'image_modifiée.png');

        // Télécharger l'image et obtenir l'URL
        try {
            const cleAPIimgbb = '141ab687962793e8771c1dc2e3f20c7f';
            const reponse = await fetch(`https://api.imgbb.com/1/upload?key=${cleAPIimgbb}`, {
                method: 'POST',
                body: formData
            });

            const donnees: { data: { url: string } } = await reponse.json();
            urlImage = donnees.data.url; // Obtenir l'URL de l'image téléchargée
        } catch (error) {
            console.error('Erreur lors du téléchargement de l\'image:', error);
            alert('Il y a eu une erreur lors du téléchargement de l\'image.');
            return;
        }
    } else if (!texte) {
        alert('Veuillez entrer un texte ou sélectionner/capturer une image avant de générer le QR.');
        return;
    }

    // Générer le code QR avec l'URL de l'image ou le texte
    try {
        const reponseQR = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(urlImage)}`);
        
        const resultatQR = document.getElementById('qrResult');
        if (resultatQR) {
            resultatQR.innerHTML = `<h2>Code QR Généré :</h2><img src="${reponseQR.url}" alt="Code QR">`;
        }
    } catch (error) {
        console.error('Erreur lors de la génération du code QR:', error);
        alert('Il y a eu une erreur lors de la génération du code QR.');
    }
}
