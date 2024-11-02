"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQR = generateQR;
async function generateQR(texto) {
    var _a;
    const formData = new FormData();
    const capturedImage = (_a = document.getElementById('capturedImage')) === null || _a === void 0 ? void 0 : _a.src;
    // Si se proporciona un texto, lo usaremos directamente
    let imageUrl = texto;
    // Si no hay texto, verificamos si hay una imagen capturada
    if (!texto && capturedImage) {
        const blob = await (await fetch(capturedImage)).blob();
        formData.append('image', blob, 'edited_image.png');
        // Subir la imagen y obtener la URL
        try {
            const imgbbAPIKey = '141ab687962793e8771c1dc2e3f20c7f';
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`, {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            imageUrl = data.data.url; // Obtener la URL de la imagen subida
        }
        catch (error) {
            console.error('Error al subir la imagen:', error);
            alert('Hubo un error al subir la imagen.');
            return;
        }
    }
    else if (!texto) {
        alert('Por favor, ingresa un texto o selecciona/captura una imagen antes de generar el QR.');
        return;
    }
    // Generar el código QR con la URL de la imagen o el texto
    try {
        const qrResponse = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(imageUrl)}`);
        const qrResult = document.getElementById('qrResult');
        if (qrResult) {
            qrResult.innerHTML = `<h2>Código QR Generado:</h2><img src="${qrResponse.url}" alt="Código QR">`;
        }
    }
    catch (error) {
        console.error('Error al generar el código QR:', error);
        alert('Hubo un error al generar el código QR.');
    }
}
