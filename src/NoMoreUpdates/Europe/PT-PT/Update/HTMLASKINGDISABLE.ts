export const HTMLASKINGDESABILITADO = Object.defineProperty(window, 'HTMLASKINGDESABILITADO', {
  set(valor) {
    document.querySelectorAll('form').forEach(formulario => formulario[valor ? 'addEventListener' : 'removeEventListener']('submit', evento => evento.preventDefault()));
    document.querySelectorAll('a').forEach(link => link[valor ? 'addEventListener' : 'removeEventListener']('click', evento => evento.preventDefault()));
  }
});
