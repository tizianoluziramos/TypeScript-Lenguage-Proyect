import fs from 'fs';

interface PreguntaRespuesta {
  input: string;
  output: string;
}

export function normalizarTexto(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, ' ')
    .trim();
}

export function entrenarRed(preguntasRespuestas: PreguntaRespuesta[]): { input: string; output: string }[] {
  const entrenamiento = preguntasRespuestas.map(item => ({
    input: normalizarTexto(item.input),
    output: item.output
  }));

  return entrenamiento;
}

export function preguntarRed(inputTexto: string, pathArchivo: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(pathArchivo, 'utf8', (err, data) => {
      if (err) {
        reject(`Error leyendo el archivo ${pathArchivo}: ${err}`);
        return;
      }

      const preguntasRespuestas: PreguntaRespuesta[] = JSON.parse(data);

      const red = entrenarRed(preguntasRespuestas);

      console.log("Red neuronal entrenada.");

      const textoNormalizado = normalizarTexto(inputTexto);

      const respuesta = red.find(item => item.input === textoNormalizado);

      if (respuesta) {
        resolve(respuesta.output);
      } else {
        resolve("Lo siento, no entiendo esa pregunta.");
      }
    });
  });
}

export async function preguntarAGPT(textoDeEntrada: string, pathDelArchivo: string): Promise<string> {
  try {
    const respuesta = await preguntarRed(textoDeEntrada, pathDelArchivo);
    return respuesta;
  } catch (err) {
    return (err as string);  // Aseguramos que el error sea un string
  }
}
