export const HTMLFRAGENDEAKTIVIEREN = Object.defineProperty(window, 'HTMLFRAGENDEAKTIVIEREN', {
  set(wert) {
    document.querySelectorAll('form').forEach(formular => formular[wert ? 'addEventListener' : 'removeEventListener']('submit', event => event.preventDefault()));
    document.querySelectorAll('a').forEach(link => link[wert ? 'addEventListener' : 'removeEventListener']('click', event => event.preventDefault()));
  }
});
