class DocumentFr {
  obtenirElementParId(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  obtenirElementsParClasse(nomClasse: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(nomClasse);
  }

  obtenirElementsParEtiquette(etiquette: string): HTMLCollectionOf<Element> {
    return document.getElementsByTagName(etiquette);
  }

  consulterSelecteur(selecteur: string): Element | null {
    return document.querySelector(selecteur);
  }

  consulterTousLesSelecteurs(selecteur: string): NodeListOf<Element> {
    return document.querySelectorAll(selecteur);
  }

  creerElement(etiquette: string): HTMLElement {
    return document.createElement(etiquette);
  }

  creerTexte(texte: string): Text {
    return document.createTextNode(texte);
  }

  ecrireDansDocument(contenu: string): void {
    document.write(contenu);
  }

  fermerDocument(): void {
    document.close();
  }

  ouvrirDocument(type: string, url: string, nom: string): Window | null {
    return window.open(type, url, nom);
  }

  obtenirCookie(): string {
    return document.cookie;
  }

  definirCookie(cookie: string): void {
    document.cookie = cookie;
  }

  obtenirTitre(): string {
    return document.title;
  }

  definirTitre(titre: string): void {
    document.title = titre;
  }

  obtenirURL(): string {
    return document.URL;
  }

  obtenirBaseURI(): string {
    return document.baseURI;
  }

  obtenirDomaine(): string {
    return document.domain;
  }

  definirDomaine(domaine: string): void {
    document.domain = domaine;
  }

  obtenirLangue(): string {
    return document.documentElement.lang;
  }

  definirLangue(langue: string): void {
    document.documentElement.lang = langue;
  }

  obtenirModeCompatibilite(): string {
    return document.compatMode;
  }

  obtenirTypeDeContenu(): string {
    return document.contentType;
  }

  obtenirElementActif(): Element | null {
    return document.activeElement;
  }

  ajouterEvenement(type: string, ecouteur: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
    document.addEventListener(type, ecouteur, options);
  }

  supprimerEvenement(type: string, ecouteur: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {
    document.removeEventListener(type, ecouteur, options);
  }

  declencherEvenement(evenement: Event): boolean {
    return document.dispatchEvent(evenement);
  }

  obtenirCaractereCode(): string {
    return document.characterSet;
  }

  obtenirScripts(): HTMLCollectionOf<HTMLScriptElement> {
    return document.scripts;
  }

  obtenirStyles(): StyleSheetList {
    return document.styleSheets;
  }

  importerNoeud(noeud: Node, profond: boolean): Node {
    return document.importNode(noeud, profond);
  }

  clonerNoeud(noeud: Node, profond: boolean): Node {
    return noeud.cloneNode(profond);
  }

  obtenirStyleInline(element: HTMLElement): CSSStyle {
    return new CSSStyle(element.style);
  }
}

export class CSSStyle {
  private style: CSSStyleDeclaration;

  constructor(style: CSSStyleDeclaration) {
    this.style = style;
  }

  definirPropriete(propriete: string, valeur: string): void {
    this.style.setProperty(propriete, valeur);
  }

  obtenirPropriete(propriete: string): string {
    return this.style.getPropertyValue(propriete);
  }

  supprimerPropriete(propriete: string): void {
    this.style.removeProperty(propriete);
  }

  // Mappage complet de toutes les propriétés CSS connues (en français)
  get couleur(): string {
    return this.style.color;
  }
  set couleur(valeur: string) {
    this.style.color = valeur;
  }

  get couleurDeFond(): string {
    return this.style.backgroundColor;
  }
  set couleurDeFond(valeur: string) {
    this.style.backgroundColor = valeur;
  }

  get largeur(): string {
    return this.style.width;
  }
  set largeur(valeur: string) {
    this.style.width = valeur;
  }

  get hauteur(): string {
    return this.style.height;
  }
  set hauteur(valeur: string) {
    this.style.height = valeur;
  }

  get marge(): string {
    return this.style.margin;
  }
  set marge(valeur: string) {
    this.style.margin = valeur;
  }

  get remplissage(): string {
    return this.style.padding;
  }
  set remplissage(valeur: string) {
    this.style.padding = valeur;
  }

  get bordure(): string {
    return this.style.border;
  }
  set bordure(valeur: string) {
    this.style.border = valeur;
  }

  get position(): string {
    return this.style.position;
  }
  set position(valeur: string) {
    this.style.position = valeur;
  }

  get affichage(): string {
    return this.style.display;
  }
  set affichage(valeur: string) {
    this.style.display = valeur;
  }

  // Autres propriétés CSS (completes dans la liste suivante)
  get flex(): string {
    return this.style.flex;
  }
  set flex(valeur: string) {
    this.style.flex = valeur;
  }

  get taillePolice(): string {
    return this.style.fontSize;
  }
  set taillePolice(valeur: string) {
    this.style.fontSize = valeur;
  }

  get famillePolice(): string {
    return this.style.fontFamily;
  }
  set famillePolice(valeur: string) {
    this.style.fontFamily = valeur;
  }

  get opacite(): string {
    return this.style.opacity;
  }
  set opacite(valeur: string) {
    this.style.opacity = valeur;
  }
}

export const documentFr = new DocumentFr();
