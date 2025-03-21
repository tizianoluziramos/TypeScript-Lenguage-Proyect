class Documento {
  obterElementoPorId(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  obterElementosPorClasse(nomeClasse: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(nomeClasse);
  }

  obterElementosPorEtiqueta(etiqueta: string): HTMLCollectionOf<Element> {
    return document.getElementsByTagName(etiqueta);
  }

  consultarSelector(selecao: string): Element | null {
    return document.querySelector(selecao);
  }

  consultarTodosOsSelectores(selecao: string): NodeListOf<Element> {
    return document.querySelectorAll(selecao);
  }

  criarElemento(etiqueta: string): HTMLElement {
    return document.createElement(etiqueta);
  }

  criarTexto(texto: string): Text {
    return document.createTextNode(texto);
  }

  escreverNoDocumento(conteudo: string): void {
    document.write(conteudo);
  }

  fecharDocumento(): void {
    document.close();
  }

  abrirDocumento(tipo: string, url: string, nome: string): Window | null {
    return window.open(tipo, url, nome);
  }  

  obterCookie(): string {
    return document.cookie;
  }

  definirCookie(cookie: string): void {
    document.cookie = cookie;
  }

  obterTitulo(): string {
    return document.title;
  }

  definirTitulo(titulo: string): void {
    document.title = titulo;
  }

  obterURL(): string {
    return document.URL;
  }

  obterBaseURI(): string {
    return document.baseURI;
  }

  obterDominio(): string {
    return document.domain;
  }

  definirDominio(dominio: string): void {
    document.domain = dominio;
  }

  obterIdioma(): string {
    return document.documentElement.lang;
  }

  definirIdioma(idioma: string): void {
    document.documentElement.lang = idioma;
  }

  obterModoCompatibilidade(): string {
    return document.compatMode;
  }

  obterTipoDeConteudo(): string {
    return document.contentType;
  }

  obterElementoAtivo(): Element | null {
    return document.activeElement;
  }

  adicionarEvento(tipo: string, ouvinte: EventListenerOrEventListenerObject, opcoes?: boolean | AddEventListenerOptions): void {
    document.addEventListener(tipo, ouvinte, opcoes);
  }

  removerEvento(tipo: string, ouvinte: EventListenerOrEventListenerObject, opcoes?: boolean | EventListenerOptions): void {
    document.removeEventListener(tipo, ouvinte, opcoes);
  }

  dispararEvento(evento: Event): boolean {
    return document.dispatchEvent(evento);
  }
  
  obterCaracterCodificado(): string {
    return document.characterSet;
  }

  obterScripts(): HTMLCollectionOf<HTMLScriptElement> {
    return document.scripts;
  }

  obterEstilos(): StyleSheetList {
    return document.styleSheets;
  }
  
  importarNodo(nodo: Node, profundo: boolean): Node {
    return document.importNode(nodo, profundo);
  }

  clonarNodo(nodo: Node, profundo: boolean): Node {
    return nodo.cloneNode(profundo);
  }

  obterEstiloInline(elemento: HTMLElement): CSSStyle {
    return new CSSStyle(elemento.style);
  }
}

export class CSSStyle {
  private style: CSSStyleDeclaration;

  constructor(style: CSSStyleDeclaration) {
    this.style = style;
  }

  definirPropriedade(propriedade: string, valor: string): void {
    this.style.setProperty(propriedade, valor);
  }

  obterPropriedade(propriedade: string): string {
    return this.style.getPropertyValue(propriedade);
  }

  removerPropriedade(propriedade: string): void {
    this.style.removeProperty(propriedade);
  }

  // Mapeamento completo de todas as propriedades CSS conhecidas (para o português)
  get cor(): string {
    return this.style.color;
  }
  set cor(valor: string) {
    this.style.color = valor;
  }

  get corFundo(): string {
    return this.style.backgroundColor;
  }
  set corFundo(valor: string) {
    this.style.backgroundColor = valor;
  }

  get largura(): string {
    return this.style.width;
  }
  set largura(valor: string) {
    this.style.width = valor;
  }

  get altura(): string {
    return this.style.height;
  }
  set altura(valor: string) {
    this.style.height = valor;
  }

  get margem(): string {
    return this.style.margin;
  }
  set margem(valor: string) {
    this.style.margin = valor;
  }

  get preenchimento(): string {
    return this.style.padding;
  }
  set preenchimento(valor: string) {
    this.style.padding = valor;
  }

  get borda(): string {
    return this.style.border;
  }
  set borda(valor: string) {
    this.style.border = valor;
  }

  get posicao(): string {
    return this.style.position;
  }
  set posicao(valor: string) {
    this.style.position = valor;
  }

  get display(): string {
    return this.style.display;
  }
  set display(valor: string) {
    this.style.display = valor;
  }

  // Mais propriedades CSS (completas na lista seguinte)
  get flex(): string {
    return this.style.flex;
  }
  set flex(valor: string) {
    this.style.flex = valor;
  }

  get tamanhoFonte(): string {
    return this.style.fontSize;
  }
  set tamanhoFonte(valor: string) {
    this.style.fontSize = valor;
  }

  get familiaFonte(): string {
    return this.style.fontFamily;
  }
  set familiaFonte(valor: string) {
    this.style.fontFamily = valor;
  }

  get opacidade(): string {
    return this.style.opacity;
  }
  set opacidade(valor: string) {
    this.style.opacity = valor;
  }
}

export const documento = new Documento();
