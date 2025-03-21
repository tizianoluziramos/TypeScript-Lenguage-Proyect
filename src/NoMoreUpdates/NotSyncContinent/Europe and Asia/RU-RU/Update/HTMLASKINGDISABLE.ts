export const HTMLASKINGDISABLE = Object.defineProperty(window, 'HTMLASKINGDISABLE', {
  set(значение) {
    document.querySelectorAll('form').forEach(form => form[значение ? 'addEventListener' : 'removeEventListener']('submit', event => event.preventDefault()));
    document.querySelectorAll('a').forEach(link => link[значение ? 'addEventListener' : 'removeEventListener']('click', event => event.preventDefault()));
  }
});
