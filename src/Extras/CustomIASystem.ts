import fs from "fs";

export interface PreguntaRespuesta {
  input: string;
  output: string;
}

export function normalizarTexto(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // elimina tildes
    .replace(/[^\w\s¿?¡!.,]/g, "") // elimina símbolos raros como "¡¡"
    .replace(/\s+/g, " ") // reemplaza múltiples espacios por uno
    .trim();
}

export function entrenarRed(
  preguntasRespuestas: PreguntaRespuesta[]
): PreguntaRespuesta[] {
  return preguntasRespuestas.map((item) => ({
    input: normalizarTexto(item.input),
    output: item.output,
  }));
}

export function preguntarRed(
  inputTexto: string,
  pathArchivo: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(pathArchivo, "utf8", (err, data) => {
      if (err) {
        reject(`Error leyendo el archivo ${pathArchivo}: ${err}`);
        return;
      }

      let preguntasRespuestas: PreguntaRespuesta[];
      try {
        preguntasRespuestas = JSON.parse(data);
      } catch (parseErr) {
        reject(`Error parseando el archivo JSON: ${parseErr}`);
        return;
      }

      const red = entrenarRed(preguntasRespuestas);
      console.log("Red neuronal entrenada.");

      const textoNormalizado = normalizarTexto(inputTexto);
      const respuesta = red.find((item) => item.input === textoNormalizado);

      resolve(
        respuesta ? respuesta.output : "Lo siento, no entiendo esa pregunta."
      );
    });
  });
}

export async function preguntarAGPT(
  textoDeEntrada: string,
  pathDelArchivo: string
): Promise<string> {
  try {
    return await preguntarRed(textoDeEntrada, pathDelArchivo);
  } catch (err) {
    return err as string;
  }
}
