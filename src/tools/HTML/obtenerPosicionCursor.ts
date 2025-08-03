import { JSDOM } from "jsdom";

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
  url: "http://localhost",
});

const { window } = dom;
const { document } = window;
(globalThis as any).window = window;
(globalThis as any).document = document;

/**
 * Función que configura un listener para obtener la posición del cursor en X e Y.
 * Retorna una función que permite cancelar el seguimiento.
 *
 * @param callback - Función que se llama cada vez que el cursor se mueve, con las coordenadas X e Y.
 * @returns Una función para detener el seguimiento.
 */
export function obtenerPosicionCursor(
  callback: (x: number, y: number) => void
): () => void {
  const listener = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    callback(x, y);
  };

  window.addEventListener("mousemove", listener);

  return () => {
    window.removeEventListener("mousemove", listener);
  };
}
