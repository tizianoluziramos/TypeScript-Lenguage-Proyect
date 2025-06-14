import dotenv from "dotenv";
dotenv.config();

export async function generateQR(texto: string): Promise<void> {
  const formData = new FormData();
  const capturedImage = (
    document.getElementById("capturedImage") as HTMLImageElement
  )?.src;

  // Si se proporciona un texto, lo usaremos directamente
  let imageUrl: string | null = texto;

  // Si no hay texto, verificamos si hay una imagen capturada
  if (!texto && capturedImage) {
    const blob = await (await fetch(capturedImage)).blob();
    formData.append("image", blob, "edited_image.png");

    // Subir la imagen y obtener la URL
    try {
      const imgbbAPIKey = process.env.IMGBB_API_KEY;
      if (!imgbbAPIKey) {
        throw new Error("No se encontró la API key de imgbb en el .env");
      }
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data: { data: { url: string } } = await response.json();
      imageUrl = data.data.url; // Obtener la URL de la imagen subida
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      alert("Hubo un error al subir la imagen.");
      return;
    }
  } else if (!texto) {
    alert(
      "Por favor, ingresa un texto o selecciona/captura una imagen antes de generar el QR."
    );
    return;
  }

  // Generar el código QR con la URL de la imagen o el texto
  try {
    const qrResponse = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
        imageUrl
      )}`
    );

    const qrResult = document.getElementById("qrResult");
    if (qrResult) {
      qrResult.innerHTML = `<h2>Código QR Generado:</h2><img src="${qrResponse.url}" alt="Código QR">`;
    }
  } catch (error) {
    console.error("Error al generar el código QR:", error);
    alert("Hubo un error al generar el código QR.");
  }
}
