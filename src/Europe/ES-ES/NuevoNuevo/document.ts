
class Documento {
  obtenerElementoPorId(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  obtenerElementosPorClase(nombreClase: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(nombreClase);
  }

  obtenerElementosPorEtiqueta(etiqueta: string): HTMLCollectionOf<Element> {
    return document.getElementsByTagName(etiqueta);
  }

  consultarSelector(seleccion: string): Element | null {
    return document.querySelector(seleccion);
  }

  consultarTodosLosSelectores(seleccion: string): NodeListOf<Element> {
    return document.querySelectorAll(seleccion);
  }

  crearElemento(etiqueta: string): HTMLElement {
    return document.createElement(etiqueta);
  }

  crearTexto(texto: string): Text {
    return document.createTextNode(texto);
  }

  escribirEnDocumento(contenido: string): void {
    document.write(contenido);
  }

  cerrarDocumento(): void {
    document.close();
  }

  abrirDocumento(tipo: string, url: string, nombre: string): Window | null {
    return window.open(url, nombre, tipo);
  }  

  obtenerCookie(): string {
    return document.cookie;
  }

  establecerCookie(cookie: string): void {
    document.cookie = cookie;
  }

  obtenerTitulo(): string {
    return document.title;
  }

  establecerTitulo(titulo: string): void {
    document.title = titulo;
  }

  obtenerURL(): string {
    return document.URL;
  }

  obtenerBaseURI(): string {
    return document.baseURI;
  }

  obtenerDominio(): string {
    return document.domain;
  }

  establecerDominio(dominio: string): void {
    document.domain = dominio;
  }

  obtenerIdioma(): string {
    return document.documentElement.lang;
  }

  establecerIdioma(idioma: string): void {
    document.documentElement.lang = idioma;
  }

  obtenerModoCompatibilidad(): string {
    return document.compatMode;
  }

  obtenerTipoDeContenido(): string {
    return document.contentType;
  }

  obtenerElementoActivo(): Element | null {
    return document.activeElement;
  }

  agregarEvento(tipo: string, listener: EventListenerOrEventListenerObject, opciones?: boolean | AddEventListenerOptions): void {
    document.addEventListener(tipo, listener, opciones);
  }

  removerEvento(tipo: string, listener: EventListenerOrEventListenerObject, opciones?: boolean | EventListenerOptions): void {
    document.removeEventListener(tipo, listener, opciones);
  }

  dispararEvento(evento: Event): boolean {
    return document.dispatchEvent(evento);
  }
  
  obtenerCaracterCodificado(): string {
    return document.characterSet;
  }

  obtenerScripts(): HTMLCollectionOf<HTMLScriptElement> {
    return document.scripts;
  }

  obtenerEstilos(): StyleSheetList {
    return document.styleSheets;
  }
  
  importarNodo(nodo: Node, profundo: boolean): Node {
    return document.importNode(nodo, profundo);
  }

  clonarNodo(nodo: Node, profundo: boolean): Node {
    return nodo.cloneNode(profundo);
  }

  obtenerEstiloInline(elemento: HTMLElement): CSSStyle {
    return new CSSStyle(elemento.style);
  }
}

export class CSSStyle {
  private style: CSSStyleDeclaration;

  constructor(style: CSSStyleDeclaration) {
    this.style = style;
  }

  establecerPropiedad(propiedad: string, valor: string): void {
    this.style.setProperty(propiedad, valor);
  }

  obtenerPropiedad(propiedad: string): string {
    return this.style.getPropertyValue(propiedad);
  }

  eliminarPropiedad(propiedad: string): void {
    this.style.removeProperty(propiedad);
  }

  // Mapeo completo de todas las propiedades CSS conocidas (al español)
  get color(): string {
    return this.style.color;
  }
  set color(valor: string) {
    this.style.color = valor;
  }

  get fondoColor(): string {
    return this.style.backgroundColor;
  }
  set fondoColor(valor: string) {
    this.style.backgroundColor = valor;
  }

  get ancho(): string {
    return this.style.width;
  }
  set ancho(valor: string) {
    this.style.width = valor;
  }

  get alto(): string {
    return this.style.height;
  }
  set alto(valor: string) {
    this.style.height = valor;
  }

  get margen(): string {
    return this.style.margin;
  }
  set margen(valor: string) {
    this.style.margin = valor;
  }

  get relleno(): string {
    return this.style.padding;
  }
  set relleno(valor: string) {
    this.style.padding = valor;
  }

  get borde(): string {
    return this.style.border;
  }
  set borde(valor: string) {
    this.style.border = valor;
  }

  get posicion(): string {
    return this.style.position;
  }
  set posicion(valor: string) {
    this.style.position = valor;
  }

  get display(): string {
    return this.style.display;
  }
  set display(valor: string) {
    this.style.display = valor;
  }

  // Más propiedades CSS (completas en la lista siguiente)
  get flex(): string {
    return this.style.flex;
  }
  set flex(valor: string) {
    this.style.flex = valor;
  }

  get fuenteTamano(): string {
    return this.style.fontSize;
  }
  set fuenteTamano(valor: string) {
    this.style.fontSize = valor;
  }

  get fuenteFamilia(): string {
    return this.style.fontFamily;
  }
  set fuenteFamilia(valor: string) {
    this.style.fontFamily = valor;
  }

  get opacidad(): string {
    return this.style.opacity;
  }
  set opacidad(valor: string) {
    this.style.opacity = valor;
  }
}

export const documento = new Documento();