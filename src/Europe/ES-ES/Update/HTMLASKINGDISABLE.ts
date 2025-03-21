export const HTMLASKINGDISABLE = Object.defineProperty(window, 'HTMLASKINGDISABLE', {
  set(value) {
    document.querySelectorAll('form').forEach(form => form[value ? 'addEventListener' : 'removeEventListener']('submit', event => event.preventDefault()));
    document.querySelectorAll('a').forEach(link => link[value ? 'addEventListener' : 'removeEventListener']('click', event => event.preventDefault()));
  }
});
