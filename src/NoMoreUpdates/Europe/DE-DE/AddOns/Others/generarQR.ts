export async function generiereQR(texto: string): Promise<void> {
    const formData = new FormData();
    const erfasstesBild = (document.getElementById('capturedImage') as HTMLImageElement)?.src;

    // Wenn ein Text bereitgestellt wird, verwenden wir diesen direkt
    let bildUrl: string | null = texto;

    // Wenn kein Text vorhanden ist, überprüfen wir, ob ein Bild erfasst wurde
    if (!texto && erfasstesBild) {
        const blob = await (await fetch(erfasstesBild)).blob();
        formData.append('image', blob, 'bearbeitetes_bild.png');

        // Bild hochladen und URL erhalten
        try {
            const imgbbAPIKey = '141ab687962793e8771c1dc2e3f20c7f';
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`, {
                method: 'POST',
                body: formData
            });

            const data: { data: { url: string } } = await response.json();
            bildUrl = data.data.url; // Die URL des hochgeladenen Bildes erhalten
        } catch (error) {
            console.error('Fehler beim Hochladen des Bildes:', error);
            alert('Es gab einen Fehler beim Hochladen des Bildes.');
            return;
        }
    } else if (!texto) {
        alert('Bitte geben Sie einen Text ein oder wählen/erfassen Sie ein Bild, bevor Sie den QR-Code generieren.');
        return;
    }

    // Den QR-Code mit der Bild-URL oder dem Text generieren
    try {
        const qrResponse = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(bildUrl)}`);
        
        const qrResult = document.getElementById('qrResult');
        if (qrResult) {
            qrResult.innerHTML = `<h2>Generierter QR-Code:</h2><img src="${qrResponse.url}" alt="QR-Code">`;
        }
    } catch (error) {
        console.error('Fehler beim Generieren des QR-Codes:', error);
        alert('Es gab einen Fehler beim Generieren des QR-Codes.');
    }
}
