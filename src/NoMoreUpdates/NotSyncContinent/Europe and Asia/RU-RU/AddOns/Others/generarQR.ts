export async function сгенерироватьQR(текст: string): Promise<void> {
    const formData = new FormData();
    const capturedImage = (document.getElementById('capturedImage') as HTMLImageElement)?.src;

    // Если предоставлен текст, используем его напрямую
    let imageUrl: string | null = текст;

    // Если нет текста, проверяем, есть ли захваченное изображение
    if (!текст && capturedImage) {
        const blob = await (await fetch(capturedImage)).blob();
        formData.append('image', blob, 'edited_image.png');

        // Загрузить изображение и получить URL
        try {
            const imgbbAPIKey = '141ab687962793e8771c1dc2e3f20c7f';
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`, {
                method: 'POST',
                body: formData
            });

            const data: { data: { url: string } } = await response.json();
            imageUrl = data.data.url; // Получить URL загруженного изображения
        } catch (error) {
            console.error('Ошибка при загрузке изображения:', error);
            alert('Произошла ошибка при загрузке изображения.');
            return;
        }
    } else if (!текст) {
        alert('Пожалуйста, введите текст или выберите/снимите изображение перед генерацией QR-кода.');
        return;
    }

    // Генерировать QR-код с URL изображения или текста
    try {
        const qrResponse = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(imageUrl)}`);
        
        const qrResult = document.getElementById('qrResult');
        if (qrResult) {
            qrResult.innerHTML = `<h2>Сгенерированный QR-код:</h2><img src="${qrResponse.url}" alt="QR-код">`;
        }
    } catch (error) {
        console.error('Ошибка при генерации QR-кода:', error);
        alert('Произошла ошибка при генерации QR-кода.');
    }
}
