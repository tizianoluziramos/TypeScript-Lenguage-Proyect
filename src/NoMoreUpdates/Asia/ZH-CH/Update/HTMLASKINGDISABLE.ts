export const 禁用HTMLASKING = Object.defineProperty(window, 'HTMLASKINGDISABLE', {
  set(值) {
    document.querySelectorAll('form').forEach(form => form[值 ? 'addEventListener' : 'removeEventListener']('submit', event => event.preventDefault()));
    document.querySelectorAll('a').forEach(link => link[值 ? 'addEventListener' : 'removeEventListener']('click', event => event.preventDefault()));
  }
});
