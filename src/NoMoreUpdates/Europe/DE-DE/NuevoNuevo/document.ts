class Dokument {
  holeElementById(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  holeElementeByKlasse(namenKlasse: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(namenKlasse);
  }

  holeElementeByTag(tagName: string): HTMLCollectionOf<Element> {
    return document.getElementsByTagName(tagName);
  }

  abfrageSelector(selektor: string): Element | null {
    return document.querySelector(selektor);
  }

  abfrageAlleSelector(selektor: string): NodeListOf<Element> {
    return document.querySelectorAll(selektor);
  }

  erstelleElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  erstelleText(text: string): Text {
    return document.createTextNode(text);
  }

  schreibeInDokument(inhalt: string): void {
    document.write(inhalt);
  }

  schließeDokument(): void {
    document.close();
  }

  öffneDokument(tipo: string, url: string, name: string): Window | null {
    return window.open(tipo, url, name);
  }

  holeCookie(): string {
    return document.cookie;
  }

  setzeCookie(cookie: string): void {
    document.cookie = cookie;
  }

  holeTitel(): string {
    return document.title;
  }

  setzeTitel(titel: string): void {
    document.title = titel;
  }

  holeURL(): string {
    return document.URL;
  }

  holeBaseURI(): string {
    return document.baseURI;
  }

  holeDomain(): string {
    return document.domain;
  }

  setzeDomain(domain: string): void {
    document.domain = domain;
  }

  holeSprache(): string {
    return document.documentElement.lang;
  }

  setzeSprache(sprache: string): void {
    document.documentElement.lang = sprache;
  }

  holeKompatibilitätsModus(): string {
    return document.compatMode;
  }

  holeInhaltstyp(): string {
    return document.contentType;
  }

  holeAktivesElement(): Element | null {
    return document.activeElement;
  }

  fügeEventListenerHinzu(typ: string, listener: EventListenerOrEventListenerObject, optionen?: boolean | AddEventListenerOptions): void {
    document.addEventListener(typ, listener, optionen);
  }

  entferneEventListener(typ: string, listener: EventListenerOrEventListenerObject, optionen?: boolean | EventListenerOptions): void {
    document.removeEventListener(typ, listener, optionen);
  }

  löseEventAus(event: Event): boolean {
    return document.dispatchEvent(event);
  }

  holeZeichenCodierung(): string {
    return document.characterSet;
  }

  holeScripts(): HTMLCollectionOf<HTMLScriptElement> {
    return document.scripts;
  }

  holeStile(): StyleSheetList {
    return document.styleSheets;
  }

  importiereKnoten(knoten: Node, tief: boolean): Node {
    return document.importNode(knoten, tief);
  }

  kloneKnoten(knoten: Node, tief: boolean): Node {
    return knoten.cloneNode(tief);
  }

  holeInlineStil(element: HTMLElement): CSSStyle {
    return new CSSStyle(element.style);
  }
}

export class CSSStyle {
  private style: CSSStyleDeclaration;

  constructor(style: CSSStyleDeclaration) {
    this.style = style;
  }

  setzeEigenschaft(eigenschaft: string, wert: string): void {
    this.style.setProperty(eigenschaft, wert);
  }

  holeEigenschaft(eigenschaft: string): string {
    return this.style.getPropertyValue(eigenschaft);
  }

  entferneEigenschaft(eigenschaft: string): void {
    this.style.removeProperty(eigenschaft);
  }

  // Vollständige Zuordnung aller bekannten CSS-Eigenschaften (ins Deutsche)
  get farbe(): string {
    return this.style.color;
  }
  set farbe(wert: string) {
    this.style.color = wert;
  }

  get hintergrundFarbe(): string {
    return this.style.backgroundColor;
  }
  set hintergrundFarbe(wert: string) {
    this.style.backgroundColor = wert;
  }

  get breite(): string {
    return this.style.width;
  }
  set breite(wert: string) {
    this.style.width = wert;
  }

  get höhe(): string {
    return this.style.height;
  }
  set höhe(wert: string) {
    this.style.height = wert;
  }

  get rand(): string {
    return this.style.margin;
  }
  set rand(wert: string) {
    this.style.margin = wert;
  }

  get polsterung(): string {
    return this.style.padding;
  }
  set polsterung(wert: string) {
    this.style.padding = wert;
  }

  get rahmen(): string {
    return this.style.border;
  }
  set rahmen(wert: string) {
    this.style.border = wert;
  }

  get position(): string {
    return this.style.position;
  }
  set position(wert: string) {
    this.style.position = wert;
  }

  get display(): string {
    return this.style.display;
  }
  set display(wert: string) {
    this.style.display = wert;
  }

  // Weitere CSS-Eigenschaften (vollständig in der folgenden Liste)
  get flex(): string {
    return this.style.flex;
  }
  set flex(wert: string) {
    this.style.flex = wert;
  }

  get schriftGröße(): string {
    return this.style.fontSize;
  }
  set schriftGröße(wert: string) {
    this.style.fontSize = wert;
  }

  get schriftFamilie(): string {
    return this.style.fontFamily;
  }
  set schriftFamilie(wert: string) {
    this.style.fontFamily = wert;
  }

  get opazität(): string {
    return this.style.opacity;
  }
  set opazität(wert: string) {
    this.style.opacity = wert;
  }
}

export const dokument = new Dokument();
