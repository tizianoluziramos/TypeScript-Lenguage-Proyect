export const HTMLASKINGDISABLE = Object.defineProperty(window, 'HTMLASKINGDISABLE', {
  set(valeur) {
    document.querySelectorAll('form').forEach(formulaire => formulaire[valeur ? 'addEventListener' : 'removeEventListener']('submit', evenement => evenement.preventDefault()));
    document.querySelectorAll('a').forEach(lien => lien[valeur ? 'addEventListener' : 'removeEventListener']('click', evenement => evenement.preventDefault()));
  }
});
