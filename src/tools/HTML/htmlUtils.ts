export class UtilHTML {
  /**
   * Crea un nuevo elemento HTML (como 'div', 'p', 'button', etc.).
   * @param tipo El tipo de elemento a crear (por ejemplo: "div").
   * @returns El nuevo elemento HTML.
   */
  static crearElemento(tipo: string): HTMLElement {
    return document.createElement(tipo);
  }

  /**
   * Escribe texto dentro de un elemento.
   * @param elemento El elemento donde escribir.
   * @param texto El texto que se quiere poner.
   */
  static escribirTexto(elemento: HTMLElement, texto: string): void {
    elemento.textContent = texto;
  }

  /**
   * Agrega una clase al elemento (sirve para ponerle estilos).
   * @param elemento El elemento al que se le quiere poner la clase.
   * @param clase El nombre de la clase (por ejemplo: "rojo").
   */
  static agregarClase(elemento: HTMLElement, clase: string): void {
    elemento.classList.add(clase);
  }

  /**
   * Pone el elemento dentro de otro.
   * @param padre El elemento que va a contener al otro.
   * @param hijo El elemento que se quiere poner dentro.
   */
  static ponerDentro(padre: HTMLElement, hijo: HTMLElement): void {
    padre.appendChild(hijo);
  }

  /**
   * Busca un elemento que ya está en la página.
   * @param selector El nombre o clase del elemento (por ejemplo: "#miDiv" o ".caja").
   * @returns El elemento encontrado o null si no existe.
   */
  static buscar(selector: string): HTMLElement | null {
    return document.querySelector(selector);
  }

  /**
   * Borra un elemento de la página.
   * @param elemento El elemento que se quiere borrar.
   */
  static borrar(elemento: HTMLElement): void {
    if (elemento.parentElement) {
      elemento.parentElement.removeChild(elemento);
    }
  }
}